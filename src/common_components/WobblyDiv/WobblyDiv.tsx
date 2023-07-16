import { Component, JSX, onCleanup, onMount } from "solid-js";
import WobblyPointsEngine from "./WobblyPointsEngine";

interface WobblyDivProps {
  resolution?: number;
  svgFill: string;
  wavesForceMax?: number;
  svgBackground?: JSX.Element;
  children?: JSX.Element;
}

const WobblyDiv: Component<WobblyDivProps> = 
    ({resolution = 10, wavesForceMax = 10, svgFill, svgBackground, children}) => {
  let contentElement: HTMLDivElement;
  let elementBoundingClientRect: DOMRect;
  const pointsEngine = new WobblyPointsEngine(resolution);

  onMount(() => {
    elementBoundingClientRect = contentElement.getBoundingClientRect();

    pointsEngine.contentElementRect = elementBoundingClientRect;
    pointsEngine.startAnimation();

    document.addEventListener('mousemove', handleMouseMovement);
    window.addEventListener('resize', pointsEngine.handleWindowResize.bind(pointsEngine));

    onCleanup(() => {
      pointsEngine.stopAnimation(); 
      document.removeEventListener('mousemove', handleMouseMovement);
      window.removeEventListener('resize', pointsEngine.handleWindowResize.bind(pointsEngine));
    });
  });

  const calculateWaveForce = (mouseY: number, previousMouseY: number) => {
    let force = mouseY - previousMouseY;
    force = Math.min(force, wavesForceMax);
    force = Math.max(force, -wavesForceMax);

    return force;
  }
  
  let previousMouseY = 0;
  const handleMouseMovement = (e: MouseEvent) => {
    const waveLineY = elementBoundingClientRect.bottom;

    if (e.clientY > waveLineY) {
      if (previousMouseY <= waveLineY) {
        pointsEngine.addForceWave(
          e.clientX / window.innerWidth,
          calculateWaveForce(e.clientY, previousMouseY));
      }
    } else {
      if (previousMouseY >= waveLineY) {
        pointsEngine.addForceWave(
          e.clientX / window.innerWidth,
          calculateWaveForce(e.clientY, previousMouseY));
      }
    }

    previousMouseY = e.clientY;
  }

  return (
    <div 
      class='relative' 
      ref={contentElement!}
      onClick={(e) => {
        const mouseX = e.clientX / window.innerWidth;
        pointsEngine.addForceWave(mouseX, wavesForceMax)
      }}
    >
      <svg class='absolute inset-0 overflow-visible -z-10'>
        {svgBackground}
        <path ref={pointsEngine.svgElement} fill={svgFill} />
      </svg>
      {children}
    </div>
  );
}

export default WobblyDiv;