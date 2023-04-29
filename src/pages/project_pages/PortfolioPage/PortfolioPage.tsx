import type { Component } from 'solid-js';
import ProjectPageBase from '../ProjectPageBase';
import projectsList from '../../../globals/projectsList';
import useProjectIndex from '../useProjectIndex';

const PortfolioPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <h1 class='text-3xl text-center p-4'>{projectsList[projectIndex].title}</h1>
      <div class='flex flex-col gap-3'>
        <p>
          This is my developer portfolio.
        </p>
        <p>
          Despite being a relatively simple portfolio, I think there are some things that are worth mentioning about it, such as the Wobbly Div, and the theme used.
        </p>
      </div>
      <h1 class='text-2xl p-4'>The Theme</h1>
      <div class='flex flex-col gap-3'>
        <p>
          This theme was inspired by 
        </p>
      </div>
    </ProjectPageBase>
  )
}

export default PortfolioPage;