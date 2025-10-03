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
        { src: "/projects/visitapp/P1.png", alt: "Visitapp dashboard" },
        { src: "/projects/visitapp/P2.png", alt: "Visitapp interface 1" },
        { src: "/projects/visitapp/P3.png", alt: "Visitapp interface 2" },
        { src: "/projects/visitapp/P4.png", alt: "Visitapp interface 3" },
        { src: "/projects/visitapp/P5.png", alt: "Visitapp interface 4" },
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
          img: "/projects/visitapp/PP1.png",
          body: "Sistema completo de registro, validación y seguimiento de visitas en tiempo real.",
        },
        {
          id: 2,
          title: "Dashboard Interactivo",
          subtitle: "Panel de control con métricas y análisis detallados.",
          img: "/projects/visitapp/PP2.png",
          body: "Visualización de estadísticas, reportes personalizados y exportación de datos.",
        },
        {
          id: 3,
          title: "Seguridad Avanzada",
          subtitle: "Protección de datos y cumplimiento normativo.",
          img: "/projects/visitapp/PP3.png",
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
        { src: "/projects/fluxo/P1.png", alt: "Fluxo main" },
        { src: "/projects/fluxo/P2.png", alt: "Fluxo feature 1" },
        { src: "/projects/fluxo/P3.png", alt: "Fluxo feature 2" },
        { src: "/projects/fluxo/P4.png", alt: "Fluxo feature 3" },
        { src: "/projects/fluxo/P5.png", alt: "Fluxo feature 4" },
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
          img: "/projects/fluxo/PP1.png",
          body: "Diseña, implementa y monitorea flujos de trabajo personalizados sin código.",
        },
        {
          id: 2,
          title: "Integraciones",
          subtitle: "Conecta todas tus herramientas en un solo lugar.",
          img: "/projects/fluxo/PP2.png",
          body: "APIs robustas y conectores preconfigurados para las principales plataformas.",
        },
        {
          id: 3,
          title: "Analítica en Tiempo Real",
          subtitle: "Monitoreo continuo del rendimiento de tus flujos.",
          img: "/projects/fluxo/PP3.png",
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
        { src: "/projects/stoever/P1.png", alt: "Stoever main" },
        { src: "/projects/stoever/P2.png", alt: "Stoever branding" },
        { src: "/projects/stoever/P3.png", alt: "Stoever design 1" },
        { src: "/projects/stoever/P4.png", alt: "Stoever design 2" },
        { src: "/projects/stoever/P5.png", alt: "Stoever design 3" },
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
          img: "/projects/stoever/PP1.gif",
          body: "Diseños personalizados que reflejan la esencia de tu marca con experiencia excepcional.",
        },
        {
          id: 2,
          title: "Identidad de Marca",
          subtitle: "Desarrollo completo de branding corporativo.",
          img: "/projects/stoever/PP2.gif",
          body: "Logos, guías de estilo y materiales visuales coherentes para tu negocio.",
        },
        {
          id: 3,
          title: "UX/UI Optimizado",
          subtitle: "Interfaces intuitivas centradas en el usuario.",
          img: "/projects/stoever/PP3.gif",
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
        { src: "/projects/ade1000/P1.png", alt: "Don Ade main" },
        { src: "/projects/ade1000/P2.png", alt: "ADE feature 1" },
        { src: "/projects/ade1000/P3.png", alt: "ADE feature 2" },
        { src: "/projects/ade1000/P4.png", alt: "ADE feature 3" },
        { src: "/projects/ade1000/P5.png", alt: "ADE feature 4" },
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
          img: "/projects/ade1000/PP1.png",
          body: "Procesamiento rápido de pedidos con actualizaciones en tiempo real para clientes.",
        },
        {
          id: 2,
          title: "Menú Digital",
          subtitle: "Catálogo interactivo y personalizable.",
          img: "/projects/ade1000/PP2.png",
          body: "Presentación visual de productos con descripciones, precios y disponibilidad.",
        },
        {
          id: 3,
          title: "Gestión de Inventario",
          subtitle: "Control preciso de stock y productos.",
          img: "/projects/ade1000/PP3.png",
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
        { src: "/projects/lasuprema/P1.png", alt: "La Suprema main" },
        { src: "/projects/lasuprema/P2.png", alt: "La Suprema feature 1" },
        { src: "/projects/lasuprema/P3.png", alt: "La Suprema feature 2" },
        { src: "/projects/lasuprema/P4.png", alt: "La Suprema feature 3" },
        { src: "/projects/lasuprema/P5.png", alt: "La Suprema feature 4" },
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
          img: "/projects/lasuprema/PP1.png",
          body: "Arquitectura robusta diseñada para máximo rendimiento y escalabilidad.",
        },
        {
          id: 2,
          title: "Experiencia Premium",
          subtitle: "Interfaz elegante y fluida.",
          img: "/projects/lasuprema/PP2.png",
          body: "Diseño cuidado hasta el último detalle para usuarios exigentes.",
        },
        {
          id: 3,
          title: "Soporte Exclusivo",
          subtitle: "Atención personalizada y prioritaria.",
          img: "/projects/lasuprema/PP3.png",
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
        { src: "/projects/mt3/P1.png", alt: "MT.3 main" },
        { src: "/projects/mt3/P2.png", alt: "MT.3 feature 1" },
        { src: "/projects/mt3/P3.png", alt: "MT.3 feature 2" },
        { src: "/projects/mt3/P4.png", alt: "MT.3 feature 3" },
        { src: "/projects/mt3/P5.png", alt: "MT.3 feature 4" }
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
          img: "/projects/mt3/PP1.png",
          body: "Microservicios, contenedores y despliegue continuo para máxima agilidad.",
        },
        {
          id: 2,
          title: "Escalabilidad Infinita",
          subtitle: "Crece sin límites con tu negocio.",
          img: "/projects/mt3/PP2.png",
          body: "Infraestructura elástica que se adapta automáticamente a la demanda.",
        },
        {
          id: 3,
          title: "Seguridad Avanzada",
          subtitle: "Protección de grado empresarial.",
          img: "/projects/mt3/PP3.png",
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
        { src: "/projects/plagasa/P1.png", alt: "Plagasa main" },
        { src: "/projects/plagasa/P2.png", alt: "Plagasa feature 1" },
        { src: "/projects/plagasa/P3.png", alt: "Plagasa feature 2" },
        { src: "/projects/plagasa/P4.png", alt: "Plagasa feature 3" },
        { src: "/projects/plagasa/P5.png", alt: "Plagasa feature 4" }
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
          img: "/projects/plagasa/PP1.png",
          body: "Sistema unificado para administrar todos los procesos de tu empresa.",
        },
        {
          id: 2,
          title: "Reportes Avanzados",
          subtitle: "Análisis profundo y visualización de datos.",
          img: "/projects/plagasa/PP2.png",
          body: "Dashboards personalizables con métricas clave y exportación automatizada.",
        },
        {
          id: 3,
          title: "Integración Perfecta",
          subtitle: "Conecta con tus herramientas existentes.",
          img: "/projects/plagasa/PP3.png",
          body: "APIs robustas y conectores predefinidos para ERP, CRM y más.",
        },
      ],
    },
  },

  datzbites: {
    id: "datzbites",
    name: "Datz Bites",
    parallax: {
      title: "Datz Bites - Experiencia Gastronómica",
      images: [
        { src: "/projects/datzbites/P1.png", alt: "Datz Bites main" },
        { src: "/projects/datzbites/P2.png", alt: "Datz Bites feature 1" },
        { src: "/projects/datzbites/P3.png", alt: "Datz Bites feature 2" },
        { src: "/projects/datzbites/P4.png", alt: "Datz Bites feature 3" },
        { src: "/projects/datzbites/P5.png", alt: "Datz Bites feature 4" }
      ],
    },
    featured: {
      title: "Soluciones Gastronómicas",
      description: "Plataforma digital para experiencias culinarias excepcionales.",
      cards: [
        {
          id: 1,
          title: "Menú Digital Interactivo",
          subtitle: "Experiencia visual y funcional de primera clase.",
          img: "/projects/datzbites/PP1.png",
          body: "Presentación atractiva de platos con descripciones detalladas y fotografías de alta calidad.",
        },
        {
          id: 2,
          title: "Sistema de Pedidos",
          subtitle: "Proceso ágil y eficiente.",
          img: "/projects/datzbites/PP2.png",
          body: "Gestión optimizada de pedidos con actualizaciones en tiempo real y seguimiento completo.",
        },
        {
          id: 3,
          title: "Experiencia de Usuario",
          subtitle: "Diseño centrado en el cliente.",
          img: "/projects/datzbites/PP3.png",
          body: "Interfaz intuitiva y moderna que facilita la navegación y mejora la satisfacción del cliente.",
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

