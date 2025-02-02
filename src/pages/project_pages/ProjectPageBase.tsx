import { Component, JSX } from "solid-js";
import ProjectsListBar from "./ProjectsListBar";
import NextPreviousPageBar from "./NextPreviousPageBar";
import projectList from "../../common/projectList";
import BackgroundElement from "../../common_components/BackgroundElement";
import Footer from "../../common_components/Footer";
import WobblyDiv from "../../common_components/WobblyDiv/WobblyDiv";

interface RepoButtonProps {
  href: string
}

export const RepoButton: Component<RepoButtonProps> = ({ href }) => {
  return (
    <button
      class='w-fit px-4 ml-auto font-monospace text-sm rounded
        bg-[linear-gradient(var(--main-bar-bg-gradient-clr-1),var(--main-bar-bg-gradient-clr-2))]'
    >
      <a href={href} target='_blank'>Repo</a>
    </button>
  )
}

export const ProjectMainTitle: Component<{ children: JSX.Element }> = ({ children }) => {
  return (
    <h1 class='text-3xl md:text-4xl text-center my-2 tracking-tighter'>
      {children}
    </h1>
  )
}

interface ContentSectionProps {
  title?: string
  children: JSX.Element
}

export const ProjectContentSection: Component<ContentSectionProps> = ({ title, children }) => {
  return (
    <section class='mb-6'>
      <h2 class='text-2xl mb-2'>{title}</h2>
      <div class='flex flex-col gap-1'>
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
          previous={projectList[projectIndex - 1] && {
            route: projectList[projectIndex - 1]?.route,
            title: projectList[projectIndex - 1]?.title
          }}
          next={projectList[projectIndex + 1] && {
            route: projectList[projectIndex + 1]?.route,
            title: projectList[projectIndex + 1]?.title
          }}
        />
      </WobblyDiv>
      <div class='pb-10 mx-[2vw] lg:mx-[20vw]'>
        <ProjectMainTitle>{projectList[projectIndex].title}</ProjectMainTitle>
        <RepoButton href={projectList[projectIndex].repoLink} />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default ProjectPageBase;