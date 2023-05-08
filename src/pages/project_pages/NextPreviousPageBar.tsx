import { Component, JSX, Show } from 'solid-js';
import { A } from '@solidjs/router';
import { RouterLink } from './types/types';

export interface NextPreviousPageBarProps {
  previous?: RouterLink
  next?: RouterLink
}

interface LinkButtonProps {
  info?: RouterLink
  side?: 'left' | 'right'
  children: JSX.Element
}

const LinkButton = ({ info, side, children }: LinkButtonProps) => {
  return (
    <A
      href={info ? info.link : ''}
      title={info?.title}
      class={'px-4 py-1 h-full' +
        (info 
          ? ' hover:bg-orange-400'
          : ' text-gray-600')}
    >
      <Show when={side === 'left'}>&lt&lt </Show>
      <span class={'sm:inline' + (side && ' hidden')}>{children}</span>
      <Show when={side === 'right'}> &gt&gt</Show>
    </A>
  )
}

const NextPreviousPageBar: Component<NextPreviousPageBarProps> = ({ previous, next }) => {
  return (
    <div class='flex justify-between items-center
      border-b-2 border-black
    '>
      <LinkButton info={previous} side='left'>Previous Project</LinkButton>
      <LinkButton info={{ link: '/', title: 'Home' }}>Home</LinkButton>
      <LinkButton info={next} side='right'>Next Project</LinkButton>
    </div>
  )
}

export default NextPreviousPageBar;