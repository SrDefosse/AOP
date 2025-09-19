// PhotoGallery.tsx (Vite + React + Tailwind + Framer Motion)
// Sin "use client", sin next/image, sin cn, sin importar Button.

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Direction = "left" | "right";

interface PhotoConfig {
  id: number;
  order: number;
  x: string;
  y: string;
  zIndex: number;
  direction: Direction;
  src: string;
}

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), animationDelay * 1000);
    const animationTimer = setTimeout(() => setIsLoaded(true), (animationDelay + 0.4) * 1000);
    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const getPhotoConfig = (): { photoSize: number; photos: PhotoConfig[] } => {
    if (windowWidth < 768) {
      // Mobile
      return {
        photoSize: 120,
        photos: [
          { id: 1, order: 0, x: "-100px", y: "0px", zIndex: 50, direction: "left", src: "/projects/don-ade.png" },
          { id: 2, order: 1, x: "-50px", y: "10px", zIndex: 40, direction: "left", src: "/projects/fluxo.png" },
          { id: 3, order: 2, x: "0px", y: "0px", zIndex: 30, direction: "right", src: "/projects/visitapp.png" },
          { id: 4, order: 3, x: "50px", y: "10px", zIndex: 20, direction: "right", src: "/projects/stoever.png" },
          { id: 5, order: 4, x: "100px", y: "0px", zIndex: 10, direction: "left", src: "/projects/brandstoever.png" },
        ],
      };
    } else if (windowWidth < 1024) {
      // Tablet
      return {
        photoSize: 180,
        photos: [
          { id: 1, order: 0, x: "-240px", y: "10px", zIndex: 50, direction: "left", src: "/projects/don-ade.png" },
          { id: 2, order: 1, x: "-120px", y: "20px", zIndex: 40, direction: "left", src: "/projects/fluxo.png" },
          { id: 3, order: 2, x: "0px", y: "5px", zIndex: 30, direction: "right", src: "/projects/visitapp.png" },
          { id: 4, order: 3, x: "120px", y: "15px", zIndex: 20, direction: "right", src: "/projects/stoever.png" },
          { id: 5, order: 4, x: "240px", y: "30px", zIndex: 10, direction: "left", src: "/projects/brandstoever.png" },
        ],
      };
    } else {
      // Desktop
      return {
        photoSize: 220,
        photos: [
          { id: 1, order: 0, x: "-320px", y: "15px", zIndex: 50, direction: "left", src: "/projects/don-ade.png" },
          { id: 2, order: 1, x: "-160px", y: "32px", zIndex: 40, direction: "left", src: "/projects/fluxo.png" },
          { id: 3, order: 2, x: "0px", y: "8px", zIndex: 30, direction: "right", src: "/projects/visitapp.png" },
          { id: 4, order: 3, x: "160px", y: "22px", zIndex: 20, direction: "right", src: "/projects/stoever.png" },
          { id: 5, order: 4, x: "320px", y: "44px", zIndex: 10, direction: "left", src: "/projects/brandstoever.png" },
        ],
      };
    }
  };

  const { photos, photoSize } = getPhotoConfig();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: string; y: string; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  return (
    <div className="mt-20 md:mt-40 relative">
      <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>

      <h3 className="z-20 mx-auto max-w-xs sm:max-w-md md:max-w-2xl justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 px-4">
        Un vistazo a mis <span className="text-rose-500"> Proyectos</span>
      </h3>

      <div className="relative mb-8 h-[250px] md:h-[350px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative" style={{ height: `${photoSize}px`, width: `${photoSize}px` }}>
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{ x: photo.x, y: photo.y, order: photo.order }}
                >
                  <Photo
                    width={photoSize}
                    height={photoSize}
                    src={photo.src}
                    alt="Family photo"
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex w-full justify-center">
        <button
          type="button"
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          Ver proyectos
        </button>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) throw new Error("Min value should be less than max value");
  return Math.random() * (max - min) + min;
}

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const randomRotation = getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  const base =
    "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing";
  const mergedClassName = className ? `${base} ${className}` : base;

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{ scale: 1.1, zIndex: 9999 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={mergedClassName}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <motion.img
          className="rounded-3xl object-cover w-full h-full"
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable={false}
          {...props}
        />
      </div>
    </motion.div>
  );
};

// Default export
export default PhotoGallery;
