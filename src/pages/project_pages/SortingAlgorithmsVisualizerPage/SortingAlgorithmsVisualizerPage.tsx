import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectMainTitle, ProjectSubHeader1 } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectsList from '../../../globals/projectsList';

const AlgorithmVisualizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <div class='flex flex-col gap-3'>
        <p>
          I built this project to not only learn about Three.js and React, but also Sorting Algorithms. For now, four of them are implemented: Insertion, Selection, Quick and Merge, but the project was made to quickly accommodate new algorithms and their animations.
        </p>
        <p>
          Inserting a new algorithm is a three step process:
        </p>
        <ol>
          <li>1. Implement method with the same name</li>
          <li>2. Insert the name of the algorithm and the respective method in the algorithms list</li>
          <li>3. Create callbacks for the animations</li>
        </ol>
        <ProjectSubHeader1>Points to improve</ProjectSubHeader1>
        <ul>
          <li>- Make the 3D experience richer, such as including visual effects and better textures</li>
          <li>- Implement more algorithms</li>
        </ul>
      </div>
    </ProjectPageBase>
  )
}

export default AlgorithmVisualizerPage;