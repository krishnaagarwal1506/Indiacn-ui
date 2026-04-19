import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Body2 } from '@/components/ui/typography';

export function CardDefault() {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Body2 className='text-sm'>
          Cards are flexible content containers. They include options for headers, footers, content,
          and images.
        </Body2>
      </CardContent>
      <CardFooter>
        <Button size='sm'>Action</Button>
      </CardFooter>
    </Card>
  );
}

export function CardWithImage() {
  return (
    <Card className='w-[350px] overflow-hidden'>
      <div className='flex h-48 items-center justify-center bg-neutral-100 text-neutral-400 dark:bg-neutral-800'>
        Image Placeholder
      </div>
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>Supporting text below the title.</CardDescription>
      </CardHeader>
      <CardContent>
        <Body2 className='text-sm'>
          Some quick example text to build on the card title and make up the bulk of the card
          content.
        </Body2>
      </CardContent>
      <CardFooter className='gap-2'>
        <Button size='sm'>Primary</Button>
        <Button size='sm' variant='outlined'>
          Secondary
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CardSimple() {
  return (
    <Card className='w-[350px]'>
      <CardContent className='pt-6'>
        <Body2 className='text-sm'>
          This is a simple card with only body content. No header or footer needed.
        </Body2>
      </CardContent>
    </Card>
  );
}

export function CardGrid() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {['Primary', 'Secondary', 'Tertiary'].map(title => (
        <Card key={title}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <Body2 className='text-sm'>Content for the {title.toLowerCase()} card.</Body2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
