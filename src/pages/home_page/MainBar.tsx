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
      static sm:gap-5 self-center
      flex flex-col sm:flex-row'
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
      resolution={15}
      wavesForceMax={6}
      background={
        <radialGradient id='radialGradient' cx='50%' cy='90%' r='90%' fx='50%' fy='90%'>
          <stop style='stop-color:var(--main-bar-bg-gradient-clr-1)' offset='40%' />
          <stop style='stop-color:var(--main-bar-bg-gradient-clr-2)' offset='100%' />
        </radialGradient>
      }
      svgFill='url(#radialGradient)'
    >
      <div class='
        flex justify-between relative gap-5 p-5 px-[4vw]'
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
          aria-label='replay animations button'
          class='absolute hidden sm:block bottom-1 right-2
            sm:bottom-3 sm:text-xs text-gray-600'
          onClick={replayAnimations}
        >Replay Animations</button>
      </div>
    </WobblyDiv>
  )
}

export default MainBar;