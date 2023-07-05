import { JSX } from "solid-js"

export const HomePageTitle = ({ children }: { children: JSX.Element }) => {
  return (
    <h1 class='text-3xl my-5'>{children}</h1>
  );
}

export const HomePageContent = ({ children }: { children: JSX.Element }) => {
  return (
    <div class='flex flex-col gap-3'>{children}</div>
  );
}

export const HomePageSection = ({ children }: { children: JSX.Element }) => {
  return (
    <section class='my-6 mx-[2vw] lg:mx-[20vw] p-4'>
      {children}
    </section>
  )
}

