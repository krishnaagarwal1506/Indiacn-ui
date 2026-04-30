/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function TooltipDefault() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outlined'>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function TooltipThemes() {
  const themes = ['neutral', 'primary', 'success', 'danger', 'warning', 'info', 'light'] as const;

  return (
    <TooltipProvider>
      <div className='flex flex-wrap gap-3'>
        {themes.map(theme => (
          <Tooltip key={theme}>
            <TooltipTrigger asChild>
              <Button variant='outlined' size='sm'>
                {theme}
              </Button>
            </TooltipTrigger>
            <TooltipContent theme={theme}>
              <p>{theme} tooltip</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export function TooltipPlacements() {
  return (
    <TooltipProvider>
      <div className='flex flex-wrap gap-4'>
        {(['top', 'bottom', 'left', 'right'] as const).map(side => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant='outlined' size='sm'>
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
