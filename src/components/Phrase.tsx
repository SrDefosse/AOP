// Phrase.tsx
// Uso: import Phrase from "./Phrase";  <Phrase text="Design creates culture." speed={16} />

import React from "react";

interface PhraseProps {
  text?: string;
  className?: string;
  /** Segundos por ciclo del marquee */
  speed?: number;
}

export default function Phrase({
  text = "Design creates culture.",
  className = "",
  speed = 16,
}: PhraseProps) {
  // CSS variable para controlar la velocidad desde props
  const wrapperStyle = { ["--speed" as any]: `${speed}s` } as React.CSSProperties;

  return (
    <div
      className={`relative w-full h-32 text-8xl flex items-center justify-center overflow-hidden select-none bg-transparent ${className}`}
      style={wrapperStyle}
    >
      {/* Capa de "glow" sutil (misma frase, desenfocada) */}
      <p
        aria-hidden="true"
        className="absolute min-w-full whitespace-nowrap phrase-animate phrase-mask text-white pointer-events-none"
        style={{ filter: "blur(0.08em)", opacity: 0.85 }}
      >
        {text}
      </p>

      {/* Capa nítida encima */}
      <p className="absolute min-w-full whitespace-nowrap phrase-animate phrase-mask text-white">
        {text}
      </p>

      {/* CSS interno (sin Next/styled-jsx) */}
      <style>{`
        @keyframes phrase-marquee {
          from { transform: translateX(70%); }
          to   { transform: translateX(-70%); }
        }
        .phrase-animate {
          animation: phrase-marquee var(--speed) infinite linear;
          will-change: transform;
        }
        /* Suaviza los bordes para que el texto "aparezca/desaparezca" sin cortar */
        .phrase-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
                  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .phrase-animate {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
