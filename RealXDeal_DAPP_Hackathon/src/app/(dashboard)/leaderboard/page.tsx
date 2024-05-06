import { Card } from '@/components/cards/card';
import { NFTCard } from '@/components/cards/nft-card';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

type LeaderProps = {
  points: number;
  winner?: boolean;
};

export function LeaderBoardCard({ points, winner }: LeaderProps) {
  return (
    <div className={cn('flex w-full items-center justify-between rounded-lg p-2')}>
      <div className="flex items-center gap-6">
        {winner ? (
          <Icons.goldMedal className="size-6" />
        ) : (
          <span className="text-[0.875rem] text-primary-foreground">01</span>
        )}
        <div className="flex items-center gap-2">
          <img className="h-6 w-6 rounded-full" src="/images/user.png" alt="Rounded avatar" />
          <span className="text-[0.875rem] text-primary-foreground">Victor X</span>
        </div>
      </div>

      <span className="text-[0.875rem] text-primary-foreground">{points} PTS</span>
    </div>
  );
}
async function ChampionCard() {
  return (
    <>
      <div className="flex justify-between">
        <Card className="w-[55%]" title="Realxdeal Champion" description="View Full List">
          <div className="flex w-full flex-col gap-3">
            <LeaderBoardCard points={2000} winner />
            <LeaderBoardCard points={2000} winner />
            <LeaderBoardCard points={2000} winner />
            <LeaderBoardCard points={2000} />
            <LeaderBoardCard points={2000} />
            <LeaderBoardCard points={2000} />
          </div>
        </Card>
        <div className="flex w-[45%] flex-col items-end justify-center">
          <Image src="/images/purple.png" width={200} height={200} alt="champion crown" />
        </div>
      </div>
    </>
  );
}
export default async function Page() {
  return (
    <Shell>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/images/user.png"
            alt="Rounded avatar"
          />
          <p className=" ml-3">Nikku Dev</p>
          <span className="me-2 rounded-xl bg-[#DC7DA63D] px-2.5  py-0.5 text-xs text-white shadow-none ">
            1Ay00011DY...
          </span>
        </div>
        <p className="mt-2">
          Points : <span className="text-[#ECB278]">4,000</span>
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-y-8">
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
      </div>
    </Shell>
  );
}
