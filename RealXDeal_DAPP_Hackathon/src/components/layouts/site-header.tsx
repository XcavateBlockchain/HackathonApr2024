import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../icons';
import ConnectWallet from './connect-wallet';

export function SiteHeader() {
  return (
    <header className="w-full backdrop-blur-[8px]">
      <div className="container mx-auto flex w-full  max-w-screen-2xl items-center justify-between py-4 md:px-[100px]">
        <Link href={'/'}>
          <Image src={'/images/logo.svg'} alt="logo" width={183} height={72} priority />
        </Link>

        <nav className="flex items-center gap-10">
          {siteConfig.mainNav.map((nav: any) => (
            <Link
              key={nav.title}
              href={nav.href}
              className="text-[1.1rem]/[1.5rem] font-light transition-colors duration-300 hover:text-primary-300"
            >
              {nav.title}
            </Link>
          ))}
        </nav>
        <ConnectWallet />
        {/* <button className="flex items-center gap-2 rounded-lg border border-primary-300 px-[45px] py-4 font-heading text-[1rem] font-medium text-primary-300 hover:border-white hover:text-white">
          Connect <Icons.wallet className="h-4 w-5" />
        </button> */}
      </div>
    </header>
  );
}
