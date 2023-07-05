import { Component, For } from "solid-js"
import { HomePageSection } from "./HomePageBase"
import ProjectCard from "./ProjectCard";
import projectList from "../../common/projectList";

const PersonalProjectsSection: Component = () => {
  return (
    <HomePageSection>
      <div class='pb-16 w-fit mx-auto'>
        <h1 class='text-3xl mb-6'>Personal Projects</h1>
        <div class='flex flex-col gap-8'>
          <For each={projectList}>{(project, index) => 
            <ProjectCard
              title={project.title}
              description={project.description}
              route={project.route}
              imgFileName={project.imgFileName}
              videoFileName={project.videoFileName}
              techStack={project.techStack}
              previewPos={(index() % 2 === 0) ? 'left' : 'right'}
            />
          }</For>
        </div>
      </div>
    </HomePageSection>
  )
}

export default PersonalProjectsSection;