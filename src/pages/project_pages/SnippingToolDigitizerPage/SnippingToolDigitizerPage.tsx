import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectMainTitle } from '../ProjectPageBase';
import projectsList from '../../../globals/projectsList';
import useProjectIndex from '../useProjectIndex';

const SnippingToolDigitizerPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <div class='flex flex-col gap-8'>
        <p>
          Have you ever wanted to copy some text, but the source was an image?
        </p>
        <div class='flex items-center justify-center text-center h-48 w-fit mx-auto bg-red-500 aspect-video'>
          [Short video of someone trying to copy some text and dragging the image accidentally]
        </div>
        <p>
          The Snipping Tool Digitizer allow users to take a screenshot of one portion of the screen and immediately get the text in the clipboard ready to be pasted anywhere.
        </p>
        <div class='flex items-center justify-center text-center h-48 w-fit mx-auto bg-blue-500 aspect-video'>[Demo video]</div>
        <p>
          The UI was made with Python and Tkinter, which takes care of grabbing the screenshot and forwarding it to Python-tesseract - an optical character recognition (OCR) tool for python - and later on, inserting into the clipboard.
        </p>
        <a 
          class="w-fit"
          href={projectsList[projectIndex].repoLink}
          target="_blank">Repo</a>
      </div>
    </ProjectPageBase>
  );
}

export default SnippingToolDigitizerPage;