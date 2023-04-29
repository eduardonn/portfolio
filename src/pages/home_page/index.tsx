import { Component } from "solid-js";
import AboutMeSection from "./AboutMeSection";
import MainBar from "./MainBar";
import PersonalProjectsSection from "./PersonalProjectsSection";
import OverlayElement from "./OverlayElement";

const Home: Component = () => {
  return (<>
      <div>
        <header>
          <MainBar />
        </header>
        <main>
          <OverlayElement />
          <AboutMeSection />
          <PersonalProjectsSection />
        </main>
        <footer>
          <div class='flex p-2 bg-black text-white text-sm'>
            <span>Created by Eduardo Franke · 2023</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;