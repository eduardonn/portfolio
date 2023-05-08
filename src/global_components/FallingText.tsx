import { Component, For, onCleanup, onMount } from "solid-js";
import { addAnimatedComponents, deleteAnimatedComponents } from "../globals/animatedElementsStore";

interface FallingTextProps {
  class?: string;
  text: string;
}

const FallingText: Component<FallingTextProps> = (props) => {
  let textArray = {
    // Replace spaces with non breaking spaces, so it doesn't disappear when alone in spans
    characters: props.text.replace(' ', '\u00A0').split(''),
    refs: new Array<HTMLElement>(props.text.length)
  };

  // Replace spaces with non breaking spaces, so it doesn't disappear when alone in spans
  // const textArray = props.text.replace(' ', '\u00A0').split('').map((char) => {
  //   let ref;
  //   return [char, ref];
  // });

  onMount(() => addAnimatedComponents(textArray.refs));
  onCleanup(() => deleteAnimatedComponents(textArray.refs));

  return (
    <div aria-label='Eduardo Franke'>
      <For each={textArray.characters}>{(item, i) => 
        <span
          ref={textArray.refs[i()]}
          aria-hidden='true'
          style={`--animation-delay: ${Math.floor(Math.random() * 900)}ms`}
          class={`animate-fall-bounce inline-block`}
        >{item}</span>
      }</For>
    
    </div>
  );
}

export default FallingText;