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
          While learning a new language in Duolingo, I've realized that the technique of spaced repetition for memorizing information is very effective. But sometimes, the frequency of reviewing that Duolingo provided didn't always aligned with what I needed. So I've decided to create an app for memorizing not only languages, but any information that can benefit from spaced repetition.
        </p>
        <p>
          This application allows you to create notes and assign a level of memorization to each of them, so you can keep track of what needs reviewing at which frequency, and also provides a reviewing functionality.
        </p>
        <ProjectSubHeader1>Card Tab</ProjectSubHeader1>
        <p>
          The first tab shows all the notes created and the level of memorization of each of them in a practical fashion and allows the editting of any note with one click.
        </p>
        <div class='h-48 w-fit mx-auto bg-red-500 aspect-video'></div>
        <ProjectSubHeader1>Reviewing</ProjectSubHeader1>
        <p>
          The reviewing functionality shows users different notes in sequence according to each note's level of memorization and allows for reassigning of a new level. Notes with a lower level of memorization (meaning that they would be more easily forgotten) are showed more frequently.
        </p>
        <div class='h-48 w-fit mx-auto bg-red-900 aspect-video'></div>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default MemorizationAppPage;