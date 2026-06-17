import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    return (
      <div className="flex flex-col gap-8 w-full">
        {label &&
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-text-primary">
          
            {label}
          </label>
        }
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'flex h-48 w-full bg-bg-surface border border-border px-16 py-8 text-sm text-text-primary transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-error focus-visible:ring-error',
            className
          )}
          {...props} />
        
        {error && <span className="text-xs text-error">{error}</span>}
      </div>);

  }
);
Input.displayName = 'Input';
