import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    children,
    disabled,
    ...props
  },
  ref) =>
  {
    const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed';
    const variants = {
      primary: 'bg-accent text-white hover:bg-accent-hover',
      secondary:
      'bg-bg-surface text-text-primary border border-border hover:bg-bg-surface-hover',
      ghost: 'text-text-primary hover:bg-bg-surface-hover'
    };
    const sizes = {
      sm: 'px-16 py-8 text-sm',
      md: 'px-24 py-16 text-base',
      lg: 'px-32 py-24 text-lg'
    };
    return (
      <motion.button
        ref={ref}
        whileTap={{
          scale: disabled || isLoading ? 1 : 0.98
        }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}>
        
        {isLoading ?
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          
            <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4">
          </circle>
            <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
          </svg> :
        null}
        {children}
      </motion.button>);

  }
);
Button.displayName = 'Button';
