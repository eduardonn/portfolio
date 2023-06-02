import { Component, JSX, Show } from 'solid-js';
import { A } from '@solidjs/router';

interface RouterLink {
  route: string, title: string
}

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
      href={info ? info.route : ''}
      title={info?.title}
      class={'px-4 py-1 h-full' +
        (info 
          ? ' relative group'
          : ' text-gray-600')}
    >
      <Show when={side === 'left'}>&lt&lt </Show>
      <span class={'sm:inline' + (side && ' hidden')}>{children}</span>
      <Show when={side === 'right'}> &gt&gt</Show>
      <div id='black-bar' class={`absolute h-[10%] bottom-0 left-0 bg-black
          w-0 group-hover:w-full transition-all duration-300`}></div>
    </A>
  )
}

const NextPreviousPageBar: Component<NextPreviousPageBarProps> = ({ previous, next }) => {
  return (
    <div class='flex justify-between items-center'>
      <LinkButton info={previous} side='left'>Previous Project</LinkButton>
      <LinkButton info={{ route: '/', title: 'Home' }}>Home</LinkButton>
      <LinkButton info={next} side='right'>Next Project</LinkButton>
    </div>
  )
}

export default NextPreviousPageBar;