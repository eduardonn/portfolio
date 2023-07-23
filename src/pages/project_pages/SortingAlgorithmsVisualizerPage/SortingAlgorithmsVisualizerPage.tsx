import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectList from '../../../common/projectList';
import Media from '../Media';

const AlgorithmVisualizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
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
          <li>Implement method with the same name (e.g. quick)</li>
          <li>Insert the name of the algorithm and the respective method in the algorithms list</li>
          <li>Create callbacks for the animations</li>
        </ol>
        <p>
          The button and callback is extracted from the algorithms list object and added automatically in the UI.
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Technologies Used'>
        <p>
          React / react-three-fiber (a wrapper around Three.js) was chosen for the graphics, mainly for its simplicity in relation to directly using WebGL.
        </p>
        <p>
          It was a new experience to create 3D graphics in a declarative way and maybe it wasn't the best choice mainly because 3D applications are mostly imperative, nevertheless, the project helped me learn a great deal of React.
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