import { FileSearch, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateMedia,
  EmptyStateTitle,
} from '@/components/ui/empty-state';

export function EmptyStateDefault() {
  return (
    <EmptyState>
      <EmptyStateMedia />
      <EmptyStateTitle>No data</EmptyStateTitle>
    </EmptyState>
  );
}

export function EmptyStateWithDescription() {
  return (
    <EmptyState>
      <EmptyStateMedia />
      <EmptyStateTitle>No applications yet</EmptyStateTitle>
      <EmptyStateDescription>
        Applications you submit will appear here for tracking.
      </EmptyStateDescription>
    </EmptyState>
  );
}

export function EmptyStateWithAction() {
  return (
    <EmptyState>
      <EmptyStateMedia />
      <EmptyStateTitle>No grievances filed</EmptyStateTitle>
      <EmptyStateDescription>
        File a grievance and track its progress from this page.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button theme='primary' variant='filled' prefixIcon={<Plus />}>
          File a grievance
        </Button>
      </EmptyStateActions>
    </EmptyState>
  );
}

export function EmptyStateCustomMedia() {
  return (
    <EmptyState>
      <EmptyStateMedia>
        <FileSearch className='size-16 text-neutral-300' aria-hidden />
      </EmptyStateMedia>
      <EmptyStateTitle>No results for “Aadhaar update”</EmptyStateTitle>
      <EmptyStateDescription>Check the spelling or try a broader term.</EmptyStateDescription>
    </EmptyState>
  );
}
