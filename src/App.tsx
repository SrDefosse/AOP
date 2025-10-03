
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Ade1000 from './pages/projects/Ade1000';
import Fluxo from './pages/projects/Fluxo';
import LaSuprema from './pages/projects/LaSuprema';
import Mt3 from './pages/projects/Mt3';
import Plagasa from './pages/projects/Plagasa';
import Stoever from './pages/projects/Stoever';
import Visitapp from './pages/projects/Visitapp';
import DatzBites from './pages/projects/DatzBites';
import './App.css'
import Navbar from './components/layout/Navbar';
import useScrollToTop from './hooks/ScrollToTop';
import useSmoothScroll from './hooks/useSmoothScroll';


function App() {
  useSmoothScroll();
  useScrollToTop();
  
  return (
    <div className="relative min-h-screen">
      {/* Video Background Global */}
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Content Container */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ade1000" element={<Ade1000 />} />
          <Route path="/projects/fluxo" element={<Fluxo />} />
          <Route path="/projects/la-suprema" element={<LaSuprema />} />
          <Route path="/projects/mt3" element={<Mt3 />} />
          <Route path="/projects/plagasa" element={<Plagasa />} />
          <Route path="/projects/stoever" element={<Stoever />} />
          <Route path="/projects/visitapp" element={<Visitapp />} />
          <Route path="/projects/datzbites" element={<DatzBites />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
