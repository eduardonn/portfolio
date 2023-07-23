import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';

const PortfolioPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectContentSection>
        <p>
          Despite this portfolio being relatively simple, I learned a great deal of web development making it and I think there are some things worth mentioning.
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Wobbly Div'>
        <p>
          A div that reacts to mouse movement, resembling a liquid.
        </p>
        <p>
          Physics simulations are among the most interesting pieces of software in my opinion. So, using a bit of knowledge that I got from my attempts of making a car in Unity3D, I decided to implement a simple container element that wobbles when the mouse pointer passes through it.
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Design'>
        <p>
          I'm clearly not a designer, but since this is a personal website, I tried my best to do something myself. And for the theme choice, I went with summer vibes because it brings me a relaxing and inspiring feeling.
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Future Improvements'>
        <ul>
          <li>
            Make the lines in the Wobbly Div smoother, i.e. instead of using lines on the svg, it should be possible to use curves to make it completely smooth
          </li>
          <li>
            Make a cooler design and better animations
          </li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  )
}

export default PortfolioPage;