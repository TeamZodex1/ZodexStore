import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, id, ...props }, ref) => {
    const selectId = id || Math.random().toString(36).substring(7);
    return (
      <div className="flex flex-col gap-8 w-full">
        {label &&
        <label
          htmlFor={selectId}
          className="text-sm font-semibold text-text-primary">
          
            {label}
          </label>
        }
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'appearance-none flex h-48 w-full bg-bg-surface border border-border px-16 py-8 pr-48 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
              className
            )}
            {...props}>
            
            {options.map((option) =>
            <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-16 pointer-events-none text-text-secondary">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>);

  }
);
Select.displayName = 'Select';