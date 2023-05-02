import { JSX } from "solid-js";
import ProjectsListBar from "./ProjectsListBar";
import NextPreviousPageBar from "./NextPreviousPageBar";
import projectsList from "../../globals/projectsList";

interface ProjectPageBaseProps {
  projectIndex: number
  children: JSX.Element
}

export const ProjectMainTitle = ({ children }: { children: JSX.Element }) => {
  return (
    <h1 class='text-3xl text-center my-8'>{children}</h1>
  )
}

export const ProjectSubHeader1 = ({ children }: { children: JSX.Element }) => {
  return (
    <h2 class='text-2xl mt-2 ml-0'>{children}</h2>
  )
}

export const ProjectContentSection = ({ children }: { children: JSX.Element }) => {
  return (
    <section class='flex flex-col gap-3'>{children}</section>
  )
}

const ProjectPageBase = ({ projectIndex, children } : ProjectPageBaseProps) => {
  return (
    <div 
      style='background-image: linear-gradient(
        var(--home-page-bg-gradient-2), var(--home-page-bg-gradient-1));'
      class='h-full'
    >
      <ProjectsListBar projectIndex={projectIndex} />
      <NextPreviousPageBar
        previous={projectsList[projectIndex - 1] && {
          link: projectsList[projectIndex - 1]?.link,
          title: projectsList[projectIndex - 1]?.title
        }}
        next={projectsList[projectIndex + 1] && {
          link: projectsList[projectIndex + 1]?.link,
          title: projectsList[projectIndex + 1]?.title
        }}
      />
      <div class='px-[5vw] sm:px-[15vw]'>
        {children}
      </div>
    </div>
  )
}

export default ProjectPageBase;