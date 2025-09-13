import { motion } from "framer-motion";
import { 
  IoTrendingUp, 
  IoColorPalette, 
  IoRocket, 
  IoShareSocial,
  IoArrowForward 
} from "react-icons/io5";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  results: string;
  icon: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Campaña Digital E-commerce",
    description: "Estrategia completa de marketing digital para aumentar ventas online de marca de moda sostenible.",
    category: "Performance Marketing",
    tools: ["Google Ads", "Facebook Ads", "Analytics", "Shopify"],
    results: "+150% ROI",
    icon: <IoTrendingUp className="w-6 h-6" />,
    color: "bg-gradient-to-br from-slate-700 to-slate-800"
  },
  {
    id: 2,
    title: "Rebranding Completo",
    description: "Rediseño de identidad visual y estrategia de marca para startup tecnológica en expansión.",
    category: "Brand Strategy",
    tools: ["Adobe Creative", "Figma", "Notion", "Slack"],
    results: "+200% reconocimiento",
    icon: <IoColorPalette className="w-6 h-6" />,
    color: "bg-gradient-to-br from-gray-700 to-gray-800"
  },
  {
    id: 3,
    title: "Lanzamiento de Producto",
    description: "Coordinación y ejecución de lanzamiento multi-canal para aplicación móvil innovadora.",
    category: "Product Launch",
    tools: ["Asana", "Mailchimp", "LinkedIn", "PR Tools"],
    results: "50K+ usuarios mes 1",
    icon: <IoRocket className="w-6 h-6" />,
    color: "bg-gradient-to-br from-zinc-700 to-zinc-800"
  },
  {
    id: 4,
    title: "Estrategia Social Media",
    description: "Desarrollo de contenido y gestión de redes sociales para cadena de restaurantes premium.",
    category: "Social Media",
    tools: ["Instagram", "TikTok", "Canva", "Buffer"],
    results: "+300% engagement",
    icon: <IoShareSocial className="w-6 h-6" />,
    color: "bg-gradient-to-br from-neutral-700 to-neutral-800"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Header */}
      <div className={`${project.color} p-6 text-white relative`}>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-black/20 rounded-lg">
            {project.icon}
          </div>
          <span className="text-xs font-medium bg-black/20 px-3 py-1 rounded-full">
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
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tools */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
            Herramientas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <motion.button
          whileHover={{ x: 4 }}
          className="group flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Ver detalles 
          <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos <span className="text-spektr-cyan-50">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Tienes un proyecto en mente? Hablemos de cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg"
          >
            Iniciar Proyecto <IoArrowForward className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
