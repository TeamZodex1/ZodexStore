import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Check } from 'lucide-react';
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    return (
      <div className="flex items-center gap-8">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            id={inputId}
            ref={ref}
            className={cn(
              'peer h-16 w-16 appearance-none border border-border bg-transparent checked:bg-accent checked:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary transition-colors cursor-pointer',
              className
            )}
            {...props} />
          
          <Check
            size={12}
            className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
          
        </div>
        {label &&
        <label
          htmlFor={inputId}
          className="text-sm text-text-secondary cursor-pointer select-none">
          
            {label}
          </label>
        }
      </div>);

  }
);
Checkbox.displayName = 'Checkbox';
