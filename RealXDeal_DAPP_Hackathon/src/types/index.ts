import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
}
