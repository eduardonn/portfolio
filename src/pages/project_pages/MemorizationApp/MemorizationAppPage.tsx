import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle, ProjectSubHeader1 } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectsList from '../../../globals/projectsList';

const MemorizationAppPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <ProjectContentSection>
        <p>
          This application allows you to create notes and assign a level of memorization to each of them, so you can keep track of what needs reviewing at which frequency, and also provides a reviewing functionality.
        </p>
        <p>
          The first screen shows all the notes created and the level of memorization of each of them in a practical fashion and allows you to edit any note with one click.
        </p>
        <ProjectSubHeader1>Reviewing</ProjectSubHeader1>
        <p>
          The reviewing functionality shows users different notes in sequence according to each note's level of memorization and allows for reassigning of a new level. Notes with a lower level of memorization (meaning that they would be more easily forgotten) are showed more frequently.
        </p>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default MemorizationAppPage;