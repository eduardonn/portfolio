import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectMainTitle } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectsList from '../../../globals/projectsList';

const AlgorithmVisualizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <div class='flex flex-col gap-3'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore ratione obcaecati eum optio, vitae atque repudiandae numquam suscipit dolores veniam consectetur aliquid officia, fugiat in, dolorum natus quisquam pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti, quasi similique soluta, id aperiam eos amet possimus ut nostrum unde aliquam atque rem animi officiis sunt labore. Tenetur, placeat!
        </p>
      </div>
    </ProjectPageBase>
  )
}

export default AlgorithmVisualizerPage;