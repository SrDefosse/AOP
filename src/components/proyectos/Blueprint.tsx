// Blueprint.tsx - Plantilla para páginas de proyectos
import { getProjectData } from "./ProjectData";
import ParallaxContent from "./ParallaxContent";
import FeaturedProjects from "./FeaturedProjects";

interface BlueprintProps {
  projectId: string;
}

/**
 * Componente plantilla para mostrar información de un proyecto
 * @param projectId - ID del proyecto a mostrar (debe existir en ProjectData.js)
 */
export default function Blueprint({ projectId }: BlueprintProps) {
  // Obtener datos del proyecto
  const projectData = getProjectData(projectId);

  // Si no existe el proyecto, mostrar mensaje
  if (!projectData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-muted-foreground">
            El proyecto "{projectId}" no existe en la base de datos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Sección 1: Parallax con imágenes del proyecto */}
      <ParallaxContent 
        title={projectData.parallax.title}
        images={projectData.parallax.images}
      />

      {/* Sección 2: Cards con características destacadas */}
      <FeaturedProjects 
        title={projectData.featured.title}
        description={projectData.featured.description}
        cards={projectData.featured.cards}
      />
    </div>
  );
}

