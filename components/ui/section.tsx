import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-12 md:py-20 lg:py-24 relative overflow-hidden',
        className,
      )}
      {...props}>
      {children}
    </section>
  );
}
