import Image from 'next/image';
import { Icons, IconType } from '../icons';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

type SocialLinkProps = {
  icon: IconType;
  href: string;
};

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-10 bg-primary">
      <div className="container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-6 px-[100px] pt-[100px]">
        <Image src={'/images/logo.svg'} alt="logo" width={205} height={80} priority />
      </div>
      <div className="flex items-center justify-center gap-6">
        <SocialLink icon="xLogo" href={siteConfig.links.twitter} />
        <SocialLink icon="discord" href={siteConfig.links.discord} />
        <SocialLink icon="telegram" href={siteConfig.links.telegram} />
      </div>
      <hr />

      <div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-[100pxs] pb-4">
        <p className="text-[0.6875rem]/[1.7rem] text-primary-foreground">
          Contains HM Land Registry data © Crown copyright and database right 2021. This data
          is licensed under the Open Government License v3.0.
        </p>
        <p className="text-[0.6875rem]/[1.7rem] text-primary-foreground">Terms & Conditions</p>
      </div>
    </footer>
  );
}

const SocialLink = ({ icon, href }: SocialLinkProps) => {
  const Icon = Icons[icon];
  return (
    <Link
      href={href}
      className="text-foreground transition-colors duration-300 hover:text-primary-300"
    >
      <Icon className="size-6" />
    </Link>
  );
};
