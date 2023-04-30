import { Component, For, createSignal } from "solid-js"
import TechIcon from "./TechIcons"
import { ProjectInfo } from "../../globals/projectsList";

interface ProjectCardProps extends Omit<ProjectInfo, 'component'> {
  previewPos: 'left' | 'right'
}

const ProjectPreview = ({ link, previewPos } : Pick<ProjectCardProps, 'link' | 'previewPos'>) => {
  const [isHovering, setIsHovering] = createSignal(false);
  
  return (
    <a 
      href={link}
      class={`absolute aspect-video h-[var(--preview-height)] p-0
        bg-gray-200 hover:scale-[1.4] transition-transform duration-500
        border-purple-900 border-2
        bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
        md:top-1/2 md:translate-y-[-50%]
        ${(previewPos === 'left')
          ? 'md:left-0 md:translate-x-[-50%]'
          : 'md:left-auto md:translate-x-[50%] md:right-0'
        }
      `}>
      <img 
        src={
          isHovering()
            ? '/src/assets/project_previews/PortfolioWebsite.gif'
            : '/src/assets/project_previews/PortfolioWebsiteImg.jpg'}
        class='w-full h-full'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </a>
  );
}

const TitleSection: Component<Pick<ProjectCardProps, 'previewPos' | 'link' | 'title'>> = (
  { previewPos, link, title }
) => {
  return (
    <div 
      class={`
        flex h-[33%] items-center bg-deepOrange
        md:justify-start ${(previewPos === 'right') && 'flex-row-reverse'}
    `}>
      <div id='spacer' class='md:min-w-[calc(var(--preview-width)/2)]' />
      <a href={link} 
        class={`text-lg font-semibold text-white m-4 mx-auto`}
      >
        {title}
      </a>
    </div>
  )
}

const DescriptionSection: 
  Component<Pick<ProjectCardProps, 'previewPos' | 'link' | 'description' | 'techStack'>> = (
  { previewPos, description, link, techStack }
) => {
  return (
    <div class={`flex h-full md:pb-0 bg-deepYellow
      ${(previewPos === 'right') && 'flex-row-reverse'}
    `}>
      <div id='spacer' class='md:min-w-[calc(var(--preview-width)/2)]' />
      <div class='p-4 flex flex-col gap-3'>
        <p class=''>{description}</p>
        <a href={link} class='text-gray-600 w-fit'>See project &gt&gt</a>
        <div class='flex items-center mt-auto gap-5'>
          <For each={techStack}>{(techName) =>
            <TechIcon iconName={techName} />
          }</For>
        </div>
      </div>
    </div>);
}

const ProjectCard: Component<ProjectCardProps> = ({ title, description, link, previewPos = 'left', techStack }) => {
  return (
    <div
      style='
        --preview-height:min(12rem,42vw);
        --preview-width:calc(var(--preview-height)*16/9)'
      class={`flex flex-col relative shadow-xl
      h-64 transition-colors ml-0 mb-[calc(var(--preview-height)/2)]
       md:mb-0
      ${(previewPos === 'left')
        ? 'md:ml-[calc(var(--preview-width)/2)] md:mr-auto'
        : 'md:mr-[calc(var(--preview-width)/2)] md:ml-auto'
      }
    `}>
      <ProjectPreview 
        link={link} 
        previewPos={previewPos}
      />
      <TitleSection 
        title={title} 
        link={link} 
        previewPos={previewPos}
      />
      <DescriptionSection 
        description={description} 
        link={link}
        techStack={techStack}
        previewPos={previewPos}
      />
    </div>
  )
}

export default ProjectCard;