// Testimonials.tsx
// Vite + React + Tailwind + motion/react
// Uso: import Testimonials from "./Testimonials";  <Testimonials />

import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Nos prometió claridad y nos entregó resultados. El sitio web pasó de 'bonito' a convertir: más leads calificados y mensajes de clientes que entienden mejor lo que hacemos.",
    name: "Gerardo",
    role: "CEO, Grupo Stoever",
  },
  {
    text: "Más que un proveedor, fue un aliado estratégico. No solo nos entregó un video espectacular, sino que también nos dio un plan para sacarle el máximo provecho. El video corporativo abrió puertas con tres clientes clave.",
    name: "Javier",
    role: "CEO, MOVICARGA",
  },
  {
    text: "Su energía creativa y su disciplina para los procesos nos dieron confianza. Sabíamos que el proyecto estaba en buenas manos.",
    name: "Monica",
    role: "Directora Creativa, ADE1000",
  },
  {
    text: "Alfonso logró que un proyecto de rebranding se convirtiera en un punto de unión para toda la empresa. La gente se siente orgullosa de la nueva marca.",
    name: "Gerardo",
    role: "CFO, Grupo Stoever",
  },
  {
    text: "Gracias a su proceso, nuestro video corporativo cuenta la historia de la empresa de forma emocionante y clara. Hoy lo usamos como carta de presentación global.",
    name: "Silvano",
    role: "CEO, COTEXCA",
  },
  {
    text: "En vez de imponer ideas, nos acompañó a descubrir la esencia de la marca. Eso le dio autenticidad al resultado final del branding.",
    name: "Ivana",
    role: "Fundadora, FLUXO CAPITAL",
  },
  {
    text: "El proceso fue tan claro que no sentimos estrés. Supimos en cada etapa qué venía y cómo se vería. La web y el contenido salieron impecables.",
    name: "Carlo",
    role: "Arquitecto, MT3 ARQUITECTOS",
  },
  {
    text: "Nos ayudó a entender que el diseño no es solo estética, es estrategia. Nuestro sitio ahora comunica con propósito.",
    name: "Ale",
    role: "Fundadora, BRAND OF TALENT",
  },
  {
    text: "Escucha, entiende y propone. No te entrega un trabajo cualquiera, te entrega algo que tiene sentido para tu negocio.",
    name: "Eduardo",
    role: "Fundador, PLAGASA",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border shadow-lg max-w-xs w-full"
                key={`${index}-${i}`}
              >
                <div className="mb-6 text-sm italic">{text}</div>
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    — {name}
                  </div>
                  <div className="leading-5 opacity-60 tracking-tight">
                    {role}
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >

          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Lo que dicen de mi
          </h2>
        </motion.div>

        <div className="text-white flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
