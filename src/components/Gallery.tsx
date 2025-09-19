// Gallery.tsx
import React, { useState } from "react";

type CardItem = {
  title: string;
  src: string;
};

interface CardProps {
  card: CardItem;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

const CardComponent: React.FC<CardProps> = ({ card, index, hovered, setHovered }) => {
  // clases base
  const baseClasses =
    "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out";
  const blurredClass = hovered !== null && hovered !== index ? " blur-sm scale-[0.98]" : "";
  const overlayBase = "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300";
  const overlayOpacity = hovered === index ? " opacity-100" : " opacity-0";

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`${baseClasses}${blurredClass}`}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={card.src}
          alt={card.title}
          loading="lazy"
          className="object-cover w-full h-full absolute inset-0"
          style={{ display: "block" }}
        />
      </div>

      <div className={`${overlayBase}${overlayOpacity}`}>
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  );
};

export const Card = React.memo(CardComponent);
(Card as any).displayName = "Card";

export function FocusCards({ cards }: { cards: CardItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  );
}

// Demo / uso — puedes exportar o usar este componente dentro de tu app
export default function GalleryDemo(): React.ReactNode {
  const cards: CardItem[] = [
    {
      title: "Plaga",
      src: "/gallery/gallery1.png",
    },
    {
      title: "Fluxo",
      src: "/gallery/gallery2.png",
    },
    {
      title: "Datz bites",
      src: "/gallery/gallery3.png",
    },
    {
      title: "Stoever Group",
      src: "/gallery/gallery4.png",
    },
    {
      title: "Stoever Construction",
      src: "/gallery/gallery5.png",
    },
    {
      title: "MT3",
      src: "/gallery/gallery6.png",
    },
  ];

  return (
    <div className="min-h-screen w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
