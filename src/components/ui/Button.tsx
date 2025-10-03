import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false,
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-xl font-semibold
    backdrop-blur-xl border transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-white/20
    disabled:opacity-50 disabled:cursor-not-allowed
    group flex items-center justify-center gap-2
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50
      text-white hover:text-white shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-neutral-800/50 hover:bg-neutral-700/60 border-neutral-600/30 hover:border-neutral-500/50
      text-gray-200 hover:text-white
    `,
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <motion.div
          className="relative z-10"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  if (href && !disabled) {
    const MotionLink = motion(Link);
    
    return (
      <MotionLink
        to={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
          cursor-pointer
        `}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
