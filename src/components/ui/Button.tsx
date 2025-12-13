import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: boolean;
  href?: string;
  target?: string;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon = false,
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-0.5",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25 hover:-translate-y-0.5",
    outline: "border border-stroke bg-white text-black hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-body hover:text-primary hover:bg-gray-100/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes}
        whileHover={variant !== 'outline' && variant !== 'ghost' ? { y: -2 } : {}}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={classes}
      whileHover={variant !== 'outline' && variant !== 'ghost' ? { y: -2 } : {}}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
