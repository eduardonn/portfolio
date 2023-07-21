import { Component, JSX, onCleanup, onMount } from "solid-js";
import WobblyPointsEngine from "./WobblyPointsEngine";

interface WobblyDivProps {
  resolution?: number;
  svgFill: string;
  wavesForceMax?: number;
  svgBackground?: JSX.Element;
  children?: JSX.Element;
}

// TODO: Improve performance
const WobblyDiv: Component<WobblyDivProps> = 
    ({resolution = 10, wavesForceMax = 10, svgFill, svgBackground, children}) => {
  let wrapperElement: HTMLDivElement;
  let elementBoundingClientRect: DOMRect;
  const pointsEngine = new WobblyPointsEngine(resolution);

  onMount(() => {
    elementBoundingClientRect = wrapperElement.getBoundingClientRect();

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

  const calculateWaveForce = (deltaY: number, deltaTime: number) => {
    const mouseSpeed = deltaY / deltaTime;
    let force = mouseSpeed * 5;
    force = Math.min(force, wavesForceMax);
    force = Math.max(force, -wavesForceMax);

    return force;
  }
  
  let previousMouseY = 0;
  let previousMouseYTime = performance.now();
  const handleMouseMovement = (e: MouseEvent) => {
    const waveLineY = elementBoundingClientRect.bottom;

    if (e.clientY > waveLineY) {
      if (previousMouseY <= waveLineY) {
        const mouseXNormalized = e.clientX / window.innerWidth;
        pointsEngine.addForceWave(
          mouseXNormalized,
          calculateWaveForce(e.clientY - previousMouseY, performance.now() - previousMouseYTime));
      }
    } else {
      if (previousMouseY >= waveLineY) {
        const mouseXNormalized = e.clientX / window.innerWidth;
        pointsEngine.addForceWave(
          mouseXNormalized,
          calculateWaveForce(e.clientY - previousMouseY, performance.now() - previousMouseYTime));
      }
    }

    previousMouseY = e.clientY;
    previousMouseYTime = performance.now();
  }

  return (
    <div 
      class='relative' 
      ref={wrapperElement!}
      onClick={(e) => {
        const mouseXNormalized = e.clientX / window.innerWidth;
        pointsEngine.addForceWave(mouseXNormalized, wavesForceMax)
      }}
    >
      <svg class='absolute inset-0 overflow-visible -z-10'>
        {svgBackground}
        <path ref={pointsEngine.svgPathElement} fill={svgFill} />
      </svg>
      {children}
    </div>
  );
}

export default WobblyDiv;