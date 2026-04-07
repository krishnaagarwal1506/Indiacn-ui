import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonToolbar } from '@/components/ui/button-group';

export function ButtonGroupDefault() {
  return (
    <ButtonGroup>
      <Button variant='outlined'>Left</Button>
      <Button variant='outlined'>Middle</Button>
      <Button variant='outlined'>Right</Button>
    </ButtonGroup>
  );
}

export function ButtonGroupThemes() {
  return (
    <div className='flex flex-col gap-4'>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button theme='success'>Left</Button>
        <Button theme='success'>Middle</Button>
        <Button theme='success'>Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='outlined'>Left</Button>
        <Button variant='outlined'>Middle</Button>
        <Button variant='outlined'>Right</Button>
      </ButtonGroup>
    </div>
  );
}

export function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation='vertical'>
      <Button variant='outlined'>Top</Button>
      <Button variant='outlined'>Middle</Button>
      <Button variant='outlined'>Bottom</Button>
    </ButtonGroup>
  );
}

export function ButtonGroupToolbar() {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <Button size='sm'>1</Button>
        <Button size='sm'>2</Button>
        <Button size='sm'>3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size='sm' variant='outlined'>
          4
        </Button>
        <Button size='sm' variant='outlined'>
          5
        </Button>
        <Button size='sm' variant='outlined'>
          6
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size='sm' variant='tonal'>
          7
        </Button>
        <Button size='sm' variant='tonal'>
          8
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
