import { JSX } from "solid-js";
import ProjectsListBar from "./ProjectsListBar";
import NextPreviousPageBar from "./NextPreviousPageBar";
import projectsList from "../../globals/projectsList";
import BackgroundElement from "../../global_components/BackgroundElement";

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
    <div>
      <BackgroundElement />
      <div style='background-image: radial-gradient(circle at 50% 300%,
          var(--projects-list-bar-bg-grad-1), var(--projects-list-bar-bg-grad-2) 60%'>
        <ProjectsListBar projectIndex={projectIndex} />
        <NextPreviousPageBar
          previous={projectsList[projectIndex - 1] && {
            route: projectsList[projectIndex - 1]?.route,
            title: projectsList[projectIndex - 1]?.title
          }}
          next={projectsList[projectIndex + 1] && {
            route: projectsList[projectIndex + 1]?.route,
            title: projectsList[projectIndex + 1]?.title
          }}
        />
      </div>
      <div class='px-[5vw] sm:px-[15vw]'>
        {children}
      </div>
    </div>
  )
}

export default ProjectPageBase;