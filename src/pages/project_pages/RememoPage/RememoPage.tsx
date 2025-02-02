import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection } from '../ProjectPageBase';
import useProjectIndex from '../useProjectIndex';
import projectList from '../../../common/projectList';
import Media from '../Media';

const RememoPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectContentSection>
        <p>
          While learning a new language in Duolingo, I've realized that the technique of spaced repetition for memorizing information is very effective. But sometimes, the frequency of reviewing that Duolingo provided didn't always aligned with what I needed. So I've decided to create a tool for memorizing not only languages, but any information that can benefit from spaced repetition.
        </p>
        <p>
          This application allows you to create notes and assign a level of memorization to each of them, so you can keep track of what needs reviewing, and also provides a reviewing functionality.
        </p>
        <Media src={'/portfolio/assets/project_previews/'
          + projectList[projectIndex].videoFileName} />
      </ProjectContentSection>
      <ProjectContentSection title='Memos Tab'>
        <p>
          The first tab shows all the notes created and the level of memorization of each of them in a practical fashion and allows the editting of any note with one click.
        </p>
        <Media src={'/portfolio/assets/rememo/memos_tab.png'} />
      </ProjectContentSection>
      <ProjectContentSection title='Reviewing'>
        <p>
          The reviewing functionality shows users different notes in sequence according to each note's level of memorization and allows the reassigning of a new level. Notes with a lower level of memorization (meaning that they would be more easily forgotten) are showed more frequently.
        </p>
        <Media src={'/portfolio/assets/rememo/review_tab.png'} />
      </ProjectContentSection>
      <ProjectContentSection title='Progress and Settings Tabs'>
        <p>
          Still to be implemented. The progress tab will show stats, such as how many words were reviewed, how long the user spent reviewing memos, or how many memos exist for each level of memorization.
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Technologies Used'>
        <p>
          For the design, I used MaterialUI, because it provides an easy way of styling an application for non-designers.
        </p>
        <p>
          For the database, I used PostgreSQL, because of the need for fetching cards and its associated categories for search filters and personalized reviewing (still to be implemented).
        </p>
        <p>
          I've also used Next.js for Server-side Rendering.
        </p>
      </ProjectContentSection>
      <ProjectContentSection title='Future Improvements'>
        <ul>
          <li>Add search filters</li>
          <li>Allow for adding drawings and images as memos</li>
          <li>Implement progress and settings tabs</li>
          <li>Add personalized reviewing: such as choosing only one category, or only a range of levels of memorization</li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default RememoPage;