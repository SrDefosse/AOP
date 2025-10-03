// Timeline.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline: React.FC<{ data: TimelineEntry[] }> = ({ data }) => {
  const ref = useRef<HTMLDivElement | null>(null); // referencia al contenido del timeline
  const containerRef = useRef<HTMLDivElement | null>(null); // referencia al viewport/containing wrapper
  const [height, setHeight] = useState<number>(0);

  // recalcula la altura cuando cambie el contenido (images cargadas, resize, etc.)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      // queremos la altura total del bloque que contiene las entradas
      setHeight(el.offsetHeight || el.getBoundingClientRect().height || 0);
    };

    update();

    // ResizeObserver para detectar cambios internos (imagenes, texto, etc.)
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    } else {
      // fallback
      window.addEventListener("resize", update);
      window.addEventListener("load", update);
    }

    return () => {
      if (ro) ro.disconnect();
      else {
        window.removeEventListener("resize", update);
        window.removeEventListener("load", update);
      }
    };
  }, [ref]);

  // useScroll ligado al container (viewport del timeline)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset puede ajustarse según el comportamiento deseado
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Un poco de mi experiencia
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        Te presento mi línea del tiempo de mi proceso en este nicho.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            aria-hidden={false}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div>{item.content}</div>
            </div>
          </div>
        ))}

        {/* Linea vertical absoluta */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          aria-hidden
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// ---------------- Demo / usage (todo dentro del mismo archivo) ----------------

export default function TimelineDemo(): React.ReactNode {
  const data: TimelineEntry[] = [
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-2xl font-semibold mb-8">
            FREELANCE WEB DESIGN-PROJECT MANAGER
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Desarrollo de Habilidades. Búsqueda de Clientes. Desarrollo de Sitios Web Responsivos. 
            Optimización para SEO. Comunicación con el Cliente.
          </p>
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 mb-6">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-bold">
              4 WEB DESARROLLADAS
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/timeline/timeline1.webp"
              alt="proyecto web 3"
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/timeline/timeline2.webp"
              alt="proyecto web 4"
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-2xl font-semibold mb-8">
            SINFIN CASA CREATIVA DIRECCIÓN DE VENTAS
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Generación y filtración de leads calificados - Seguimiento de cliente - Seguimiento de proyectos 
            con equipo de trabajo - Gestión de cartera de clientes - Negociación y cierre de ventas - 
            Elaboración de propuestas comerciales - Resolución de problemas - Estrategias marketing B2B.
          </p>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 mb-6">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-bold">
              +$300.000 en ventas para la agencia
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/timeline/timeline3.gif"
              alt="estrategias de ventas"
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/timeline/timeline4.gif"
              alt="gestión de clientes"
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Actualidad",
      content: (
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-2xl font-semibold mb-8">
            SINFIN CASA CREATIVA Project manager-Sales
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Ejecución de campañas multicanal - análisis de performance - planificación de proyectos - 
            Gestión del equipo de trabajo - Seguimiento del progreso - Resolución de problemas - 
            Comunicación creativa - Conceptualización de marcas - Gestión de proyectos 360 - 
            Gestión de proyectos IA & contenido - Automatizaciones IA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-bold">
                +30 Proyectos ejecutados
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-bold">
                +10 Seguimiento de marcas
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/timeline/timeline5.webp"
              alt="gestión de proyectos"
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/timeline/timeline6.webp"
              alt="automatizaciones IA"
              loading="lazy"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
