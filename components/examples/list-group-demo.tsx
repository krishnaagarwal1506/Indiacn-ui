import { Badge } from '@/components/ui/badge';
import { ListGroup, ListGroupAction, ListGroupItem } from '@/components/ui/list-group';

export function ListGroupDefault() {
  return (
    <ListGroup className='w-full max-w-sm'>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  );
}

export function ListGroupActive() {
  return (
    <ListGroup className='w-full max-w-sm'>
      <ListGroupItem active>An active item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
    </ListGroup>
  );
}

export function ListGroupDisabled() {
  return (
    <ListGroup className='w-full max-w-sm'>
      <ListGroupItem disabled>A disabled item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
    </ListGroup>
  );
}

export function ListGroupActionable() {
  return (
    <ListGroup className='w-full max-w-sm'>
      <ListGroupAction href='#' active>
        The current link item
      </ListGroupAction>
      <ListGroupAction href='#'>A second link item</ListGroupAction>
      <ListGroupAction href='#'>A third link item</ListGroupAction>
      <ListGroupAction href='#' disabled>
        A disabled link item
      </ListGroupAction>
    </ListGroup>
  );
}

export function ListGroupFlush() {
  return (
    <ListGroup flush className='w-full max-w-sm'>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
    </ListGroup>
  );
}

export function ListGroupContextual() {
  return (
    <ListGroup className='w-full max-w-sm'>
      <ListGroupItem>Default list group item</ListGroupItem>
      <ListGroupItem theme='primary'>A primary list group item</ListGroupItem>
      <ListGroupItem theme='secondary'>A secondary list group item</ListGroupItem>
      <ListGroupItem theme='success'>A success list group item</ListGroupItem>
      <ListGroupItem theme='danger'>A danger list group item</ListGroupItem>
      <ListGroupItem theme='warning'>A warning list group item</ListGroupItem>
    </ListGroup>
  );
}

export function ListGroupWithBadges() {
  return (
    <ListGroup className='w-full max-w-sm'>
      <ListGroupItem className='flex justify-between'>
        A list item
        <Badge shape='pill'>14</Badge>
      </ListGroupItem>
      <ListGroupItem className='flex justify-between'>
        A second item
        <Badge shape='pill'>2</Badge>
      </ListGroupItem>
      <ListGroupItem className='flex justify-between'>
        A third item
        <Badge shape='pill'>1</Badge>
      </ListGroupItem>
    </ListGroup>
  );
}
