import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-primary font-oswald',
  {
    variants: {
      variant: {
        default: 'bg-white text-primary hover:bg-white/90 shadow-sm',
        industrial: 'bg-accent text-white hover:bg-accent/90 shadow-md',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline:
          'border-2 border-white/20 bg-transparent hover:bg-white/10 text-white',
        secondary: 'bg-muted text-white hover:bg-muted/80',
        ghost: 'hover:bg-white/10 hover:text-white text-white/80',
        link: 'text-white underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-14 px-8 text-base',
        icon: 'h-12 w-12',
      },
      shape: {
        default: 'rounded-sm', // Slight rounding for rugged feel
        square: 'rounded-none',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'default',
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
