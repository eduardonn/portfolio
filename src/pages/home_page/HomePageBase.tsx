import { JSX } from "solid-js"

export const HomePageSection = ({ children }: { children: JSX.Element }) => {
  return (
    <section class='my-6 mx-[2vw] lg:mx-[15vw] p-4'>
      {children}
    </section>
  )
}