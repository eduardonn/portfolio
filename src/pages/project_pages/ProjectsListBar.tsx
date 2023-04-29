import { For, createSignal, onMount } from "solid-js";
import projectsList from "../../globals/projectsList";

const ProjectsListBar = ({ projectIndex }: { projectIndex: number }) => {
  const xMargin = 5;
  const [scroll, setScroll] = createSignal(xMargin);
  let contentDiv: HTMLDivElement;
  let selectedLinkElement: HTMLAnchorElement;
  let firstTouchX = 0;
  let firstTouchPos = 0;

  onMount(() => {
    console.log('x:', selectedLinkElement.getBoundingClientRect().x)
    const initialScrollValue = 
      - selectedLinkElement.getBoundingClientRect().x
      + window.innerWidth / 2
      - selectedLinkElement.getBoundingClientRect().width / 2;

    if (initialScrollValue > xMargin) return;

    setScroll(initialScrollValue);
  });

  return (
    <div
      class='overflow-hidden'
      onWheel={(e => {
        e.preventDefault();
        if ((e.deltaY < 0 && scroll() >= xMargin) ||
            (e.deltaY > 0 && scroll() <= -contentDiv.getBoundingClientRect().width
              + window.innerWidth - xMargin))
          return;

        setScroll(prev => prev - e.deltaY);
      })}
      onTouchStart={e => {
        firstTouchPos = scroll();
        firstTouchX = e.touches[0].clientX;
        console.log(contentDiv.getBoundingClientRect().x);
      }}
      onTouchMove={e => {
        const deltaX = firstTouchX - e.touches[0].clientX;
        const newScrollValue = firstTouchPos - deltaX;

        if (newScrollValue >= xMargin ||
            newScrollValue <= -contentDiv.getBoundingClientRect().width + window.innerWidth - xMargin)
        return;

        setScroll(newScrollValue);
      }}
    >
      <div
        ref={contentDiv!}
        style={`transform: translateX(${scroll()}px);`}
        class='flex gap-6 justify-center bg-deepPurple text-white
          w-full min-w-max transition-transform'
      >
        <For each={projectsList}>{(item, index) => (
          <a
            ref={el => { if (index() === projectIndex) selectedLinkElement = el }}
            href={item.link} class='relative p-1 group'>
            {item.title}
            <div id='black-bar' class={`absolute h-[10%] bottom-0 left-0 bg-black
                ${(index() === projectIndex) ? 'w-full' : 'w-0'}
                group-hover:w-full transition-all duration-300
              `}
            ></div>
          </a>
        )}</For>
      </div>
    </div>
  );
}

export default ProjectsListBar;