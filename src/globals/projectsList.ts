import { AvailableIcons } from "../pages/home_page/TechIcons";

export interface ProjectInfo {
  title: string
  description: string
  link: string
  techStack: Array<AvailableIcons>
}

const projectsList: Array<ProjectInfo> = [
  {
    title: 'Memorization App',
    description: "An application for creating notes and helping you review them",
    link: '/projects/memorization-app',
    techStack: ["Next.js", "Typescript", "MaterialUI", "PostgreSQL"],
  },
  {
    title: '3D Sorting Algorithms Visualizer',
    description: "A web app for visualizing sorting algorithms in a 3D environment",
    link: '/projects/3d-sorting-algorithms-visualizer',
    techStack: ["React.js", "Typescript", "Three.js"],
  },
  {
    title: 'Snipping Tool Digitizer',
    description: "An image-to-text tool to convert a part of the screen on the fly so you can paste it anywhere in text format",
    link: '/projects/snipping-tool-digitizer',
    techStack: ["Python", "Qt5", "Tesseract-OCR"],
  },
  {
    title: 'Camera Surveillance System',
    description: "A camera surveillance system that uses AI for person detection. Built for my college's final project",
    link: '/projects/camera_surveillance_system',
    techStack: ["Flutter", "Qt5", "OpenCV", "Python"],
  },
  {
    title: 'This Website',
    description: "A website for showing my skills (or the lack of them)",
    link: '/projects/portfolio',
    techStack: ["Solid.js", "Typescript", "Tailwind"],
  },
];

export default projectsList;