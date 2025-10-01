import Hero from '../components/Hero'
import TimelineDemo from '../components/Timeline'
import ProjectCards from '../components/ProjectCards'
import GalleryDemo from '../components/Gallery'
import Skills from '../components/Skills'
import ProjectGallery from '../components/ProjectGallery'
import Logos from '../components/Logos'
import Testimonials from '../components/Testimonials'
import Phrase from '../components/Phrase'
import FooterMinimal from '../components/Footer'
import useSmoothScroll from '../hooks/useSmoothScroll'

function Home() {
  // Enable smooth scrolling
  useSmoothScroll();

  return (
    <>
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
    </>
  )
}

export default Home;
