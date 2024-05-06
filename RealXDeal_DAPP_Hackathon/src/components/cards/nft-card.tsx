import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface NFTCardProps {
  image: string;
  nftId: number;
  owner: string;
  type: 'blue' | 'green';
  time?: any;
  isShadow?: boolean;
}

export function NFTCard({ isShadow, ...nft }: NFTCardProps) {
  return (
    <Link
      href={`/nft/${nft.nftId}`}
      className={cn(
        'group flex w-full flex-col gap-4 rounded-lg border border-primary-300/[0.32] transition-all duration-300',
        isShadow ? 'shadow-header' : ''
      )}
    >
      <div className="relative h-[234px] w-full ">
        <Image
          src={nft.image}
          alt="nft"
          width={264}
          height={234}
          className="absolute top-0 h-[234px] w-full rounded-t-lg  object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-2.5 px-[17px] pb-[17px]">
        <div className=" space-x-1 text-[0.9rem]  font-light">
          <span className="group-hover:text-primary-300">#{nft.nftId}</span> |{' '}
          <span className="ml-[2px]">{nft.type}</span>
        </div>

        <div className="flex items-center justify-between text-[0.9rem] font-light">
          <span>{nft.owner}</span>
          <span className="text-primary-foreground">5 minutes ago</span>
        </div>
      </div>
    </Link>
  );
}
