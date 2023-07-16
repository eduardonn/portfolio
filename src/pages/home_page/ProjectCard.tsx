import { Component, For, createSignal, onMount } from "solid-js"
import TechIcon from "./TechIcons"
import { ProjectInfo } from "../../common/projectList";
import { A } from "@solidjs/router";
import { useAnimateWhenVisible } from "../../common/useAnimateWhenVisible";

interface ProjectCardProps extends Omit<ProjectInfo, 'repoLink'> {
  previewPos: 'left' | 'right'
}

const ProjectPreview = ({ route, imgFileName, videoFileName, previewPos } :
  Pick<ProjectCardProps, 'route' | 'imgFileName' | 'videoFileName' | 'previewPos'>
) => {
  const [isHovering, setIsHovering] = createSignal(false);
  
  return (
    <A 
      href={route}
      style='transition: transform 500ms;'
      class={`absolute aspect-video h-[var(--preview-height)] z-10
        hover:scale-[1.4]
        bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
        md:top-1/2 md:-translate-y-1/2
        ${(previewPos === 'left')
          ? 'md:left-0 md:-translate-x-1/2'
          : 'md:left-auto md:translate-x-1/2 md:right-0'
        }
      `}>
      <img
        src={'/src/assets/project_previews/' + 
          (isHovering()
            ?  videoFileName
            :  imgFileName)}
        class='w-full h-full animate-bouncy-grow'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </A>
  );
}

const Spacer: Component<Pick<ProjectCardProps, 'previewPos'>> = ({ previewPos }) => {
  return (
    <div
      class={`h-full md:min-w-[calc(var(--preview-width)/2)]${
        (previewPos === 'right')
          ? ' float-right'
          : ' float-left'}`}
    />
  );
}

const TitleSection: Component<Pick<ProjectCardProps, 'previewPos' | 'route' | 'title'>> = (
  { previewPos, route, title }
) => {
  return (
    <div
      class='h-20 bg-[var(--project-card-title-bg)]'
    >
      <Spacer previewPos={previewPos} />
      <div class='flex justify-center items-center h-full'>
        <A 
          href={route}
          class={`
            text-lg font-semibold text-white
            animate-fade-in transition-opacity duration-1000 delay-200`}
        >
          {title}
        </A>
      </div>
    </div>
  )
}

const DescriptionSection: 
  Component<Pick<ProjectCardProps, 'previewPos' | 'route' | 'description' | 'techStack'>> = (
  { previewPos, description, route, techStack }
) => {
  return (
    <div
      class='h-full bg-[var(--project-card-description-bg)]'
    >
      <Spacer previewPos={previewPos} />
      <div class='
        mb-[calc(var(--preview-height)/2)] md:mb-0 h-full
        animate-fade-in transition-opacity duration-1000 delay-200'
      >
        <div class='p-4 flex flex-col gap-3 h-full grow'>
          <p>{description}</p>
          <A href={route} class='text-gray-600 w-fit'>See project &gt&gt</A>
          <div class='flex mt-auto gap-5'>
            <For each={techStack}>{(techName) =>
              <TechIcon iconName={techName} />
            }</For>
          </div>
        </div>
      </div>
    </div>);
}

const ProjectCard: Component<ProjectCardProps> = (
  { title, description, route, imgFileName, videoFileName, previewPos = 'left', techStack }
) => {
  let projectPreviewEl: HTMLDivElement;
  
  onMount(() => useAnimateWhenVisible(projectPreviewEl));

  return (
    <div
      ref={projectPreviewEl!}
      style='
        --preview-height:min(12rem,42vw);
        --preview-width:calc(var(--preview-height)*16/9)'
      class={`flex flex-col relative shadow-lg
        min-h-[16rem] max-w-3xl md:h-64 ml-0 mb-[calc(var(--preview-height)/2)] md:mb-0
        ${(previewPos === 'left')
          ? 'md:ml-[calc(var(--preview-width)/2)] md:mr-8'
          : 'md:mr-[calc(var(--preview-width)/2)] md:ml-8'
        }
      `}
    >
      <ProjectPreview 
        route={route}
        imgFileName={imgFileName}
        videoFileName={videoFileName}
        previewPos={previewPos}
      />
      <TitleSection 
        title={title} 
        route={route} 
        previewPos={previewPos}
      />
      <DescriptionSection 
        description={description} 
        route={route}
        techStack={techStack}
        previewPos={previewPos}
      />
    </div>
  )
}

export default ProjectCard;