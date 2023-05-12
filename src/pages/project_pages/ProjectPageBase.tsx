import { JSX } from "solid-js";
import ProjectsListBar from "./ProjectsListBar";
import NextPreviousPageBar from "./NextPreviousPageBar";
import projectsList from "../../globals/projectsList";
import BackgroundElement from "../../global_components/BackgroundElement";
import Footer from "./Footer";

interface ProjectPageBaseProps {
  projectIndex: number
  children: JSX.Element
}

export const ProjectMainTitle = ({ children }: { children: JSX.Element }) => {
  return (
    <h1 class='text-3xl text-center my-8'>{children}</h1>
  )
}

interface ContentSectionProps {
  title?: string
  children: JSX.Element
}

export const ProjectContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <section class='flex flex-col gap-3 mb-8'>
      <h2 class='text-2xl ml-0'>{title}</h2>
      {children}
    </section>
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
      <div class='pb-10 px-[5vw] sm:px-[15vw]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default ProjectPageBase;