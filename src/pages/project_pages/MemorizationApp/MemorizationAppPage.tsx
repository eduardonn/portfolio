import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle } from '../ProjectPageBase';
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
      </ProjectContentSection>
      <ProjectContentSection title='Cards Tab'>
        <p>
          The first tab shows all the notes created and the level of memorization of each of them in a practical fashion and allows the editting of any note with one click.
        </p>
        <div class='h-48 w-fit mx-auto bg-red-500 aspect-video'></div>
      </ProjectContentSection>
      <ProjectContentSection title='Reviewing'>
        <p>
          The reviewing functionality shows users different notes in sequence according to each note's level of memorization and allows for reassigning of a new level. Notes with a lower level of memorization (meaning that they would be more easily forgotten) are showed more frequently.
        </p>
        <div class='h-48 w-fit mx-auto bg-red-200 aspect-video'></div>
      </ProjectContentSection>
      <ProjectContentSection title='Technologies Used'>
        <p>
          For the design, I used MaterialUI, because it provides an easy way of styling an application for non-designers.
        </p>
        <p>
          For the database, I used PostgreSQL, because it seemed to make sense for fetching cards and its associated categories for search filters and personalized reviewing (still to be implemented).
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Points to Improve'>
        <ul>
          <li>- Search filters</li>
          <li>- Adding drawings and images as memos</li>
          <li>- Personalized reviewing: such as reviewing only one category, or only a range of levels of memorization</li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default MemorizationAppPage;