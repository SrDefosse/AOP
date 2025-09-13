# AOP Architecture Portfolio

Sitio web oficial del portafolio de **AOP** (Arquitectura, Obras y Proyectos), un estudio de arquitectura especializado en proyectos residenciales, comerciales e institucionales. Este sitio web presenta los trabajos, servicios y experiencia del estudio a través de una interfaz moderna e interactiva.

## 🌟 Características

- **Diseño Moderno**: Interfaz elegante con video de fondo y elementos visuales atractivos
- **Animaciones Fluidas**: Implementado con Framer Motion para transiciones suaves
- **Responsive Design**: Totalmente adaptable a dispositivos móviles y desktop
- **Galería Interactiva**: Múltiples secciones para mostrar proyectos arquitectónicos
- **Timeline Dinámico**: Presenta la evolución y experiencia del estudio
- **Testimonios**: Sección dedicada a reseñas y comentarios de clientes
- **Optimizado para Rendimiento**: Construido con Vite para carga rápida

## 🚀 Tecnologías Utilizadas

**Frontend:** React 19 + TypeScript + Vite  
**Estilos:** Tailwind CSS  
**Animaciones:** Framer Motion  
**Iconos:** React Icons

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter ESLint

## 📁 Estructura del Proyecto

```
frontend/
├── public/                 # Archivos públicos (imágenes, videos, etc.)
│   ├── gallery1.png       # Imágenes de la galería
│   ├── hero-bg.webp       # Imagen de fondo del hero
│   └── video-bg.mp4       # Video de fondo
├── src/
│   ├── components/        # Componentes React reutilizables
│   │   ├── Hero.tsx       # Sección principal con animaciones
│   │   ├── Timeline.tsx   # Línea de tiempo del estudio
│   │   ├── ProjectCards.tsx # Tarjetas de proyectos
│   │   ├── Gallery.tsx    # Galería de imágenes
│   │   ├── Skills.tsx     # Habilidades y competencias
│   │   ├── Testimonials.tsx # Testimonios de clientes
│   │   └── Footer.tsx     # Pie de página
│   ├── App.tsx           # Componente principal
│   ├── App.css          # Estilos globales
│   └── main.tsx         # Punto de entrada
├── package.json         # Dependencias y scripts
└── README.md           # Documentación del proyecto
```

## 🎨 Componentes Principales

### Hero
Sección principal con animaciones de texto dinámicas y llamadas a la acción.

### Timeline
Muestra la evolución y experiencia del estudio de arquitectura.

### Project Cards
Presenta los proyectos destacados con diseño de tarjetas interactivas.

### Gallery
Galería visual de proyectos y obras arquitectónicas.

### Skills
Sección que destaca las competencias y especialidades del estudio.

### Testimonials
Reseñas y comentarios de clientes satisfechos.

## 🔧 Personalización

### Cambiar el Video de Fondo
Reemplaza el archivo `public/video-bg.mp4` con tu propio video de fondo.

### Modificar Colores
Los colores se pueden personalizar editando las clases de Tailwind CSS en los componentes.

### Actualizar Contenido
Modifica el contenido de cada componente según las necesidades específicas de tu estudio de arquitectura.

## 🚀 Despliegue

### Construcción para Producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Despliegue en Vercel
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Vite
3. El despliegue se realizará automáticamente

### Despliegue en Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de construcción: `npm run build`
3. Configura el directorio de publicación: `dist`

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📧 Contacto

Para consultas sobre el proyecto o colaboraciones, no dudes en contactarnos.

---

Desarrollado para **AOP - Arquitectura, Obras y Proyectos**