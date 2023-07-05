import { Component } from "solid-js";
import AboutMeSection from "./AboutMeSection";
import MainBar from "./MainBar";
import PersonalProjectsSection from "./PersonalProjectsSection";
import BackgroundElement from "../../common_components/BackgroundElement";
import Footer from "../../common_components/Footer";
import ScrollTopButton from "../../common_components/ScrollTopButton";

const Home: Component = () => {
  return (<>
      <BackgroundElement />
      <header>
        <MainBar />
      </header>
      <main>
        <AboutMeSection />
        <PersonalProjectsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;