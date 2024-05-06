import { cn } from '@/lib/utils';
import Image from 'next/image';

type PlayCardProps = {
  title: string;
  desc: string;
  color: string;
};

export function HowToPlay() {
  return (
    <section
      id="how-to-play"
      className="container mx-auto flex w-full max-w-screen-2xl flex-col gap-[100px] px-[100px] pb-[150px] pt-[100px]"
    >
      <div className="flex items-start justify-start font-heading text-[1.3rem]/[1.5rem] font-medium">
        <h3>How to play</h3>
      </div>
      <div className="items-start] flex justify-between">
        <Image src={'/images/how-to-play.png'} alt="" width={473} height={473} priority />

        <div className="flex h-full w-[50%] flex-col items-start gap-6 bg-primary p-6">
          <PlayCard
            title="Complete Tasks to Earn Tokens"
            desc="Begin by completing tasks within the game to earn tokens, which you can use to make your guess. The more tasks you complete, the more tokens you'll accumulate to increase your chances of winning."
            color="bg-primary-200/[0.32]"
          />
          <PlayCard
            title="Select Your Player Level"
            desc="Choose your player level based on your experience and confidence in your ability to guess property prices accurately. Whether you're a beginner or an expert, there's a level for everyone."
            color="bg-primary-300/[0.50]"
          />
          <PlayCard
            title="Reveal Property Data and Countdown"
            desc="Once you've earned enough tokens and selected your player level, reveal the property data for the current round and see the countdown clock ticking down. Time is of the essence, so act quickly!"
            color="bg-primary-400/[0.50]"
          />
          <PlayCard
            title="Make Your Guess"
            desc="Use your experience or conduct research to make an educated guess on the property's price. The more accurate your guess, the higher your chances of winning."
            color="bg-[#77C500]/[0.23]"
          />
        </div>
      </div>
    </section>
  );
}

const PlayCard = ({ title, desc, color }: PlayCardProps) => {
  return (
    <div
      className={cn('flex-col items-start  justify-end gap-4 rounded-lg  px-3 py-2', color)}
    >
      <dt className="font-heading text-[1.2rem]/[1.8rem] font-medium">{title}</dt>
      <dd className="text-[0.875rem]/[1.5rem] font-light">{desc}</dd>
    </div>
  );
};
