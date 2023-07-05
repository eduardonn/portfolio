import { Component } from 'solid-js';
import { Routes, Route, Router } from '@solidjs/router';
import Home from './pages/home_page';
import RememoPage from './pages/project_pages/RememoPage/RememoPage';
import AlgorithmVisualizerPage from './pages/project_pages/SortingAlgorithmsVisualizerPage/SortingAlgorithmsVisualizerPage';
import ScreenshotDigitizerPage from './pages/project_pages/ScreenshotDigitizerPage/ScreenshotDigitizerPage';
import PortfolioPage from './pages/project_pages/PortfolioPage/PortfolioPage';
import CamSurSystemPage from './pages/project_pages/CamSurSystemPage/CamSurSystemPage';
import ScrollTopButton from './common_components/ScrollTopButton';

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/projects/rememo' component={RememoPage} />
          <Route path='/projects/3d-sorting-algorithms-visualizer' component={AlgorithmVisualizerPage} />
          <Route path='/projects/screenshot-digitizer' component={ScreenshotDigitizerPage} />
          <Route path='/projects/camera_surveillance_system' component={CamSurSystemPage} />
          <Route path='/projects/portfolio' component={PortfolioPage} />
        </Routes>
      </Router>
      <ScrollTopButton />
    </>
  );
}

export default App;
