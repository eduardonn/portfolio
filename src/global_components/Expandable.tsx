import { Component, createSignal, JSXElement } from "solid-js";

interface ExpandableProps {
  class?: string
  children: JSXElement
}

const Expandable: Component<ExpandableProps> = (props) => {
  const [expanded, setExpanded] = createSignal(false);
  let contentDiv: HTMLDivElement;

  return (
    <div class='flex flex-col relative'>
      <div
        style={`grid-template-rows: ${expanded() ? '1' : '0'}fr`}
        class='grid transition-[grid-template-rows] ease-in-out duration-300'
      >
        <div class='overflow-hidden' ref={contentDiv!}>
          {props.children}
        </div>
      </div>
      <button
        class='py-3 mt-4 mx-auto w-fit'
        onClick={() => {
          if (expanded() && contentDiv.getBoundingClientRect().top < 0)
            contentDiv.scrollIntoView({ behavior: 'smooth' });
          setExpanded(state => !state);
        }}
      >
        {expanded() ? '△ Show less' : '▽ Show more'}
      </button>
    </div>
  )
}

export default Expandable;