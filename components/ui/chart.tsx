'use client';

import {
  Chart as ChartJS,
  type ChartConfiguration,
  type ChartData,
  type ChartOptions,
  type ChartType,
  registerables,
} from 'chart.js';
import { ComponentProps, useEffect, useId, useRef, useState } from 'react';

import { Body3, Label1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

ChartJS.register(...registerables);

/*
 * UX4G charts are Chart.js, and its page specifies presentation rather than a
 * palette — the three sample charts use three different colour sets, and one
 * legend swatch does not even match its own series. So the conventions below
 * are measured and the palette is derived from our tokens, which the mocks'
 * pastels are not.
 *
 * Measured from the Figma symbols: centred bold title, legend above the plot
 * with rectangular swatches, grid on both axes, straight line segments, thick
 * strokes and large ringed points.
 */

/**
 * Watches for a theme change and returns a value that changes with it.
 *
 * Canvas colours are painted, not inherited: once Chart.js has drawn a legend
 * label in the light-mode ink, switching to dark leaves it invisible. So the
 * chart has to be told to repaint.
 */
function useThemeEpoch() {
  const [epoch, setEpoch] = useState(0);

  useEffect(() => {
    const bump = () => setEpoch(e => e + 1);
    const observer = new MutationObserver(bump);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style', 'data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return epoch;
}

/** Reads a theme token at runtime so charts follow light and dark. */
function token(name: string, fallback: string) {
  if (typeof window === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

/**
 * Series palettes, split by how a type draws.
 *
 * Fill types get primary and primary-100, which is what the Figma bar chart
 * measures — a pale tint reads fine over a large area. Stroke types cannot use
 * it: primary-100 as a 4px line is nearly invisible, which is why the radar
 * chart's second series could not be seen. Figma's own line chart pairs two
 * distinct hues rather than a tint, so stroke types walk the semantic scales.
 */
function chartPalette(stroke = false) {
  const primary = token('--primary', '#613af5');
  const semantic = [
    token('--info', '#006699'),
    token('--success', '#107400'),
    token('--warning', '#a46212'),
    token('--danger', '#b7131a'),
    token('--secondary', '#746d96'),
  ];

  return stroke
    ? [primary, ...semantic]
    : [primary, token('--primary-100', '#ecd0ff'), ...semantic, token('--primary-300', '#c495ff')];
}

const ARC_TYPES = new Set(['pie', 'doughnut', 'polarArea']);

/*
 * Types whose datasets are drawn as overlapping filled shapes. An opaque fill
 * here hides every series behind the largest one, which is how the radar chart
 * shipped with only one of its two series visible.
 */
const AREA_TYPES = new Set(['radar', 'polarArea']);

/** Adds alpha to a hex token, leaving any other colour format untouched. */
function withAlpha(colour: string, alpha: number) {
  if (!/^#[0-9a-fA-F]{6}$/.test(colour)) return colour;
  const hex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0');
  return `${colour}${hex}`;
}

/** UX4G presentation defaults, merged under whatever the caller passes. */
function baseOptions(type: ChartType, animate: boolean): ChartOptions {
  const ink = token('--neutral', '#212121');
  const muted = token('--neutral-600', '#727272');
  const grid = token('--neutral-100', '#dddddd');
  const surface = token('--neutral-0', '#ffffff');
  const font = { family: 'inherit', size: 12 };

  const scales =
    ARC_TYPES.has(type) || type === 'radar'
      ? undefined
      : {
          x: {
            grid: { color: grid },
            border: { display: false },
            ticks: { color: muted, font, maxRotation: 45, minRotation: 0 },
          },
          y: {
            grid: { color: grid },
            border: { display: false },
            ticks: { color: muted, font },
          },
        };

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: animate ? undefined : false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        position: 'top',
        align: 'center',
        labels: {
          color: ink,
          font,
          boxWidth: 40,
          boxHeight: 16,
          // Rectangular swatches, as the Figma legend draws them.
          usePointStyle: false,
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: ink,
        titleColor: surface,
        bodyColor: surface,
        borderColor: grid,
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        displayColors: true,
        titleFont: font,
        bodyFont: font,
      },
    },
    elements: {
      line: { tension: 0, borderWidth: 4 },
      point: { radius: 7, borderWidth: 3, hoverRadius: 9 },
      bar: { borderWidth: 0 },
      arc: { borderWidth: 2, borderColor: surface },
    },
    scales,
  } as ChartOptions;
}

/** Applies the palette to any dataset that has not chosen its own colours. */
function paintDatasets(type: ChartType, data: ChartData): ChartData {
  const arc = ARC_TYPES.has(type);
  // Bars are filled shapes too, so they keep the Figma tint pair.
  const strokeDrawn = !arc && type !== 'bar';
  const palette = chartPalette(strokeDrawn);

  const area = AREA_TYPES.has(type);

  return {
    ...data,
    datasets: data.datasets.map((dataset, i) => {
      const colour = palette[i % palette.length];
      const perPoint = arc
        ? (dataset.data as unknown[]).map((_, j) => palette[j % palette.length])
        : colour;

      return {
        // Overlapping fills have to be translucent or they hide each other.
        backgroundColor: area ? withAlpha(colour, 0.35) : perPoint,
        borderColor: arc && !area ? undefined : colour,
        pointBackgroundColor: colour,
        pointBorderColor: token('--neutral-0', '#ffffff'),
        ...dataset,
      };
    }),
  };
}

interface IChartProps extends Omit<ComponentProps<'figure'>, 'children'> {
  type: ChartType;
  data: ChartData;
  /** Required: a canvas is invisible to assistive technology without it. */
  title: string;
  options?: ChartOptions;
  /** One sentence on what the chart shows. Read out before the data table. */
  summary?: string;
  height?: number;
}

/**
 * Chart.js chart with UX4G presentation defaults.
 *
 * The canvas is `aria-hidden` and the same data is rendered as a
 * visually-hidden table, because a canvas conveys nothing to a screen reader.
 * A chart that only works visually is not finished.
 */
function Chart({
  className,
  type,
  data,
  options,
  title,
  summary,
  height = 320,
  ...props
}: IChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<ChartJS | null>(null);
  const tableId = useId();
  const [animate, setAnimate] = useState(true);
  const themeEpoch = useThemeEpoch();

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAnimate(!query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const config: ChartConfiguration = {
      type,
      data: paintDatasets(type, data),
      options: { ...baseOptions(type, animate), ...options },
    };

    const chart = new ChartJS(canvas, config);
    chartRef.current = chart;
    return () => {
      chart.destroy();
      chartRef.current = null;
    };
    // themeEpoch is in here on purpose: a theme change has to repaint the canvas.
  }, [type, data, options, animate, themeEpoch]);

  const labels = (data.labels ?? []) as string[];

  return (
    <figure className={cn('bg-neutral-0 m-0 w-full', className)} {...props}>
      <Label1 className='text-neutral mb-3 block text-center font-semibold'>{title}</Label1>
      <div style={{ height }} className='relative w-full'>
        <canvas ref={canvasRef} aria-hidden />
      </div>

      {/* The accessible equivalent of the canvas above. */}
      <figcaption className='sr-only'>
        {summary && <Body3>{summary}</Body3>}
        <table id={tableId}>
          <caption>{title}</caption>
          <thead>
            <tr>
              <th scope='col'>Category</th>
              {data.datasets.map((dataset, i) => (
                <th key={i} scope='col'>
                  {dataset.label ?? `Series ${i + 1}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labels.map((label, row) => (
              <tr key={label}>
                <th scope='row'>{label}</th>
                {data.datasets.map((dataset, i) => (
                  <td key={i}>{String((dataset.data as unknown[])[row] ?? '')}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </figcaption>
    </figure>
  );
}

export { Chart, chartPalette };
