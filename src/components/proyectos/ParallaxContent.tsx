// ParallaxContent.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ImageData = {
  src: string;
  alt: string;
};

type ParallaxContentProps = {
  title?: string;
  images?: ImageData[];
};

export default function ParallaxContent({ 
  title = "Scroll Down for Zoom Parallax",
  images = []
}: ParallaxContentProps) {
  // Imágenes por defecto si no se proporcionan
  const defaultImages: ImageData[] = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Modern architecture building",
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Urban cityscape at sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Abstract geometric pattern",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Mountain landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Minimalist design elements",
    }
  ];

  // Asegurarse de usar solo 5 imágenes máximo
  const displayImages = images.length > 0 ? images.slice(0, 5) : defaultImages;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Escalas para el efecto de zoom (solo 5 imágenes)
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scales = [scale4, scale5, scale6, scale7, scale8];

  return (
    <main className="min-h-screen w-full">
      {/* Sección superior (intro) */}
      <div className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        {/* Spotlight radial sencillo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full blur-[30px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.08), transparent 50%)",
          }}
        />
        <h1 className="text-center text-4xl font-bold">
          {title}
        </h1>
      </div>

      {/* Parallax */}
      <div ref={container} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {displayImages.map(({ src, alt }, index) => {
            const scale = scales[index % scales.length];
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className={[
                  "absolute top-0 flex h-full w-full items-center justify-center",
                  index === 1
                    ? "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]"
                    : "",
                  index === 2
                    ? "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]"
                    : "",
                  index === 3
                    ? "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]"
                    : "",
                  index === 4
                    ? "[&>div]:!top-[27.5vh] [&>div]:!left-[0vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]"
                    : "",
                  index === 5
                    ? "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]"
                    : "",
                ].join(" ")}
              >
                <div className="relative h-[25vh] w-[25vw]">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={alt || `Parallax image ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Espaciado inferior para cerrar el scroll */}
      <div className="h-[50vh]" />
    </main>
  );
}
