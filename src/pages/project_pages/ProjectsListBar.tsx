import { For, createSignal, onCleanup, onMount } from "solid-js";
import projectsList from "../../globals/projectsList";
import { A } from "@solidjs/router";

const ProjectsListBar = ({ projectIndex }: { projectIndex: number }) => {
  const xMargin = 5;
  const [scroll, rawSetScroll] = createSignal(0);
  let contentDiv: HTMLDivElement;
  let selectedLinkElement: HTMLAnchorElement;
  let firstTouchX = 0;
  let firstTouchPos = 0;

  const setScroll = (newScrollValue: number) => {
    if (newScrollValue > xMargin) {
      rawSetScroll(xMargin);
      return;
    }

    const scrollLimit = 
      -contentDiv.getBoundingClientRect().width + window.innerWidth - xMargin;
    if (newScrollValue < scrollLimit) {
      rawSetScroll(scrollLimit);
      return;
    }

    rawSetScroll(newScrollValue);
  }

  const initScrollValue = () => {
    const initialScrollValue = 
      - selectedLinkElement.getBoundingClientRect().x
      + window.innerWidth / 2
      - selectedLinkElement.getBoundingClientRect().width / 2;

    setScroll(initialScrollValue);
  }

  onMount(() => {
    initScrollValue();

    window.addEventListener('load', initScrollValue);
    window.addEventListener('resize', initScrollValue);
    onCleanup(() => window.removeEventListener('load', initScrollValue));
    onCleanup(() => window.removeEventListener('resize', initScrollValue));
  });

  return (
    <div
      class='overflow-hidden'
      onWheel={(e => {
        e.preventDefault();
        const newScrollValue = scroll() - (e.deltaX === 0 ? e.deltaY : e.deltaX);
        setScroll(newScrollValue);
      })}
      onTouchStart={e => {
        firstTouchPos = scroll();
        firstTouchX = e.touches[0].clientX;
      }}
      onTouchMove={e => {
        const deltaX = firstTouchX - e.touches[0].clientX;
        const newScrollValue = firstTouchPos - deltaX;
        setScroll(newScrollValue);
      }}
    >
      <div
        ref={contentDiv!}
        style={`transform: translateX(${scroll()}px);`}
        class='flex relative gap-6 justify-center w-full min-w-max'
      >
        <For each={projectsList}>{(item, index) => (
          <A
            ref={el => { if (index() === projectIndex) selectedLinkElement = el }}
            href={item.route} class='relative p-1 group'>
            {item.title}
            <div id='black-bar' class={`absolute h-[10%] bottom-0 left-0 bg-black
                ${(index() === projectIndex) ? 'w-full' : 'w-0'}
                group-hover:w-full transition-all duration-300
            `}></div>
          </A>
        )}</For>
      </div>
    </div>
  );
}

export default ProjectsListBar;