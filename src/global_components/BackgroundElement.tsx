import { Component } from "solid-js"

const BackgroundElement: Component = () => {
  return (
    <div class='
      mix-blend-overlay fixed inset-0 opacity-20 pointer-events-none -z-40
      bg-[url("/src/assets/palm-tree.svg")]
      bg-[60%_4vh] bg-no-repeat
      sm:bg-[length:200vh]
    '/>
  )
}

export default BackgroundElement;