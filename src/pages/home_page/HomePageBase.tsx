import { JSX } from "solid-js"


export const HomePageSection = ({ children }: { children: JSX.Element }) => {
  return (
    <section class='my-6 mx-[5vw] sm:mx-[15vw] p-4 border-corner-gradient'>{children}</section>
  )
}