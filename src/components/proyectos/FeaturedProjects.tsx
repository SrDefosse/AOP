// FeaturedProjects.tsx
import { useState } from "react";
import { motion } from "framer-motion";

type CardItem = {
  id: number;
  title: string;
  subtitle: string;
  img: string; 
  body: string;
};

type FeaturedProjectsProps = {
  title?: string;
  description?: string;
  cards?: CardItem[];
};

const DEFAULT_CARDS: CardItem[] = [
  {
    id: 1,
    title: "Machine Learning Automation",
    subtitle:
      "Self-improving algorithms that learn from data patterns to automate complex tasks.",
    img: "/images/project-ml.jpg",
    body:
      "Pipelines de datos, modelos desplegados y monitoreo de desempeño para soluciones listas para producción.",
  },
  {
    id: 2,
    title: "Innovation Meets Simplicity",
    subtitle:
      "Designing cutting-edge experiences with clear value and minimal complexity.",
    img: "/images/project-ui.jpg",
    body:
      "Interfaces accesibles, micro-interacciones fluidas y foco en conversión con medición continua.",
  },
  {
    id: 3,
    title: "Analytics & Insights",
    subtitle:
      "Real-time dashboards to track metrics, uncover trends, and act fast.",
    img: "/images/project-analytics.jpg",
    body:
      "Instrumentación end-to-end: eventos, ETL, almacenaje y visualización con alertas inteligentes.",
  },
];

export default function FeaturedProjects({ 
  title = "Featured Projects",
  description = "Explore our collection of innovative solutions and cutting-edge technologies designed to transform your business.",
  cards = DEFAULT_CARDS
}: FeaturedProjectsProps) {
  const displayCards = cards.length > 0 ? cards : DEFAULT_CARDS;

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground/90 text-base leading-relaxed">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayCards.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente individual para cada card con su propio estado de hover
function ProjectCard({ item }: { item: CardItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layoutId={`card-${item.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      style={{
        transformOrigin: "center center",
      }}
    >
      <motion.div
        animate={
          isHovered
            ? { y: -8, scale: 1.02 }
            : { y: 0, scale: 1 }
        }
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          mass: 0.5
        }}
        className="flex flex-col h-full"
      >
        {/* Media */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <motion.img
            src={item.img}
            alt={item.title}
            className="h-56 w-full object-cover sm:h-60 lg:h-64"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            animate={isHovered ? { opacity: 0.8 } : { opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Header */}
        <div className="p-5 flex-grow">
          <h3 className="text-lg font-semibold leading-tight text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-white/80">
            {item.subtitle}
          </p>
        </div>

        {/* Reveal on hover: appears BELOW header (debajo) */}
        <motion.div
          className="px-5 pb-5"
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={
            isHovered
              ? { maxHeight: 200, opacity: 1 }
              : { maxHeight: 0, opacity: 0 }
          }
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ overflow: "hidden" }}
        >
          <div className="pt-2 border-t border-white/10">
            <p className="text-sm leading-relaxed text-white/90">
              {item.body}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={
          isHovered
            ? { boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)" }
            : { boxShadow: "0 0 0 rgba(0,0,0,0), 0 0 0 1px rgba(255,255,255,0.05)" }
        }
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}