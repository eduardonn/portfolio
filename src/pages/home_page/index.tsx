import { Component } from "solid-js";
import AboutMeSection from "./AboutMeSection";
import MainBar from "./MainBar";
import PersonalProjectsSection from "./PersonalProjectsSection";
import BackgroundElement from "../../global_components/BackgroundElement";
import Footer from "../../global_components/Footer";

const Home: Component = () => {
  return (<>
      <div>
        <header>
          <MainBar />
        </header>
        <main>
          <BackgroundElement />
          <AboutMeSection />
          <PersonalProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;