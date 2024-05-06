import { Card, CardWithoutHeading } from '@/components/cards/card';
import { PlayerStats } from '@/components/cards/player-stats-card';
import { Icons } from '@/components/icons';
import { Shell } from '@/components/shell';

type TaskCardProps = {
  type: string;
  title: string;
  description: string;
};

export default function Tasks() {
  return (
    <Shell>
      <section className="flex justify-between">
        <CardWithoutHeading className="w-[40%]">
          <PlayerStats title="Guesses" value={10} />
          <PlayerStats title="Correct " value={6} />
          <PlayerStats title="Failed " value={0} />
        </CardWithoutHeading>

        <CardWithoutHeading className="w-[177px] flex-col items-center px-4 py-6">
          <div className=" flex items-center justify-center rounded bg-primary-300/[0.24] p-1 text-center backdrop-blur-[2px]">
            <span className="text-[0.9ren]/[1.5rem] text-primary-300">Earned points</span>
          </div>
          <span className="text-[1.5rem]/[1.5rem] font-medium text-primary-300">11,000</span>
        </CardWithoutHeading>
      </section>
      <Card
        title="Task"
        description=" Select any quest below to add on your community’s main quest board, This will
            enable your community to engage and provide continuous value."
      >
        <div className="grid w-full grid-cols-3 gap-[14px]">
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
          <TaskCard
            type="x"
            title="Social media"
            description="Follow, retweet, like a tweet, or create memes with a hashtag."
          />
        </div>
      </Card>
    </Shell>
  );
}

export const TaskCard = ({ type, title, description }: TaskCardProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 rounded-lg bg-[#3E4F6D] px-6 py-10 backdrop-blur-[8px] backdrop-filter">
      <dt className="flex items-start gap-2 ">
        <Icons.xLogo className="size-6" />{' '}
        <span className="font-heading text-[0.875rem]/[1.543m] font-medium">{title}</span>
      </dt>
      <dd className="text-[0.875rem]/[1.5rem] font-light">{description}</dd>
    </div>
  );
};
