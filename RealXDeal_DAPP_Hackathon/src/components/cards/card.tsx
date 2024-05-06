import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function Card({ className, title, description, children, ...props }: CardProps) {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-start gap-8 rounded-lg border border-[#3B4F74] bg-black/[0.20] px-4 py-6 shadow-header backdrop-blur-[8px] backdrop-filter',
        className
      )}
      {...props}
    >
      <div className="flex w-full justify-between  gap-[18px]">
        <h2 className="text-[1rem] font-medium">{title}</h2>
        {description ? (
          <p className="text-[0.875rem]/[1.5rem] font-light">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function CardWithoutHeading({
  className,
  children,
  ...props
}: Omit<CardProps, 'title' | 'description'>) {
  return (
    <section
      className={cn(
        'flex w-full items-start gap-8 rounded-lg border border-[#3B4F74] bg-black/[0.20] px-4 py-6 shadow-header backdrop-blur-[8px] backdrop-filter',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
