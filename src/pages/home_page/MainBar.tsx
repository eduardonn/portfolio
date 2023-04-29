import { Component } from 'solid-js';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import emailIcon from '../../assets/email.svg';
import FallingText from '../../shared_components/FallingText';
import { replayAnimations } from '../../globals/animatedElementsStore';
import WobblyDiv from '../../shared_components/WobblyDiv';

const ContactIcons: Component = () => {
  return (
    <nav class='
      absolute right-0 top-0 m-3
      sm:static
      flex flex-col sm:flex-row sm:gap-5
      sm:self-center'
    >
      <a class='group h-10 inline' href='https://github.com/eduardonn' target='_blank'>
        <img src={githubIcon} class='w-6 sm:w-10 group-hover:custom-animate-bounce' alt='github'/>
      </a>
      <a
        class='group h-10 inline'
        href='https://www.linkedin.com/in/eduardo-franke-3601a0263'
        target='_blank'
      >
        <img src={linkedinIcon} class='w-6 sm:w-10 group-hover:custom-animate-bounce' alt='linkedin'/>
      </a>
      <a
        class='group h-10 inline'
        href='mailto:eduardof1999@hotmail.com'
        target='_blank'
      >
        <img src={emailIcon} class='w-6 sm:w-10 group-hover:custom-animate-bounce' alt='email'/>
      </a>
    </nav>
  );
}

const MainBar: Component = () => {
  return (
    <WobblyDiv
      width={window.innerWidth}
      resolution={20}
      wavesForceMax={6}
      background={
        <radialGradient id='radialGradient' cx='50%' cy='90%' r='90%' fx='50%' fy='90%'>
          <stop style='stop-color:var(--main-bar-bg-gradient-clr-1)' offset='40%' />
          <stop style='stop-color:var(--main-bar-bg-gradient-clr-2)' offset='100%' />
        </radialGradient>
        // <linearGradient id='linear1' x1='0%' y1='0%' x2='0%' y2='100%'>
        //   <stop style='stop-color:gold' offset='0%' />
        //   <stop style='stop-color:darkorange' offset='100%' />
        // </linearGradient>
      }
      svgFill='url(#radialGradient)'
    >
      <div class='
        flex flex-col relative gap-5 p-5 px-[4vw]
        sm:flex-row sm:justify-between'
      >
        <div class='flex flex-col gap-1'>
          <span class='text-gray-600'>Hello! My name is</span>
          <div class='
            text-black text-[2rem] sm:text-[2.6rem] font-cinzel relative mb-2
            before:absolute before:bottom-0
            before:h-[3px] before:w-[14rem] before:bg-black'
          >
            <FallingText text='Eduardo Franke' />
          </div>
          <span class='text-gray-800 text-xl'>Welcome to my portfolio!</span>
        </div>
        <ContactIcons />
        <button
          class='absolute right-2 bottom-3 text-xs text-gray-600'
          onClick={replayAnimations}>Replay Animations</button>
      </div>
    </WobblyDiv>
  )
}

export default MainBar;