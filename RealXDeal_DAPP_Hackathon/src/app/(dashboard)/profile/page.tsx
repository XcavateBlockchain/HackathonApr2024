import { Card } from '@/components/cards/card';
import { Shell } from '@/components/shell';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileNFTCardProps {
  image: string;
  nftId: number;
  owner: string;
  type: 'blue' | 'green';
  time?: any;
  isShadow?: boolean;
}

type CircleCardProps = {
  color: string;
};

const collections = ['All', 'Blue', 'Red', 'Pink', 'Orange', 'Purple', 'Teal', 'Coral'];

const ProfileNFTCard = ({ isShadow, ...nft }: ProfileNFTCardProps) => {
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
          src="/images/profile-nft.png"
          alt="nft"
          width={264}
          height={234}
          className="absolute top-0 h-[234px] w-full rounded-t-lg  object-cover"
          priority
        />
      </div>

      <div className="flex justify-between gap-2.5 px-[17px] pb-[17px]">
        <div className=" space-x-1 text-[0.9rem]  font-light">
          <span className="group-hover:text-primary-300">#{nft.nftId}</span> |{' '}
          <span className="ml-[2px]">{nft.type}</span>
        </div>
        <button className="rounded-md border border-[#DC7DA6] px-3 py-1 text-sm font-light text-[#DC7DA6] shadow-md">
          List
        </button>
      </div>
    </Link>
  );
};
const CircleCard = ({ color }: CircleCardProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="99"
        height="99"
        viewBox="0 0 99 99"
        fill="none"
      >
        <g filter="url(#filter0_d_717_4061)">
          <path
            d="M90.2139 49.75C90.2139 72.2556 71.9695 90.5 49.4639 90.5C26.9583 90.5 8.71387 72.2556 8.71387 49.75C8.71387 27.2444 26.9583 9 49.4639 9C71.9695 9 90.2139 27.2444 90.2139 49.75ZM14.4216 49.75C14.4216 69.1033 30.1106 84.7922 49.4639 84.7922C68.8172 84.7922 84.5061 69.1033 84.5061 49.75C84.5061 30.3967 68.8172 14.7078 49.4639 14.7078C30.1106 14.7078 14.4216 30.3967 14.4216 49.75Z"
            fill={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_717_4061"
            x="0.563868"
            y="0.85"
            width="97.8"
            height="97.8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="4.075" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.92549 0 0 0 0 0.698039 0 0 0 0 0.470588 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_717_4061"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_717_4061"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default function Page({
  searchParams: { collection }
}: {
  searchParams: { collection: string };
}) {
  const BASE_URL = '/profile';
  const selected = collection === undefined ? 'All' : collection;
  return (
    <>
      <Shell>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              className="h-24 w-24 rounded-full"
              src="/images/profile.jpeg"
              alt="Rounded avatar"
              style={{ boxShadow: '0px 0px 24px 0px #ECB278', border: '4px solid #DAB436' }}
            />
            <div className="ml-3 mt-2 flex flex-col">
              <p className="ml-1 font-bold">Nikku Dev</p>
              <span className=" mt-3 rounded-xl bg-[#DC7DA63D] px-2.5  py-0.5 text-xs text-white shadow-none ">
                1Ay00011DY...
              </span>
              <p className="mt-3 text-sm">
                Rank : <span className="text-[#DAB436]">World No 1</span>
              </p>
            </div>
          </div>
          <div>
            <span className="text-[0.875rem] text-primary-foreground">
              Points : <span className="text-[#DAB436]">4,000 X</span>
            </span>
          </div>
        </div>
        <Card className="mt-10  w-[100%] gap-2" title="Gallery">
          <div className="mt-3 flex gap-3">
            <CircleCard color="#ECB278" />
            <CircleCard color="#57A0C5" />
            <CircleCard color="#57A0C5" />
            <CircleCard color="#78B36E" />
            <CircleCard color="#57A0C5" />
          </div>
        </Card>
        <section>
          <ul className="flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li>
              <Link href="/" className=" inline-block  p-2 py-3 font-normal text-[#FFFFFF] ">
                Nfts
              </Link>
              <span className=" mx-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#DC7DA6] text-[10px] font-normal text-[#FFFFFF]">
                23
              </span>
            </li>
            <li>
              <Link href="/" className="inline-block p-2 py-3 font-normal text-[#FFFFFF]">
                Listed
              </Link>
              <span className=" mx-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#DC7DA6] text-[10px] font-normal text-[#FFFFFF]">
                0
              </span>
            </li>
            <li>
              <Link href="/" className="inline-block p-2 py-3 font-normal text-[#FFFFFF]">
                Offers
              </Link>
              <span className=" mx-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#DC7DA6] text-[10px] font-normal text-[#FFFFFF]">
                4
              </span>
            </li>
            <li className="">
              <Link href="/" className="inline-block p-2 py-3 font-normal text-[#FFFFFF]">
                Challenges{' '}
                <span className=" mx-0 inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#DC7DA6] text-[10px] font-normal text-[#FFFFFF]">
                  20
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <div className="flex gap-3">
          {collections.map((collection: string) => {
            const active = selected === collection;
            return (
              <Button
                key={collection}
                variant={'outline'}
                size={'sm'}
                href={`${BASE_URL}?collection=${collection}`}
                className={
                  active ? 'border-primary-300 bg-primary-300/15 text-primary-300' : ''
                }
              >
                {collection}
              </Button>
            );
          })}
        </div>
        <section className="flex w-full flex-col gap-8">
          <div className="grid h-full w-full grid-cols-4 gap-[23px]">
            {siteConfig.nfts.map((nft: any) => (
              <ProfileNFTCard
                key={nft.nftId}
                nftId={nft.nftId}
                image={nft.image}
                owner={nft.owner}
                type={nft.type}
                isShadow
              />
            ))}
          </div>
        </section>
      </Shell>
    </>
  );
}
