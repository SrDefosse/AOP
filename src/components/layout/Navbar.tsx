import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

// Hook para detectar la dirección del scroll
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-transform duration-300 ease-in-out ${
      scrollDirection === 'down' ? '-translate-y-full top-4' : 'translate-y-0 top-4'
    }`}>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            AOP
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300">
              Inicio
            </Link>
            <Link to="/projects" className="text-white hover:text-gray-300 transition-colors duration-300">
              Proyectos
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/20 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              Contacto
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center p-4 space-y-4">
          <Link to="/" onClick={toggleMenu} className="text-white w-full text-center py-2">
            Inicio
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="text-white w-full text-center py-2">
            Proyectos
          </Link>
          <Link 
            to="/contact"
            onClick={toggleMenu}
            className="bg-white/20 text-white font-semibold w-full text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
