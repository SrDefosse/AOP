import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "./ui/Button";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  results: string;
  logo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Grupo Stoever",
    description: "Actualización y posicionamiento en mercado B2B",
    category: "Rebranding completo - Web design - Video corporativo",
    tools: ["Adobe Creative", "Figma", "Premiere Pro", "After Effects"],
    results: "Posicionamiento B2B",
    logo: "/logos/gs_logo.png",
  },
  {
    id: 2,
    title: "Fluxo",
    description: "Creación de identidad visual y estrategia de marca para startup tecnológica en expansión.",
    category: "Creación de marca - Web design",
    tools: ["Adobe Creative", "Figma", "WordPress", "Photoshop"],
    results: "Identidad consolidada",
    logo: "/logos/fluxo_logo.png",
  },
  {
    id: 3,
    title: "ADE1000",
    description: "Creación de estrategias de marca para mercado B2B buscando el reconocimiento de marca para el usuario.",
    category: "Planeación de estrategias - Seguimiento de diseño web - Estrategias 360",
    tools: ["Analytics", "Figma", "Notion", "Google Ads"],
    results: "Reconocimiento B2B",
    logo: "/logos/ade1000_logo.png",
  },
  {
    id: 4,
    title: "VISITAPP",
    description: "Crear formalidad digital para la empresa, posicionándola como líder en el mercado con estrategias digitales.",
    category: "Re-branding - Web design - Campañas mensuales de contenido",
    tools: ["Adobe Creative", "WordPress", "Social Media", "Canva"],
    results: "Liderazgo digital",
    logo: "/logos/visitapp_logo.png",
  }
];

// Map project titles to their routes
const getProjectRoute = (title: string): string => {
  const routes: { [key: string]: string } = {
    "Grupo Stoever": "/projects/Stoever",
    "Fluxo": "/projects/Fluxo",
    "ADE1000": "/projects/Ade1000",
    "VISITAPP": "/projects/Visitapp",
  };
  return routes[title] || "/projects";
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl hover:bg-white/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6 text-white relative border-b border-white/30">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-neutral-700/20 backdrop-blur-xl rounded-lg border border-white/20">
            <img 
              src={project.logo} 
              alt={`${project.title} logo`}
              className="w-16 h-16 object-contain"
            />
          </div>
          <span className="text-xs font-medium bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full border border-white/40">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <div className="text-right">
          <span className="text-2xl font-bold">{project.results}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-200 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tools */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Herramientas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className="px-2 py-1 bg-white/10 text-gray-200 text-xs rounded-md font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <Button
          href={getProjectRoute(project.title)}
          variant="primary"
          size="sm"
          icon={<IoArrowForward className="w-4 h-4" />}
        >
          Ver proyecto
        </Button>
      </div>
    </motion.div>
  );
};

export default function ProjectCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos <span className="text-spektr-cyan-50">Destacados</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Una selección de campañas y proyectos que han generado resultados excepcionales 
            para marcas innovadoras y empresas en crecimiento.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            variant="secondary"
            size="lg"
            icon={<IoArrowForward className="w-5 h-5" />}
            className="mx-auto"
          >
            Contáctame
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
