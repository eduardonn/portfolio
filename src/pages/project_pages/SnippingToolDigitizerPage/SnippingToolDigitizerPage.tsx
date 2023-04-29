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
        <div class='h-48 w-fit mx-auto bg-red-500 aspect-video'></div>
        <p>
          The Snipping Tool Digitizer allow users to take a screenshot of one portion of the screen and immediately get the text in the clipboard ready to be pasted anywhere.
        </p>
        <div class='h-48 w-fit mx-auto bg-blue-500 aspect-video'></div>
        <p>
          The UI was made with Python and Tkinter, which allows users to take a  screenshot and forwards it to Python-tesseract - an optical character recognition (OCR) tool for python - to digitize it.
        </p>
      </div>
    </ProjectPageBase>
  );
}

export default SnippingToolDigitizerPage;