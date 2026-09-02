'use client';

import { useMemo } from 'react';

import { Chart } from '@/components/ui/chart';

const MONTHS = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
const DISTRICTS = ['Pune', 'Nashik', 'Nagpur', 'Thane', 'Solapur'];

export function ChartBar() {
  const data = useMemo(
    () => ({
      labels: MONTHS,
      datasets: [
        { label: 'Applications received', data: [420, 405, 190, 140, 905, 730, 45] },
        { label: 'Applications cleared', data: [450, 840, 105, 505, 190, 350, 140] },
      ],
    }),
    [],
  );

  return (
    <Chart
      type='bar'
      data={data}
      title='Ration card applications by month'
      summary='Applications received against applications cleared, April to October.'
      className='max-w-[640px]'
    />
  );
}

export function ChartHorizontalBar() {
  const data = useMemo(
    () => ({
      labels: DISTRICTS,
      datasets: [{ label: 'Pending applications', data: [1240, 980, 760, 610, 340] }],
    }),
    [],
  );

  const options = useMemo(() => ({ indexAxis: 'y' as const }), []);

  return (
    <Chart
      type='bar'
      data={data}
      options={options}
      title='Pending applications by district'
      summary='Districts ordered by the size of their pending queue.'
      className='max-w-[640px]'
    />
  );
}

export function ChartStackedBar() {
  const data = useMemo(
    () => ({
      labels: MONTHS,
      datasets: [
        { label: 'Approved', data: [320, 380, 150, 120, 640, 520, 40] },
        { label: 'Rejected', data: [60, 55, 30, 15, 140, 120, 10] },
        { label: 'Awaiting documents', data: [40, 70, 25, 30, 125, 90, 12] },
      ],
    }),
    [],
  );

  const options = useMemo(() => ({ scales: { x: { stacked: true }, y: { stacked: true } } }), []);

  return (
    <Chart
      type='bar'
      data={data}
      options={options}
      title='Application outcomes by month'
      summary='Each month split into approved, rejected and awaiting documents.'
      className='max-w-[640px]'
    />
  );
}

export function ChartLine() {
  const data = useMemo(
    () => ({
      labels: MONTHS,
      datasets: [
        { label: 'Median days to clear', data: [22, 19, 24, 21, 14, 12, 9] },
        { label: 'Target', data: [15, 15, 15, 15, 15, 15, 15] },
      ],
    }),
    [],
  );

  return (
    <Chart
      type='line'
      data={data}
      title='Median clearance time against target'
      summary='Median days to clear an application, compared with the 15-day service standard.'
      className='max-w-[640px]'
    />
  );
}

export function ChartMultiAxisLine() {
  const data = useMemo(
    () => ({
      labels: MONTHS,
      datasets: [
        { label: 'Applications', data: [420, 405, 190, 140, 905, 730, 45], yAxisID: 'y' },
        { label: 'Median days', data: [22, 19, 24, 21, 14, 12, 9], yAxisID: 'y1' },
      ],
    }),
    [],
  );

  const options = useMemo(
    () => ({
      scales: {
        y: { type: 'linear' as const, position: 'left' as const },
        y1: {
          type: 'linear' as const,
          position: 'right' as const,
          grid: { drawOnChartArea: false },
        },
      },
    }),
    [],
  );

  return (
    <Chart
      type='line'
      data={data}
      options={options}
      title='Volume against clearance time'
      summary='Application volume on the left axis, median days to clear on the right.'
      className='max-w-[640px]'
    />
  );
}

export function ChartPie() {
  const data = useMemo(
    () => ({
      labels: ['Online', 'Seva Kendra', 'Post', 'Walk-in'],
      datasets: [{ label: 'Applications', data: [5820, 2410, 640, 1130] }],
    }),
    [],
  );

  return (
    <Chart
      type='pie'
      data={data}
      title='Applications by channel'
      summary='How applications reached the department.'
      height={300}
      className='max-w-[420px]'
    />
  );
}

export function ChartDoughnut() {
  const data = useMemo(
    () => ({
      labels: ['Aadhaar', 'PAN', 'DigiLocker', 'Voter ID', 'Passport'],
      datasets: [{ label: 'Verifications', data: [4820, 2310, 1980, 940, 410] }],
    }),
    [],
  );

  return (
    <Chart
      type='doughnut'
      data={data}
      title='Verifications by document type'
      summary='Share of identity verifications by the document used.'
      height={300}
      className='max-w-[420px]'
    />
  );
}

export function ChartPolarArea() {
  const data = useMemo(
    () => ({
      labels: DISTRICTS,
      datasets: [{ label: 'Centres per lakh residents', data: [11, 9, 7, 6, 4] }],
    }),
    [],
  );

  return (
    <Chart
      type='polarArea'
      data={data}
      title='Service centres per lakh residents'
      summary='Centre density by district, compared on a common radius.'
      height={320}
      className='max-w-[420px]'
    />
  );
}

export function ChartRadar() {
  const data = useMemo(
    () => ({
      labels: ['Accessibility', 'Speed', 'Clarity', 'Coverage', 'Support'],
      datasets: [
        { label: 'This quarter', data: [82, 74, 68, 90, 61] },
        { label: 'Last quarter', data: [70, 66, 60, 84, 58] },
      ],
    }),
    [],
  );

  return (
    <Chart
      type='radar'
      data={data}
      title='Service quality scores'
      summary='Five service dimensions scored out of 100, this quarter against last.'
      height={340}
      className='max-w-[460px]'
    />
  );
}

export function ChartScatter() {
  const data = useMemo(
    () => ({
      datasets: [
        {
          label: 'Centres',
          data: [
            { x: 4, y: 22 },
            { x: 6, y: 19 },
            { x: 7, y: 24 },
            { x: 9, y: 14 },
            { x: 11, y: 12 },
            { x: 13, y: 9 },
          ],
        },
      ],
    }),
    [],
  );

  return (
    <Chart
      type='scatter'
      data={data}
      title='Centre density against clearance time'
      summary='Each point is a district: centres per lakh residents on the x axis, median days to clear on the y axis.'
      className='max-w-[640px]'
    />
  );
}

export function ChartBubble() {
  const data = useMemo(
    () => ({
      datasets: [
        {
          label: 'Districts',
          data: [
            { x: 4, y: 22, r: 18 },
            { x: 6, y: 19, r: 14 },
            { x: 9, y: 14, r: 11 },
            { x: 13, y: 9, r: 7 },
          ],
        },
      ],
    }),
    [],
  );

  return (
    <Chart
      type='bubble'
      data={data}
      title='Density, clearance time and population'
      summary='Centres per lakh on the x axis, median days on the y axis, bubble size is district population.'
      className='max-w-[640px]'
    />
  );
}
