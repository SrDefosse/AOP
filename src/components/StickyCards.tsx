import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Data for the project cards ---
const projects = [
  {
    title: "ADE1000",
    description: "Advanced management platform designed for efficiency and scalability in modern business environments.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/ade1000"
  },
  {
    title: "FLUXO",
    description: "Dynamic workflow optimization tool that streamlines processes and enhances team productivity.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/fluxo"
  },
  {
    title: "LA SUPREMA",
    description: "Premium solution crafted for excellence, delivering superior performance and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/la-suprema"
  },
  {
    title: "MT.3",
    description: "Next-generation technology platform built with cutting-edge innovation and robust architecture.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/mt3"
  },
  {
    title: "PLAGASA",
    description: "Comprehensive solution focused on reliability and performance optimization for enterprise clients.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/plagasa"
  },
  {
    title: "STOEVER",
    description: "Innovative storage and management system designed for seamless integration and optimal performance.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7a5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/stoever"
  },
  {
    title: "VISITAPP",
    description: "Mobile application that revolutionizes visitor management with intuitive design and powerful features.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/visitapp"
  },
  {
    title: "AMERICAN ONE INSURANCE",
    description: "Comprehensive insurance management platform providing secure and efficient policy administration.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:from-gray-700/10 dark:via-gray-600/15 dark:to-gray-700/10",
    textColor: "text-gray-100",
    route: "/projects/american-one-insurance"
  },
];

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element's intersection status changes.
        setInView(entry.isIntersecting);
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of the item must be visible to trigger the callback
      }
    );

    observer.observe(element);

    // Cleanup function to disconnect the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};


// --- Header Component ---
const AnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation();
    const [pRef, pInView] = useScrollAnimation();

    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
                ref={headerRef as any}
                className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-gray-900 dark:text-white ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                Mis Proyectos
            </h2>
            <p 
                ref={pRef as any}
                className={`text-lg text-gray-600 dark:text-gray-300 mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                Explora mi portafolio de soluciones.
            </p>
        </div>
    );
};

// This is the main component that orchestrates everything.
export function StickyFeatureSection() {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <div className="font-sans">
        {/* The padding-global and container-large classes from your CSS are replicated here */}
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* The main section for the projects */}
          <section className="py-24 md:py-48 flex flex-col items-center">
            
            <AnimatedHeader />

            {/* The container for the sticky cards */}
            <div className="w-full">
              {projects.map((project, index) => (
                <div
                    key={index}
                    // The sticky class makes the card stick to the top of the container with glassmorphism effects
                    className={`${project.bgColor} backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-8 md:p-12 rounded-3xl mb-16 sticky border border-white/20 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30`}
                    // All cards will stick at the same position, creating the stacking effect.
                    style={{ top: '20%' }}
                >
                  {/* Card Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className={project.textColor}>{project.description}</p>
                    
                    {/* Glassmorphism Button */}
                    <div className="flex justify-left mt-6">
                      <button 
                        onClick={() => handleNavigate(project.route)}
                        className="backdrop-blur-md bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-full border border-white/30 dark:border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                      >
                        Ver Proyecto
                      </button>
                    </div>
                  </div>
                  
                  {/* Card Image */}
                  <div className="image-wrapper mt-8 md:mt-0 relative">
                    <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/30 dark:border-white/20 shadow-2xl">
                      <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                          // Simple fallback in case an image fails to load
                          onError={(e: any) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found"; }}
                      />
                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-white/5 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}