import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variants
          {
            'bg-petcom-yellow text-white hover:bg-petcom-yellow/90 focus-visible:ring-petcom-yellow shadow-md hover:shadow-lg':
              variant === 'primary',
            'bg-petcom-coral text-white hover:bg-petcom-coral/90 focus-visible:ring-petcom-coral shadow-md hover:shadow-lg':
              variant === 'secondary',
            'border-2 border-petcom-coral text-petcom-coral hover:bg-petcom-coral hover:text-white':
              variant === 'outline',
            'text-gray-700 hover:bg-gray-100': variant === 'ghost',
          },
          
          // Sizes
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
