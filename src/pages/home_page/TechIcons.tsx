import materialui from '/src/assets/materialui.svg';
import solidjs from '/src/assets/solidjs.svg';
import flutter from '/src/assets/flutter.png';
import react from '/src/assets/react.svg';
import next from '/src/assets/next.svg';
import threejs from '/src/assets/threejs.png';
import qt5 from '/src/assets/qt5.png';
import opencv from '/src/assets/opencv.png';
import postgresql from '/src/assets/postgresql.svg';
import tcl_tk from '/src/assets/tcl_tk.png';
import python from '/src/assets/python.svg';
import typescript from '/src/assets/typescript.svg';
import tailwind from '/src/assets/tailwind.svg';
import tesseract_OCR from '/src/assets/tesseract_OCR.png';

const iconsInfo = {
  'MaterialUI': {
    href: 'https://mui.com/',
    imgSrc: materialui,
  },
  'Solid.js': {
    href: 'https://www.solidjs.com/',
    imgSrc: solidjs,
  },
  'Flutter': {
    href: 'https://flutter.dev/',
    imgSrc: flutter,
  },
  'React.js': {
    href: 'https://react.dev/',
    imgSrc: react,
  },
  'Next.js': {
    href: 'https://nextjs.org/',
    imgSrc: next,
  },
  'Three.js': {
    href: 'https://threejs.org/',
    imgSrc: threejs,
  },
  'Qt5': {
    href: 'https://www.qt.io/',
    imgSrc: qt5,
  },
  'OpenCV': {
    href: 'https://opencv.org/',
    imgSrc: opencv,
  },
  'PostgreSQL': {
    href: 'https://www.postgresql.org/',
    imgSrc: postgresql,
  },
  'Tkinter': {
    href: 'https://docs.python.org/3/library/tkinter.html',
    imgSrc: tcl_tk,
  },
  'Python': {
    href: 'https://www.python.org/',
    imgSrc: python,
  },
  'Typescript': {
    href: 'https://www.typescriptlang.org/',
    imgSrc: typescript,
  },
  'Tailwind': {
    href: 'https://tailwindcss.com/',
    imgSrc: tailwind,
  },
  'Tesseract-OCR': {
    href: 'https://github.com/tesseract-ocr/tesseract',
    imgSrc: tesseract_OCR,
  },
}

export type AvailableIcons = keyof typeof iconsInfo;

export default function TechIcon({ iconName }: { iconName: AvailableIcons }) {
  return (
    <a href={iconsInfo[iconName].href} target='_blank'>
      <img
        src={iconsInfo[iconName].imgSrc}
        class='h-[1.8rem] max-w-[5rem]'
        title={iconName}
        alt={iconName}/>
    </a>
  );
}