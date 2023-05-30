import { AvailableIcons } from "../pages/home_page/TechIcons";

export interface ProjectInfo {
  title: string
  description: string
  route: string
  repoLink: string
  mediaFileName: string
  techStack: Array<AvailableIcons>
}

const projectsList: Array<ProjectInfo> = [
  {
    title: 'Memorization App',
    description: "An application for creating notes and helping you review them",
    route: '/projects/memorization-app',
    repoLink: '/',
    mediaFileName: 'memorization_app',
    techStack: ["Next.js", "Typescript", "MaterialUI", "PostgreSQL"],
  },
  {
    title: '3D Sorting Algorithms Visualizer',
    description: "A web app for visualizing sorting algorithms in a 3D environment",
    route: '/projects/3d-sorting-algorithms-visualizer',
    repoLink: 'https://github.com/eduardonn/3d-sorting-algorithms-visualizer',
    mediaFileName: 'sorting_algorithms_visualizer',
    techStack: ["React.js", "Typescript", "Three.js"],
  },
  {
    title: 'Snipping Tool Digitizer',
    description: "An image-to-text tool to convert a part of the screen on the fly so you can paste it anywhere in text format",
    route: '/projects/snipping-tool-digitizer',
    repoLink: '/',
    mediaFileName: 'snipping_tool',
    techStack: ["Python", "Qt5", "Tesseract-OCR"],
  },
  {
    title: 'Camera Surveillance System',
    description: "A camera surveillance system that uses AI for person detection. Built for my college's final project",
    route: '/projects/camera_surveillance_system',
    repoLink: '/',
    mediaFileName: 'surveillance_system',
    techStack: ["Flutter", "Qt5", "OpenCV", "Python"],
  },
  {
    title: 'This Website',
    description: "A website for showing my skills (or the lack of them)",
    route: '/projects/portfolio',
    repoLink: '/',
    mediaFileName: 'portfolio_website',
    techStack: ["Solid.js", "Typescript", "Tailwind"],
  },
];

export default projectsList;