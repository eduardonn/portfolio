import { Component } from "solid-js"

interface MediaProps {
  src: string
}

const Media: Component<MediaProps> = ({ src }) => {
  return (
    <img
      src={src}
      class='mx-auto max-h-[512px] max-w-[80%] aspect-video my-4'
    />
  )
}

export default Media;