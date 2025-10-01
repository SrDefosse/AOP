// ProjectData.ts - Datos de todos los proyectos

interface Image {
  src: string;
  alt: string;
}

interface Card {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  body: string;
}

interface ProjectData {
  id: string;
  name: string;
  parallax: {
    title: string;
    images: Image[];
  };
  featured: {
    title: string;
    description: string;
    cards: Card[];
  };
}

type ProjectsDataType = Record<string, ProjectData>;

export const projectsData: ProjectsDataType = {
  visitapp: {
    id: "visitapp",
    name: "Visitapp",
    // Datos para ParallaxContent
    parallax: {
      title: "Visitapp - Control de Visitas",
      images: [
        { src: "/projects/visitapp.png", alt: "Visitapp dashboard" },
        { src: "/gallery/gallery1.png", alt: "Visitapp interface 1" },
        { src: "/gallery/gallery2.png", alt: "Visitapp interface 2" },
        { src: "/gallery/gallery3.png", alt: "Visitapp interface 3" },
        { src: "/gallery/gallery4.png", alt: "Visitapp interface 4" },
      ],
    },
    // Datos para FeaturedProjects
    featured: {
      title: "Características Destacadas",
      description: "Sistema integral de gestión de visitas con tecnología de vanguardia.",
      cards: [
        {
          id: 1,
          title: "Control de Acceso",
          subtitle: "Gestión inteligente de visitantes con registro digital.",
          img: "/projects/visitapp.png",
          body: "Sistema completo de registro, validación y seguimiento de visitas en tiempo real.",
        },
        {
          id: 2,
          title: "Dashboard Interactivo",
          subtitle: "Panel de control con métricas y análisis detallados.",
          img: "/gallery/gallery1.png",
          body: "Visualización de estadísticas, reportes personalizados y exportación de datos.",
        },
        {
          id: 3,
          title: "Seguridad Avanzada",
          subtitle: "Protección de datos y cumplimiento normativo.",
          img: "/gallery/gallery2.png",
          body: "Autenticación robusta, encriptación de datos y auditoría completa de accesos.",
        },
      ],
    },
  },

  fluxo: {
    id: "fluxo",
    name: "Fluxo",
    parallax: {
      title: "Fluxo - Gestión de Flujos",
      images: [
        { src: "/projects/fluxo.png", alt: "Fluxo main" },
        { src: "/gallery/gallery3.png", alt: "Fluxo feature 1" },
        { src: "/gallery/gallery4.png", alt: "Fluxo feature 2" },
        { src: "/gallery/gallery1.png", alt: "Fluxo feature 3" },
        { src: "/gallery/gallery5.png", alt: "Fluxo feature 4" },
      ],
    },
    featured: {
      title: "Funcionalidades Principales",
      description: "Optimiza tus procesos con automatización inteligente.",
      cards: [
        {
          id: 1,
          title: "Automatización de Procesos",
          subtitle: "Flujos de trabajo configurables y eficientes.",
          img: "/projects/fluxo.png",
          body: "Diseña, implementa y monitorea flujos de trabajo personalizados sin código.",
        },
        {
          id: 2,
          title: "Integraciones",
          subtitle: "Conecta todas tus herramientas en un solo lugar.",
          img: "/gallery/gallery3.png",
          body: "APIs robustas y conectores preconfigurados para las principales plataformas.",
        },
        {
          id: 3,
          title: "Analítica en Tiempo Real",
          subtitle: "Monitoreo continuo del rendimiento de tus flujos.",
          img: "/gallery/gallery4.png",
          body: "Dashboards actualizados al instante con métricas clave y alertas proactivas.",
        },
      ],
    },
  },

  stoever: {
    id: "stoever",
    name: "Stoever",
    parallax: {
      title: "Stoever - Branding & Design",
      images: [
        { src: "/projects/stoever.png", alt: "Stoever main" },
        { src: "/projects/brandstoever.png", alt: "Stoever branding" },
        { src: "/gallery/gallery5.png", alt: "Stoever design 1" },
        { src: "/gallery/gallery6.png", alt: "Stoever design 2" },
        { src: "/gallery/gallery1.png", alt: "Stoever design 3" },
      ],
    },
    featured: {
      title: "Soluciones Creativas",
      description: "Diseño y desarrollo web con identidad única.",
      cards: [
        {
          id: 1,
          title: "Diseño Web Moderno",
          subtitle: "Sitios web responsivos y de alto impacto visual.",
          img: "/projects/stoever.png",
          body: "Diseños personalizados que reflejan la esencia de tu marca con experiencia excepcional.",
        },
        {
          id: 2,
          title: "Identidad de Marca",
          subtitle: "Desarrollo completo de branding corporativo.",
          img: "/projects/brandstoever.png",
          body: "Logos, guías de estilo y materiales visuales coherentes para tu negocio.",
        },
        {
          id: 3,
          title: "UX/UI Optimizado",
          subtitle: "Interfaces intuitivas centradas en el usuario.",
          img: "/gallery/gallery5.png",
          body: "Investigación de usuarios, prototipos y testing para experiencias perfectas.",
        },
      ],
    },
  },

  ade1000: {
    id: "ade1000",
    name: "ADE 1000",
    parallax: {
      title: "ADE 1000 - Don Ade",
      images: [
        { src: "/projects/don-ade.png", alt: "Don Ade main" },
        { src: "/gallery/gallery2.png", alt: "ADE feature 1" },
        { src: "/gallery/gallery3.png", alt: "ADE feature 2" },
        { src: "/gallery/gallery4.png", alt: "ADE feature 3" },
        { src: "/gallery/gallery5.png", alt: "ADE feature 4" },
      ],
    },
    featured: {
      title: "Características del Sistema",
      description: "Plataforma digital para gestión gastronómica.",
      cards: [
        {
          id: 1,
          title: "Sistema de Pedidos",
          subtitle: "Gestión eficiente de órdenes en línea.",
          img: "/projects/don-ade.png",
          body: "Procesamiento rápido de pedidos con actualizaciones en tiempo real para clientes.",
        },
        {
          id: 2,
          title: "Menú Digital",
          subtitle: "Catálogo interactivo y personalizable.",
          img: "/gallery/gallery2.png",
          body: "Presentación visual de productos con descripciones, precios y disponibilidad.",
        },
        {
          id: 3,
          title: "Gestión de Inventario",
          subtitle: "Control preciso de stock y productos.",
          img: "/gallery/gallery3.png",
          body: "Alertas automáticas de bajo stock y reportes de consumo por período.",
        },
      ],
    },
  },

  lasuprema: {
    id: "lasuprema",
    name: "La Suprema",
    parallax: {
      title: "La Suprema - Excelencia Premium",
      images: [
        { src: "/gallery/gallery1.png", alt: "La Suprema main" },
        { src: "/gallery/gallery2.png", alt: "La Suprema feature 1" },
        { src: "/gallery/gallery3.png", alt: "La Suprema feature 2" },
        { src: "/gallery/gallery4.png", alt: "La Suprema feature 3" },
        { src: "/gallery/gallery5.png", alt: "La Suprema feature 4" },
      ],
    },
    featured: {
      title: "Soluciones Premium",
      description: "Experiencia superior con rendimiento excepcional.",
      cards: [
        {
          id: 1,
          title: "Rendimiento Superior",
          subtitle: "Optimización y velocidad sin compromisos.",
          img: "/gallery/gallery1.png",
          body: "Arquitectura robusta diseñada para máximo rendimiento y escalabilidad.",
        },
        {
          id: 2,
          title: "Experiencia Premium",
          subtitle: "Interfaz elegante y fluida.",
          img: "/gallery/gallery2.png",
          body: "Diseño cuidado hasta el último detalle para usuarios exigentes.",
        },
        {
          id: 3,
          title: "Soporte Exclusivo",
          subtitle: "Atención personalizada y prioritaria.",
          img: "/gallery/gallery3.png",
          body: "Equipo dedicado disponible 24/7 para resolver cualquier necesidad.",
        },
      ],
    },
  },

  mt3: {
    id: "mt3",
    name: "MT.3",
    parallax: {
      title: "MT.3 - Tecnología de Siguiente Generación",
      images: [
        { src: "/gallery/gallery4.png", alt: "MT.3 main" },
        { src: "/gallery/gallery5.png", alt: "MT.3 feature 1" },
        { src: "/gallery/gallery6.png", alt: "MT.3 feature 2" },
        { src: "/gallery/gallery1.png", alt: "MT.3 feature 3" },
        { src: "/gallery/gallery2.png", alt: "MT.3 feature 4" }
      ],
    },
    featured: {
      title: "Innovación Tecnológica",
      description: "Plataforma construida con arquitectura de vanguardia.",
      cards: [
        {
          id: 1,
          title: "Arquitectura Moderna",
          subtitle: "Stack tecnológico de última generación.",
          img: "/gallery/gallery4.png",
          body: "Microservicios, contenedores y despliegue continuo para máxima agilidad.",
        },
        {
          id: 2,
          title: "Escalabilidad Infinita",
          subtitle: "Crece sin límites con tu negocio.",
          img: "/gallery/gallery5.png",
          body: "Infraestructura elástica que se adapta automáticamente a la demanda.",
        },
        {
          id: 3,
          title: "Seguridad Avanzada",
          subtitle: "Protección de grado empresarial.",
          img: "/gallery/gallery6.png",
          body: "Encriptación end-to-end y cumplimiento con estándares internacionales.",
        },
      ],
    },
  },

  plagasa: {
    id: "plagasa",
    name: "Plagasa",
    parallax: {
      title: "Plagasa - Confiabilidad Empresarial",
      images: [
        { src: "/gallery/gallery3.png", alt: "Plagasa main" },
        { src: "/gallery/gallery4.png", alt: "Plagasa feature 1" },
        { src: "/gallery/gallery5.png", alt: "Plagasa feature 2" },
        { src: "/gallery/gallery6.png", alt: "Plagasa feature 3" },
        { src: "/gallery/gallery1.png", alt: "Plagasa feature 4" }
      ],
    },
    featured: {
      title: "Soluciones Empresariales",
      description: "Optimización de rendimiento para clientes corporativos.",
      cards: [
        {
          id: 1,
          title: "Gestión Integral",
          subtitle: "Control completo de operaciones empresariales.",
          img: "/gallery/gallery3.png",
          body: "Sistema unificado para administrar todos los procesos de tu empresa.",
        },
        {
          id: 2,
          title: "Reportes Avanzados",
          subtitle: "Análisis profundo y visualización de datos.",
          img: "/gallery/gallery4.png",
          body: "Dashboards personalizables con métricas clave y exportación automatizada.",
        },
        {
          id: 3,
          title: "Integración Perfecta",
          subtitle: "Conecta con tus herramientas existentes.",
          img: "/gallery/gallery5.png",
          body: "APIs robustas y conectores predefinidos para ERP, CRM y más.",
        },
      ],
    },
  },

  americanoneinsurance: {
    id: "americanoneinsurance",
    name: "American One Insurance",
    parallax: {
      title: "American One Insurance - Gestión Segura",
      images: [
        { src: "/gallery/gallery6.png", alt: "American One Insurance main" },
        { src: "/gallery/gallery1.png", alt: "American One Insurance feature 1" },
        { src: "/gallery/gallery2.png", alt: "American One Insurance feature 2" },
        { src: "/gallery/gallery3.png", alt: "American One Insurance feature 3" },
        { src: "/gallery/gallery4.png", alt: "American One Insurance feature 4" }
      ],
    },
    featured: {
      title: "Gestión de Seguros",
      description: "Plataforma segura y eficiente para administración de pólizas.",
      cards: [
        {
          id: 1,
          title: "Administración de Pólizas",
          subtitle: "Gestión completa del ciclo de vida de seguros.",
          img: "/gallery/gallery6.png",
          body: "Desde cotización hasta renovación con seguimiento automatizado de cada etapa.",
        },
        {
          id: 2,
          title: "Portal del Cliente",
          subtitle: "Acceso 24/7 para asegurados.",
          img: "/gallery/gallery1.png",
          body: "Los clientes pueden consultar pólizas, hacer reclamos y gestionar pagos online.",
        },
        {
          id: 3,
          title: "Cumplimiento Normativo",
          subtitle: "Seguridad y regulación garantizada.",
          img: "/gallery/gallery2.png",
          body: "Cumplimiento total con regulaciones del sector asegurador y protección de datos.",
        },
      ],
    },
  },
};

// Función helper para obtener datos de un proyecto
export const getProjectData = (projectId: string): ProjectData | null => {
  return projectsData[projectId] || null;
};

// Lista de todos los IDs de proyectos disponibles
export const availableProjects = Object.keys(projectsData);

