import { Component } from "solid-js"
import palmTree from '/src/assets/palm-tree.svg'

const BackgroundElement: Component = () => {
  return (
    <img
      src={palmTree}
      class='
        fixed top-[-10vh] left-1/2 -translate-x-1/2 min-w-[200vh]
        pointer-events-none -z-50 opacity-10
      '
    />
  )
}

export default BackgroundElement;