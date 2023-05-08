import { Component } from "solid-js";
import Expandable from "../../global_components/Expandable";
import { HomePageSection } from "./HomePageBase";

const AboutMeSection: Component = () => {
  return (
    <HomePageSection>
      <h1 class='text-3xl mb-5'>About Me</h1>
      <div class='flex flex-col gap-3'>
        <p>
          I majored in Computer Engineering and I'm now looking for a first job to start my career as a developer.
        </p>
        <p>
          In college, I was always responsible and got pretty good grades. I've also made some personal projects using React.js, Solid.js, Next.js, MaterialUI, Tailwind, Three.js, some games prototypes using Unity3D, and, for my college's final project, a desktop application and an android app using Flutter, PyQt5 and a bit of AI for object detection.
        </p>
        <p>
          These projects not only allowed me to learn more about the frameworks involved, but also made me realize the difficulties of building larger projects, which is something I hadn't done in most college assignments. The planning, visual design, software architecture and good use of the available tools are all connected and each play an important role on making a pretty, pleasant to use, and scalable software in a viable amount of time.
        </p>
        <Expandable>
          <h1 class='text-3xl my-5'>My Story</h1>
          <div class='flex flex-col gap-3'>
            <p>
              My love for technology and exact sciences started when I was around 7 years old and used to spend my afternoons after school playing games on my parent's lan house. I've always loved the logical nature of computer games (and computers themselves) and was always amazed by all of the magic that made them possible.
            </p>
            <p>
              When I was around 15, I realized that one doesn't need to be a wizard to learn about programming and I tried learning myself. Even though I wasn't very successful at that time, I ended up falling in love with the potential of computers, more specifically, games, visual effects, optimization, physics simulations, online applications and, especially, the potential of reaching the whole world with a good idea.
            </p>
          </div>
        </Expandable>
      </div>
    </HomePageSection>
  );
}

export default AboutMeSection;