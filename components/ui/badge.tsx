import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-oswald uppercase tracking-wider',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-white text-primary hover:bg-white/80',
        secondary: 'border-transparent bg-muted text-white hover:bg-muted/80',
        destructive:
          'border-transparent bg-red-600 text-white hover:bg-red-700',
        accent: 'border-transparent bg-accent text-white hover:bg-accent/80',
        outline: 'text-white border-white/20',
      },
      shape: {
        default: 'rounded-sm',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'default',
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, shape, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, shape }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
