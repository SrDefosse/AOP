import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export const useSmoothScroll = () => {
  useEffect(() => {
    // Inicializar Lenis solo una vez
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      // Agregar clase al HTML
      document.documentElement.classList.add('lenis', 'lenis-smooth')

      // Request animation frame loop - necesario para que Lenis funcione
      function raf(time: number) {
        lenisInstance?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    return () => {
      // No destruir Lenis al desmontar, lo mantenemos vivo
    }
  }, [])

  return lenisInstance
}

export const getLenisInstance = () => lenisInstance

export default useSmoothScroll

