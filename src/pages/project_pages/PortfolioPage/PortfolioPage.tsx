import type { Component } from 'solid-js';
import ProjectPageBase from '../ProjectPageBase';
import projectsList from '../../../globals/projectsList';
import useProjectIndex from '../useProjectIndex';
import { ProjectSubHeader1 } from '../ProjectPageBase';

const PortfolioPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <h1 class='text-3xl text-center p-4'>{projectsList[projectIndex].title}</h1>
      <div class='flex flex-col gap-3'>
        <p>
          This is my developer portfolio. Despite being relatively simple, I think there are some things worth mentioning about it.
        </p>
        <ProjectSubHeader1>Wobbly Div</ProjectSubHeader1>
        <p>
          A div with a background that resembles a liquid and reacts to mouse movement.
        </p>
        <p>
          Physics simulations are among the most interesting pieces of software in my opinion. So, using a bit of knowledge that I got from game development, I decided to implement a simple container element that wobbles when the mouse pointer passes through it.
        </p>
        <p>
          Also, its physics settings are very customizable and it's worth playing around:
        </p>
        <p class='bg-gray-200'>[Wobbly div with a settings options that updates in real time]</p>
        <ProjectSubHeader1>Design</ProjectSubHeader1>
        <p>
          I'm clearly not a designer, but since this is meant to be a personal website, I tried my best to show what I have. And for the theme choice, I went with summer vibes just because I think it looks good.
        </p>
        <ProjectSubHeader1>Points to Improve</ProjectSubHeader1>
        <ul>
          <li>- Make the lines in the Wobbly Div smoother: instead of using lines on the svg, it should be possible to use curves to make it completely smooth</li>
        </ul>
      </div>
    </ProjectPageBase>
  )
}

export default PortfolioPage;