import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle, RepoButton } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectList from '../../../common/projectList';
import Media from '../Media';

const AlgorithmVisualizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectList[projectIndex].title}</ProjectMainTitle>
      <RepoButton href={projectList[projectIndex].repoLink} />
      <ProjectContentSection>
        <p>
          I built this project to not only learn about Three.js and React, but also Sorting Algorithms. For now, four of them are implemented: Insertion, Selection, Quick and Merge, but the project was made to quickly accommodate new algorithms and their animations.
        </p>
        <p>
          This visualizer displays a 3D animation of the selected sorting algorithm in a fun and visual way. It also allows tweaking of the array settings and animation speed.
        </p>
        <Media src={'/src/assets/project_previews/'
          + projectList[projectIndex].videoFileName} />
      </ProjectContentSection>
      <ProjectContentSection title='Inserting a New Sorting Algorithm'>
        <p>
          Inserting a new algorithm is a three step process:
        </p>
        <ol>
          <li>Implement method with the same name</li>
          <li>Insert the name of the algorithm and the respective method in the algorithms list</li>
          <li>Create callbacks for the animations</li>
        </ol>
        <p>
          The button is added automatically in the UI
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Future Improvements'>
        <ul>
          <li>Make the 3D experience more interesting, such as including visual effects and better textures</li>
          <li>Implement more algorithms</li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  )
}

export default AlgorithmVisualizerPage;