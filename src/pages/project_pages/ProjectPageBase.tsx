import { Component, JSX } from "solid-js";
import ProjectsListBar from "./ProjectsListBar";
import NextPreviousPageBar from "./NextPreviousPageBar";
import projectsList from "../../globals/projectsList";
import BackgroundElement from "../../global_components/BackgroundElement";
import Footer from "../../global_components/Footer";
import WobblyDiv from "../../global_components/WobblyDiv";

interface RepoButtonProps {
  href: string
}

export const RepoButton: Component<RepoButtonProps> = ({ href }) => {
  return (
    <button
      class='w-fit px-4 font-monospace text-sm rounded
        bg-[linear-gradient(var(--main-bar-bg-gradient-clr-1),var(--main-bar-bg-gradient-clr-2))]'
    >
      <a href={href} target='_blank'>Repo</a>
    </button>
  )
}

export const ProjectMainTitle: Component<{ children: JSX.Element }> = ({ children }) => {
  return (
    <h1 class='text-4xl text-center my-8'>{children}</h1>
  )
}

interface ContentSectionProps {
  title?: string
  children: JSX.Element
}

export const ProjectContentSection: Component<ContentSectionProps> = ({ title, children }) => {
  return (
    <section class='mb-8'>
      <h2 class='text-3xl mb-4'>{title}</h2>
      <div class='flex flex-col gap-2'>
        {children}
      </div>
    </section>
  )
}

interface ProjectPageBaseProps {
  projectIndex: number
  children: JSX.Element
}

const ProjectPageBase: Component<ProjectPageBaseProps> = ({ projectIndex, children }) => {
  return (
    <div>
      <BackgroundElement />
      <WobblyDiv
        wavesForceMax={5}
        svgBackground={
          <radialGradient id='radialGradient' cx='50%' cy='90%' r='90%' fx='50%' fy='90%'>
            <stop style='stop-color:var(--main-bar-bg-gradient-clr-1)' offset='40%' />
            <stop style='stop-color:var(--main-bar-bg-gradient-clr-2)' offset='100%' />
          </radialGradient>
        }
        svgFill='url(#radialGradient)'
      >
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
      </WobblyDiv>
      <div class='pb-10 px-[5vw] sm:px-[15vw]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default ProjectPageBase;