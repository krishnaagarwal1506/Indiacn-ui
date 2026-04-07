// TODO: dummy examples generated with AI, to be replaced with real ones
import {
  Display1,
  // Display2,
  Display3,
  Headline1,
  Headline2,
  Headline3,
  Title1,
  Title2,
  Label1,
  Body1,
  Body2,
} from '@/components/ui/typography';

export function TypographyH1() {
  return <Headline1>Taxing Laughter: The Joke Tax Chronicles</Headline1>;
}

export function TypographyH2() {
  return <Headline2>The People of the Kingdom</Headline2>;
}

export function TypographyH3() {
  return <Headline3>The Joke Tax</Headline3>;
}

export function TypographyP() {
  return (
    <Body1>
      The king, seeing how much happier his subjects were, realized the error of his ways and
      repealed the joke tax.
    </Body1>
  );
}

export function TypographyBlockquote() {
  return (
    <Display1 className='border-l-4 border-zinc-300 pl-4 italic dark:border-zinc-700'>
      <Body1>everyone enjoys a good joke</Body1>
    </Display1>
  );
}

export function TypographyTable() {
  return (
    <div className='w-full overflow-auto'>
      <table className='w-full'>
        <thead>
          <tr className='border-b'>
            <th className='h-12 px-4 text-left align-middle font-medium'>
              <Title2>King&apos;s Treasury</Title2>
            </th>
            <th className='h-12 px-4 text-left align-middle font-medium'>
              <Title2>People&apos;s happiness</Title2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='p-4 align-middle'>
              <Body2>Empty</Body2>
            </td>
            <td className='p-4 align-middle'>
              <Body2>Overflowing</Body2>
            </td>
          </tr>
          <tr className='border-b'>
            <td className='p-4 align-middle'>
              <Body2>Modest</Body2>
            </td>
            <td className='p-4 align-middle'>
              <Body2>Satisfied</Body2>
            </td>
          </tr>
          <tr>
            <td className='p-4 align-middle'>
              <Body2>Full</Body2>
            </td>
            <td className='p-4 align-middle'>
              <Body2>Ecstatic</Body2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function TypographyList() {
  return (
    <ul className='ml-6 list-disc [&>li]:mt-2'>
      <li>
        <Body2>1st level of puns: 5 gold coins</Body2>
      </li>
      <li>
        <Body2>2nd level of jokes: 10 gold coins</Body2>
      </li>
      <li>
        <Body2>3rd level of one-liners : 20 gold coins</Body2>
      </li>
    </ul>
  );
}

export function TypographyInlineCode() {
  return (
    <Body1>
      Run the following command:{' '}
      <code className='relative rounded bg-zinc-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-zinc-800'>
        npm install
      </code>
    </Body1>
  );
}

export function TypographyLead() {
  return (
    <Display3 className='text-muted-foreground'>
      A modal dialog that interrupts the user with important content and expects a response.
    </Display3>
  );
}

export function TypographyLarge() {
  return <Title1>Are you absolutely sure?</Title1>;
}

export function TypographySmall() {
  return <Label1>Email address</Label1>;
}

export function TypographyMuted() {
  return <Body2 className='text-muted-foreground'>Enter your email address.</Body2>;
}
