import { Component } from "solid-js"

const BackgroundElement: Component = () => {
  return (
    <img
      src='/src/assets/palm-tree.svg'
      class='
        fixed top-0 left-1/2 -translate-x-1/2 w-[200vw]
        pointer-events-none -z-50 opacity-20
      '
    />
  )
}

export default BackgroundElement;