import { Component, createSignal, JSX, onCleanup, onMount } from "solid-js";

interface ExpandableProps {
  class?: string
  children: JSX.Element
}

const Expandable: Component<ExpandableProps> = (props) => {
  const [expanded, setExpanded] = createSignal(false);
  const [contentHeight, setContentHeight] = createSignal(0);
  let contentDiv: HTMLDivElement;
    
  const updateContentHeight = () => {
    // We need to set border, otherwise getBoundingClientRect().height doesn't include margins
    // Side effect: height is calculated with the border (content gets squished)
    contentDiv.style.border = 'solid 1px transparent';
    setContentHeight(contentDiv.getBoundingClientRect().height);
    contentDiv.style.border = '';
  };
  
  onMount(() => {
    updateContentHeight();

    window.addEventListener('resize', updateContentHeight);

    onCleanup(() => {
      window.removeEventListener('resize', updateContentHeight);
    });
  })

  return (
    <div class='flex flex-col relative'>
      <div
        style={`height: ${expanded() ? contentHeight() : '0'}px;`}
        class='overflow-hidden transition-[height] ease-in-out duration-300'
      >
        <div ref={contentDiv!}>
          {props.children}
        </div>
      </div>
      <button
        class='py-3 mt-4 mx-auto w-fit'
        onClick={() => {
          if (expanded() && contentDiv.getBoundingClientRect().top < 0)
            contentDiv.scrollIntoView({ behavior: 'smooth' });
          updateContentHeight();
          setExpanded(state => !state);
        }}
      >
        {expanded() ? '△ Show less' : '▽ Show more'}
      </button>
    </div>
  )
}

export default Expandable;