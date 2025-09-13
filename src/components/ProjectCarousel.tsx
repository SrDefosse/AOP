import React, { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Interface para definir la estructura de un logo */
interface Logo {
  id: number
  name: string
  src: string
}

/** Lista de logos: pon tus archivos en public/logos/ */
const logos: Logo[] = [
  { id: 1, name: 'Boxer TTL', src: '/logos/logo1.png' },
  { id: 2, name: 'Hot Nuts', src: '/logos/logo2.png' },
  { id: 3, name: 'Bon o Bon', src: '/logos/logo3.png' },
  { id: 4, name: 'Cognizant', src: '/logos/logo4.png' },
  { id: 5, name: 'Ninja', src: '/logos/logo5.png' },
  { id: 6, name: 'Subaru', src: '/logos/logo6.png' },
  { id: 7, name: 'Natura', src: '/logos/logo7.png' },
  { id: 8, name: 'Avon', src: '/logos/logo8.png' },
  { id: 9, name: 'Banco Azteca', src: '/logos/logo9.png' },
  { id: 10, name: 'S Mart', src: '/logos/logo10.png' },
  { id: 11, name: 'Walmart', src: '/logos/logo11.png' },
  { id: 12, name: 'CFE', src: '/logos/logo12.png' },
  { id: 13, name: 'UPAX', src: '/logos/logo13.png' },
  { id: 14, name: 'FOL Mexico', src: '/logos/logo14.png' },
  { id: 15, name: 'Riot Games', src: '/logos/logo15.png' },
  { id: 16, name: 'Elektra', src: '/logos/logo16.png' },
  { id: 17, name: 'Plaza Mexico', src: '/logos/logo17.png' },
]

/** Baraja un array (Fisher–Yates) */
const shuffleArray = <T,>(arr: T[]): T[] => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Distribuye en columnas y rellena hasta igualar longitud máxima */
const distributeLogos = (all: Logo[], cols: number): Logo[][] => {
  const sh = shuffleArray(all)
  const columns: Logo[][] = Array.from({ length: cols }, () => [])
  sh.forEach((logo, i) => columns[i % cols].push(logo))
  const maxLen = Math.max(...columns.map(c => c.length))
  columns.forEach(c => {
    while (c.length < maxLen) {
      c.push(sh[Math.floor(Math.random() * sh.length)])
    }
  })
  return columns
}

/** Props para el componente LogoColumn */
interface LogoColumnProps {
  logos: Logo[]
  index: number
  time: number
}

/** Una sola columna que cicla sus logos cada 2s, con pequeño desfase */
const LogoColumn = React.memo<LogoColumnProps>(({ logos, index, time }) => {
  const interval = 2000
  const offset = index * 200
  const t = (time + offset) % (interval * logos.length)
  const idx = Math.floor(t / interval)
  const logo = logos[idx]

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={logo.id + '-' + idx}
          src={logo.src}
          alt={logo.name}
          className="absolute inset-0 m-auto h-60 w-60 max-h-[100%] max-w-[100%] object-contain md:h-60 md:w-60"
          initial={{ y: '10%', opacity: 0, filter: 'blur(8px)' }}
          animate={{
            y: '0%',
            opacity: 1,
            filter: 'blur(0px)',
            transition: { type: 'spring', stiffness: 300, damping: 20, mass: 1, bounce: 0.2, duration: 0.5 }
          }}
          exit={{
            y: '-20%',
            opacity: 0,
            filter: 'blur(6px)',
            transition: { type: 'tween', ease: 'easeIn', duration: 0.3 }
          }}
        />
      </AnimatePresence>
    </motion.div>
  )
})

/** Props para el componente GradientHeading */
interface GradientHeadingProps {
  children: React.ReactNode
}

/** Heading en gradiente sencillo */
const GradientHeading: React.FC<GradientHeadingProps> = ({ children }) => (
  <div className="inline-block">
    <div className="
      bg-clip-text text-transparent
      bg-gradient-to-t from-neutral-700 to-neutral-800
      dark:from-stone-200 dark:to-neutral-200
      tracking-tight pb-3 text-4xl font-bold
    ">
      {children}
    </div>
  </div>
)

/**
 * Componente completo: heading + carrusel
 * Solo importa y usa <ProjectCarousel /> donde quieras.
 */
export default function ProjectCarousel() {
  const columnCount = 3
  const [sets, setSets] = useState<Logo[][]>([])
  const [time, setTime] = useState<number>(0)

  const tick = useCallback(() => setTime(t => t + 100), [])

  useEffect(() => {
    const id = setInterval(tick, 100)
    return () => clearInterval(id)
  }, [tick])

  useEffect(() => {
    setSets(distributeLogos(logos, columnCount))
  }, [])

  return (
    <div className="flex flex-col justify-center space-y-8 py-24">
      <div className="mx-auto max-w-screen-lg flex flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading>Los mejores ya están con nosotros <br/><br/>¿Y tu?</GradientHeading>
        </div>
        <div className="flex space-x-4">
          {sets.map((col, i) => (
            <LogoColumn key={i} logos={col} index={i} time={time} />
          ))}
        </div>
        
      </div>
    </div>
  )
}
