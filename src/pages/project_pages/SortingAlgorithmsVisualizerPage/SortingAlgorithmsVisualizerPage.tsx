import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectsList from '../../../globals/projectsList';

const AlgorithmVisualizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <ProjectContentSection>
        <p>
          I built this project to not only learn about Three.js and React, but also Sorting Algorithms. For now, four of them are implemented: Insertion, Selection, Quick and Merge, but the project was made to quickly accommodate new algorithms and their animations.
        </p>
        <p>
          Inserting a new algorithm is a three step process:
        </p>
        <ol>
          <li class='list-decimal'>Implement method with the same name</li>
          <li class='list-decimal'>Insert the name of the algorithm and the respective method in the algorithms list</li>
          <li class='list-decimal'>Create callbacks for the animations</li>
        </ol>
      </ProjectContentSection>
      <ProjectContentSection title='Points to improve'>
        <ul>
          <li>Make the 3D experience richer, such as including visual effects and better textures</li>
          <li>Implement more algorithms</li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  )
}

export default AlgorithmVisualizerPage;