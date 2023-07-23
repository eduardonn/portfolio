import { AvailableIcons } from "../pages/home_page/TechIcons";

export interface ProjectInfo {
  title: string
  description: string
  route: string
  repoLink: string
  imgFileName: string
  videoFileName: string
  techStack: Array<AvailableIcons>
}

const projectList: Array<ProjectInfo> = [
  {
    title: 'ReMemo',
    description: "A tool for creating memos and helping you review them",
    route: '/projects/rememo',
    repoLink: 'https://github.com/eduardonn/rememo',
    imgFileName: 'rememo.jpg',
    videoFileName: 'rememo.gif',
    techStack: ["Next.js", "Typescript", "MaterialUI", "PostgreSQL"],
  },
  {
    title: '3D Sorting Algorithms Visualizer',
    description: "A web application for visualizing sorting algorithms in a 3D environment",
    route: '/projects/3d-sorting-algorithms-visualizer',
    repoLink: 'https://github.com/eduardonn/3d-sorting-algorithms-visualizer',
    imgFileName: 'sorting_algorithms_visualizer.png',
    videoFileName: 'sorting_algorithms_visualizer.gif',
    techStack: ["React.js", "Typescript", "Three.js"],
  },
  {
    title: 'Screenshot Digitizer',
    description: "An image-to-text tool to convert a part of the screen on the fly so you can paste it anywhere in text format",
    route: '/projects/screenshot-digitizer',
    repoLink: 'https://github.com/eduardonn/screenshot-digitizer',
    imgFileName: 'screenshot_digitizer.jpg',
    videoFileName: 'screenshot_digitizer.gif',
    techStack: ["Python", "Qt5", "Tesseract-OCR"],
  },
  {
    title: 'Camera Surveillance System',
    description: "A camera surveillance system that uses AI for person detection. Built for my college final year project",
    route: '/projects/camera_surveillance_system',
    repoLink: 'https://github.com/eduardonn/camera-system-object-detection',
    imgFileName: 'surveillance_system.jpg',
    videoFileName: 'surveillance_system.gif',
    techStack: ["Flutter", "Qt5", "OpenCV", "Python"],
  },
  {
    title: 'This Website',
    description: "My developer portfolio",
    route: '/projects/portfolio',
    repoLink: '/',
    imgFileName: 'portfolio_website.jpg',
    videoFileName: 'portfolio_website.gif',
    techStack: ["Solid.js", "Typescript", "Tailwind"],
  },
];

export default projectList;