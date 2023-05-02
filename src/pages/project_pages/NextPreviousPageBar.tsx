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
  const getClassStyle = (previous?: RouterLink) => {
    return 'px-4 py-2 h-full ' +
      (previous 
        ? 'text-white hover:bg-orange-400'
        : 'text-gray-300');
  }

  return (
    <A
      href={info ? info.link : ''}
      title={info?.title}
      class={`${getClassStyle(info)}`}
    >
      <Show when={side === 'left'}>&lt&lt </Show>
      <span class={'sm:inline' + (side && ' hidden')}>{children}</span>
      <Show when={side === 'right'}> &gt&gt</Show>
    </A>
  )
}

const NextPreviousPageBar: Component<NextPreviousPageBarProps> = ({ previous, next }) => {
  return (
    <>
      <div class='flex justify-between bg-orange-300 items-center'>
        <LinkButton info={previous} side='left'>Previous Project</LinkButton>
        <LinkButton info={{ link: '/', title: 'Home' }}>Home</LinkButton>
        <LinkButton info={next} side='right'>Next Project</LinkButton>
      </div>
    </>
  )
}

export default NextPreviousPageBar;