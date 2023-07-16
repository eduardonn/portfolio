import { Component } from "solid-js"

const BackgroundElement: Component = () => {
  return (
    <img
      src='/src/assets/palm-tree.svg'
      class='
        fixed top-[-10vh] left-1/2 -translate-x-1/2 min-w-[200vh]
        pointer-events-none -z-50 opacity-20
      '
    />
  )
}

export default BackgroundElement;