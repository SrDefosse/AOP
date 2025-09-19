
import './App.css'
import Hero from './components/Hero'
import TimelineDemo from './components/Timeline'
import ProjectCards from './components/ProjectCards'
import GalleryDemo from './components/Gallery'
import Skills from './components/Skills'
import ProjectGallery from './components/ProjectGallery'
import Logos from './components/Logos'
import ProjectContent from './components/ProjectContent'
import Testimonials from './components/Testimonials'
import Phrase from './components/Phrase'
import FooterMinimal from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'

function App() {
  // Enable smooth scrolling
  useSmoothScroll();

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
      <div className="relative z-10">
        <div>
          <Hero />
        </div>
        <div>
          <TimelineDemo />
        </div>
        <div>
          <ProjectCards />
        </div>
        <div>
          <GalleryDemo />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <ProjectGallery />
        </div>
        <div>
          <ProjectContent />
        </div>
        <div>
          <Logos />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <Phrase />
        </div>
        <div>
          <FooterMinimal />
        </div>
      </div>
    </div>
  )
}

export default App
