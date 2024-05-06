import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TeamSection } from './_components/team';
import { HowToPlay } from './_components/how-to-play';

export default function Home() {
  return (
    <>
      <section className="container mx-auto flex w-full max-w-screen-2xl items-center justify-center gap-[91px] px-[100px] pb-[150px] pt-[100px]">
        <div className="flex w-full max-w-[610px] flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-heading text-[2.5rem]/[3rem] font-medium">
              Think you are good at knowing real estate prices?
            </h1>
            <p className="text-[1rem]/[1.5rem] font-light">
              Are you willing to stake your tokens on it? guess correct property prices and win
              NFTs.
            </p>
          </div>
          <Button>PLAY NOW</Button>
        </div>
        <div className="">
          <Image
            src={'/images/hero.png'}
            alt="real-x-deal"
            width={538}
            height={538}
            priority
          />
        </div>
      </section>
      <HowToPlay />
      <section className="container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10 px-[100px] pb-[150px] pt-[100px]">
        <div className="w-[25%] text-center font-heading text-[1.3rem]/[1.9rem] font-medium">
          <h2>Fun way to learn about real estate.</h2>
        </div>
        <div className="flex items-start gap-5">
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary p-6">
                <Image src={'/images/feature-img-1.png'} alt="" width={246} height={255} />
              </div>
            </div>
            <p className="text-[1rem]">win valuable NFTs</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary p-6">
                <Image src={'/images/feature-img-1.png'} alt="" width={246} height={255} />
              </div>
            </div>
            <p className="text-[1rem]">win valuable NFTs</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary p-6">
                <Image src={'/images/feature-img-1.png'} alt="" width={246} height={255} />
              </div>
            </div>
            <p className="text-[1rem]">win valuable NFTs</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary p-6">
                <Image src={'/images/feature-img-1.png'} alt="" width={246} height={255} />
              </div>
            </div>
            <p className="text-[1rem]">win valuable NFTs</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10 px-[100px] pb-[150px] pt-[100px]">
        <div className="w-[32%] flex-col items-center gap-4 text-center">
          <h3 className="font-heading text-[1.3rem]/[1.8rem] font-medium">
            Experience Property Gaming at Its Finest!
          </h3>
          <p className="text-[1rem]/[1.5rem] font-light">The world of property guessing.</p>
        </div>
        <Image src={'/images/game-demo.png'} alt="demo" width={1086} height={629} priority />
      </section>
      <TeamSection />
      <section className="h-[555px] w-full bg-[url('/images/play-now.svg')] bg-cover bg-center bg-no-repeat pt-[100px]">
        <div className="container mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-start gap-6 px-[100px] py-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-[2.5rem]/[3rem] font-medium">Get started now.</h3>
            <p className="text-[1rem]/[1.5rem]">Ready to Start Guessing?</p>
          </div>
          <Button>PLAY NOW</Button>
        </div>
      </section>
    </>
  );
}
