const iconsInfo = {
  'MaterialUI': {
    href: 'https://mui.com/',
    imgSrc: '/src/assets/materialui.svg',
  },
  'Solid.js': {
    href: 'https://www.solidjs.com/',
    imgSrc: '/src/assets/solidjs.svg',
  },
  'Flutter': {
    href: 'https://flutter.dev/',
    imgSrc: '/src/assets/flutter.png',
  },
  'React.js': {
    href: 'https://react.dev/',
    imgSrc: '/src/assets/react.svg',
  },
  'Next.js': {
    href: 'https://nextjs.org/',
    imgSrc: '/src/assets/next.svg',
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
    imgSrc: '/src/assets/postgresql.svg',
  },
  'Tkinter': {
    href: 'https://docs.python.org/3/library/tkinter.html',
    imgSrc: '/src/assets/tcl_tk.png',
  },
  'Python': {
    href: 'https://www.python.org/',
    imgSrc: '/src/assets/python.svg',
  },
  'Typescript': {
    href: 'https://www.typescriptlang.org/',
    imgSrc: '/src/assets/typescript.svg',
  },
  'Tailwind': {
    href: 'https://tailwindcss.com/',
    imgSrc: '/src/assets/tailwind.svg',
  },
  'Tesseract-OCR': {
    href: 'https://github.com/tesseract-ocr/tesseract',
    imgSrc: '/src/assets/tesseract_OCR.png',
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