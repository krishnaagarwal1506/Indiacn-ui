'use client';

import { Star } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableRowHeader,
} from '@/components/ui/table';
import { Label3 } from '@/components/ui/typography';

const APPLICATIONS = [
  {
    id: 'ARN-4821',
    name: 'Aarav Sharma',
    scheme: 'Ration card',
    district: 'Pune',
    status: 'Approved',
  },
  {
    id: 'ARN-4822',
    name: 'Priya Nair',
    scheme: 'Scholarship',
    district: 'Nashik',
    status: 'In review',
  },
  {
    id: 'ARN-4823',
    name: 'Rohan Gupta',
    scheme: 'Pension',
    district: 'Nagpur',
    status: 'Rejected',
  },
  {
    id: 'ARN-4824',
    name: 'Meera Menon',
    scheme: 'Ration card',
    district: 'Thane',
    status: 'Approved',
  },
];

const STATUS_THEME = {
  Approved: 'success',
  'In review': 'warning',
  Rejected: 'danger',
} as const;

export function TableDefault() {
  return (
    <Table>
      <TableCaption>Recent applications by district.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Reference</TableHead>
          <TableHead>Applicant</TableHead>
          <TableHead>Scheme</TableHead>
          <TableHead>District</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {APPLICATIONS.map(row => (
          <TableRow key={row.id}>
            <TableRowHeader>{row.id}</TableRowHeader>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.scheme}</TableCell>
            <TableCell>{row.district}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

/** One selectable row. Split out so its handler is not rebuilt each render. */
function SelectableRow({
  row,
  selected,
  onToggle,
}: {
  row: (typeof APPLICATIONS)[number];
  selected: boolean;
  onToggle: (id: string) => void;
}) {
  const handleChange = useCallback(() => onToggle(row.id), [onToggle, row.id]);

  return (
    <TableRow selected={selected}>
      <TableCell className='w-12'>
        <Checkbox
          checked={selected}
          onCheckedChange={handleChange}
          aria-label={`Select ${row.id}`}
        />
      </TableCell>
      <TableRowHeader>{row.id}</TableRowHeader>
      <TableCell>{row.name}</TableCell>
      <TableCell>
        <Badge theme={STATUS_THEME[row.status as keyof typeof STATUS_THEME]} variant='tonal'>
          {row.status}
        </Badge>
      </TableCell>
    </TableRow>
  );
}

export function TableSelectable() {
  const [selected, setSelected] = useState<string[]>(['ARN-4822']);
  const toggle = useCallback(
    (id: string) =>
      setSelected(current =>
        current.includes(id) ? current.filter(value => value !== id) : [...current, id],
      ),
    [],
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-12'>
            <Label3 className='sr-only'>Select</Label3>
          </TableHead>
          <TableHead>Reference</TableHead>
          <TableHead>Applicant</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {APPLICATIONS.map(row => (
          <SelectableRow
            key={row.id}
            row={row}
            selected={selected.includes(row.id)}
            onToggle={toggle}
          />
        ))}
      </TableBody>
    </Table>
  );
}

export function TableRichCells() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Officer</TableHead>
          <TableHead>Centre</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead className='text-right'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: 'Vihaan Mehta', initials: 'VM', centre: 'Pune East', rating: 4 },
          { name: 'Ananya Rao', initials: 'AR', centre: 'Nashik City', rating: 5 },
          { name: 'Karan Malhotra', initials: 'KM', centre: 'Thane West', rating: 3 },
        ].map(row => (
          <TableRow key={row.name}>
            <TableRowHeader>
              <Label3 className='flex items-center gap-2.5 text-[inherit]'>
                <Avatar size='sm'>
                  <AvatarFallback>{row.initials}</AvatarFallback>
                </Avatar>
                {row.name}
              </Label3>
            </TableRowHeader>
            <TableCell>{row.centre}</TableCell>
            <TableCell>
              <Label3 className='flex gap-0.5' role='img' aria-label={`${row.rating} out of 5`}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    aria-hidden
                    className={
                      star <= row.rating
                        ? 'fill-primary text-primary size-3.5'
                        : 'size-3.5 fill-neutral-100 text-neutral-100'
                    }
                  />
                ))}
              </Label3>
            </TableCell>
            <TableCell className='text-right'>
              <Button variant='text' size='sm'>
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableRowHeader>3 officers</TableRowHeader>
          <TableCell />
          <TableCell>Average 4.0</TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
