import { Component } from 'solid-js';
import { Routes, Route, Router } from '@solidjs/router';
import Home from './pages/home_page';
import MemorizationAppPage from './pages/project_pages/MemorizationApp/MemorizationAppPage';
import AlgorithmVisualizerPage from './pages/project_pages/AlgorithmVisualizerPage/AlgorithmVisualizerPage';
import SnippingToolDigitizerPage from './pages/project_pages/SnippingToolDigitizerPage/SnippingToolDigitizerPage';
import PortfolioPage from './pages/project_pages/PortfolioPage/PortfolioPage';
import CamSurSystemPage from './pages/project_pages/CamSurSystemPage/CamSurSystemPage';

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/projects/memorization-app' component={MemorizationAppPage} />
        <Route path='/projects/3d-sorting-algorithms-visualizer' component={AlgorithmVisualizerPage} />
        <Route path='/projects/snipping-tool-digitizer' component={SnippingToolDigitizerPage} />
        <Route path='/projects/camera_surveillance_system' component={CamSurSystemPage} />
        <Route path='/projects/portfolio' component={PortfolioPage} />
        {/* <Route path='/' component={Home} />
        <For each={projectsList}>{
          project => <Route path={project.link} component={project.component} />
        }</For> */}
      </Routes>
    </Router>
  );
}

export default App;
