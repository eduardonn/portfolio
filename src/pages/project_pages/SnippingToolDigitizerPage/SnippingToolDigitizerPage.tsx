import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle } from '../ProjectPageBase';
import projectsList from '../../../globals/projectsList';
import useProjectIndex from '../useProjectIndex';
import Media from '../Media';

const SnippingToolDigitizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <ProjectContentSection>
        <p>
          Have you ever wanted to copy some text, but the source was an image?
        </p>
        <p>
          The Snipping Tool Digitizer allow users to take a screenshot of one portion of the screen and immediately get the text in the clipboard ready to be pasted anywhere.
        </p>
        <Media src={'/src/assets/project_previews/'
          + projectsList[projectIndex].mediaFileName + '.gif'} />
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
      <ProjectContentSection>
        <a 
          class="w-fit"
          href={projectsList[projectIndex].repoLink}
          target="_blank">
            Repo
        </a>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default SnippingToolDigitizerPage;