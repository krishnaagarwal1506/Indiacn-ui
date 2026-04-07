import { Progress, ProgressBar } from '@/components/ui/progress';

export function ProgressDefault() {
  return <Progress value={60} />;
}

export function ProgressWithLabel() {
  return <Progress value={60} showLabel height='1.25rem' />;
}

export function ProgressThemes() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Progress value={20}>
        <ProgressBar theme='primary' value={20} />
      </Progress>
      <Progress value={40}>
        <ProgressBar theme='success' value={40} />
      </Progress>
      <Progress value={60}>
        <ProgressBar theme='warning' value={60} />
      </Progress>
      <Progress value={80}>
        <ProgressBar theme='danger' value={80} />
      </Progress>
    </div>
  );
}

export function ProgressStriped() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Progress value={30}>
        <ProgressBar theme='primary' striped value={30} />
      </Progress>
      <Progress value={50}>
        <ProgressBar theme='success' striped value={50} />
      </Progress>
      <Progress value={70}>
        <ProgressBar theme='warning' striped animated value={70} />
      </Progress>
    </div>
  );
}

export function ProgressMultiple() {
  return (
    <Progress value={100}>
      <ProgressBar theme='primary' value={30} />
      <ProgressBar theme='success' value={20} />
      <ProgressBar theme='warning' value={15} />
    </Progress>
  );
}

export function ProgressSizes() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Progress value={50} height='0.25rem' />
      <Progress value={50} height='0.5rem' />
      <Progress value={50} height='1rem' />
      <Progress value={50} height='1.5rem' showLabel />
    </div>
  );
}
