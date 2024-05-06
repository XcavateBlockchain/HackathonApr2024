import { cva, type VariantProps } from 'class-variance-authority';
import { BaseButton, BaseButtonProps } from './base-button';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center gap-2 rounded-lg font-heading font-medium',
  {
    variants: {
      variant: {
        default:
          'bg-primary-300 hover:bg-primary-300/85 text-foreground  disabled:opacity-50 disabled:pointer-events-none transition-colors',
        secondary:
          'bg-primary-200 hover:bg-primary-200/85 text-foreground  disabled:opacity-50 disabled:pointer-events-none transition-colors',
        warning:
          'bg-primary-400 hover:bg-primary-400/85 text-foreground  disabled:opacity-50 disabled:pointer-events-none transition-colors',
        outline:
          'border-[#CCCCCC80] text-[#CCCCCC80] border font-light font-sans hover:border-primary-300 hover:text-primary-300',
        text: 'text-primary-300 text-[1.5rem]/[1.5rem] font-light bg-none border-b border-transparent hover:border-primary-300 rounded-none'
      },
      size: {
        default: 'py-[18px] px-6 text-[1rem]/[1.2rem]',
        lg: 'py-4 px-[45px] text-[1rem]',
        md: 'py-2 px-6 text-[0.75rem]/[1.1875rem]',
        sm: 'p-2 text-[0.875rem]/[1.5rem] font-light'
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps extends BaseButtonProps, VariantProps<typeof buttonVariants> {}

const Button = ({ variant, size, fullWidth, className, ...props }: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  );
};

Button.displayName = 'Button';

export { Button, buttonVariants, BaseButton };
