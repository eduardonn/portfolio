import solidjsIcon from '../../assets/solidjs.svg';
import materialUIIcon from '../../assets/materialui.svg';
import reactIcon from '../../assets/react.svg';
import postgresqlIcon from '../../assets/postgresql.svg';
import typescriptIcon from '/src/assets/typescript.svg'
import tailwindIcon from '/src/assets/tailwind.svg'
import nextIcon from '/src/assets/next.svg'

const iconsInfo = {
  'MaterialUI': {
    href: 'https://mui.com/',
    imgSrc: materialUIIcon,
  },
  'Solid.js': {
    href: 'https://www.solidjs.com/',
    imgSrc: solidjsIcon,
  },
  'Flutter': {
    href: 'https://flutter.dev/',
    imgSrc: '/src/assets/flutter.png',
  },
  'React.js': {
    href: 'https://react.dev/',
    imgSrc: reactIcon,
  },
  'Next.js': {
    href: 'https://nextjs.org/',
    imgSrc: nextIcon,
  },
  'Three.js': {
    href: 'https://threejs.org/',
    imgSrc: '/src/assets/threejs.png',
  },
  'Qt5': {
    href: 'https://www.qt.io/',
    imgSrc: '/src/assets/qt5.png',
  },
  'OpenCV': {
    href: 'https://opencv.org/',
    imgSrc: '/src/assets/opencv.png',
  },
  'PostgreSQL': {
    href: 'https://www.postgresql.org/',
    imgSrc: postgresqlIcon,
  },
  'Tkinter': {
    href: 'https://docs.python.org/3/library/tkinter.html',
    imgSrc: '/src/assets/tcl_tk.png',
  },
  'Python': {
    href: 'https://www.python.org/',
    imgSrc: '/src/assets/python.png',
  },
  'Typescript': {
    href: 'https://www.typescriptlang.org/',
    imgSrc: typescriptIcon,
  },
  'Tailwind': {
    href: 'https://tailwindcss.com/',
    imgSrc: tailwindIcon,
  },
  'Tesseract-OCR': {
    href: 'https://github.com/tesseract-ocr/tesseract',
    imgSrc: '/src/assets/tesseract_OCR.png',
  },
}

export type AvailableIcons = keyof typeof iconsInfo;

export default function TechIcon({ iconName }: { iconName: AvailableIcons }) {
  return (
    <a class='group' href={iconsInfo[iconName].href} target='_blank'>
      <img
        src={iconsInfo[iconName].imgSrc}
        class='h-[1.8rem] max-w-[5rem]'
        title={iconName}
        alt={iconName}/>
    </a>
  );
}