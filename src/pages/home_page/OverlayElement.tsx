import { Component } from "solid-js"

const OverlayElement: Component = () => {
  return (
    <div class='
      mix-blend-overlay fixed inset-0 opacity-20 pointer-events-none
      bg-[url("/src/assets/palm-tree.svg")] bg-[length:78]
      sm:bg-[length:68rem] bg-no-repeat
      bg-[0vh_4vh]
    '/>
  )
}

export default OverlayElement;