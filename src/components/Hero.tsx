import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { IoArrowForward, IoCall } from "react-icons/io5";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "lg";
  className?: string;
}

function Button({ children, variant = "default", size = "sm", className = "" }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  };
  
  const sizeClasses = {
    sm: "h-9 px-3 text-xs",
    lg: "h-11 px-8 text-sm"
  };
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  );
}

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen py-12 px-6 lg:py-20 lg:px-12">
      <div className="container mx-auto">
        <div className="relative">
          {/* Contenedor de imagen con esquinas redondeadas */}
          <div 
            className="w-full h-[70vh] lg:h-[80vh] bg-cover bg-center rounded-3xl shadow-2xl mx-auto"
            style={{ backgroundImage: 'url(/hero-bg.webp)' }}
          >
            {/* Overlay para mejorar legibilidad del texto */}
            <div className="w-full h-full bg-black/30 rounded-3xl flex items-center justify-center">
              <div className="flex gap-8 py-12 lg:py-20 items-center justify-center flex-col max-w-4xl mx-auto px-6">
                <div>
                  <Button variant="secondary" size="sm" className="gap-4">
                    Read our launch article <IoArrowForward className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular text-white">
                    <span className="text-spektr-cyan-50">This is something</span>
                    <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                      &nbsp;
                      {titles.map((title, index) => (
                        <motion.span
                          key={index}
                          className="absolute font-semibold"
                          initial={{ opacity: 0, y: "-100" }}
                          transition={{ type: "spring", stiffness: 50 }}
                          animate={
                            titleNumber === index
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: titleNumber > index ? -150 : 150,
                                  opacity: 0,
                                }
                          }
                        >
                          {title}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-white">
                    Managing a small business today is already tough. Avoid further
                    complications by ditching outdated, tedious trade methods. Our
                    goal is to streamline SMB trade, making it easier and faster than
                    ever.
                  </p>
                </div>
                <div className="flex flex-row gap-3 text-white">
                  <Button size="lg" className="gap-4" variant="outline">
                    Jump on a call <IoCall className="w-4 h-4" />
                  </Button>
                  <Button size="lg" className="gap-4">
                    Sign up here <IoArrowForward className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
