import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle, RepoButton } from '../ProjectPageBase';
import projectList from '../../../common/projectList';
import useProjectIndex from '../useProjectIndex';
import Media from '../Media';

const ScreenshotDigitizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectList[projectIndex].title}</ProjectMainTitle>
      <RepoButton href={projectList[projectIndex].repoLink} />
      <ProjectContentSection>
        <p>
          Have you ever wanted to copy some text, but the source was an image?
        </p>
        <p>
          The {projectList[projectIndex].title} allow users to take a screenshot of one portion of the screen and immediately get the text in the clipboard ready to be pasted anywhere.
        </p>
        <Media src={'/src/assets/project_previews/'
          + projectList[projectIndex].videoFileName} />
        </ProjectContentSection>
        <ProjectContentSection title='Technologies Used'>
        <p>
          PyQt5, a Python UI library, takes care of grabbing the screenshot and forwarding it to Python-tesseract - an optical character recognition (OCR) tool for python - and later on, inserting the resulting text into the clipboard.
        </p>
      </ProjectContentSection>
        <ProjectContentSection title='Future Improvements'>
        <ul>
          <li>
            Automatically straighten text before feeding to the OCR to yield better results
          </li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default ScreenshotDigitizerPage;