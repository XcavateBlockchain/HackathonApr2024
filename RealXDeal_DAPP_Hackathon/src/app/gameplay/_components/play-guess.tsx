'use client';

import { Button } from '@/components/ui/button';
import { ApiPromise, WsProvider } from '@polkadot/api';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { getApi } from '@/lib/polkadot';
import { useSubstrateContext } from '@/context/polkadot-contex';
import { formatNumber } from '@/lib/utils';
import { Icons } from '@/components/icons';

interface GameProps {
  setDisplay: Dispatch<SetStateAction<'play' | 'success' | 'fail'>>;
}

export default function PlayGuess({ setDisplay }: GameProps) {
  const { points } = useSubstrateContext(); // can get address from here
  const address = '5CSFhuBPkG1SDyHseSHh23Kg89oYVysjRmXH5ea3F3fzEyx5'; // get this from local storage
  const [guess, setGuess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  const submitGuess = async () => {
    if (!guess) return;

    setIsSubmitting(true);

    try {
      const api = await getApi();
      const extensions = await web3Enable('RealXChange');
      const injected = await web3FromAddress(address);
      const extrinsic = api.tx.system.remark(guess);
      const signer = injected.signer;

      const unsub = await extrinsic.signAndSend(address, { signer }, result => {
        if (result.status.isInBlock) {
          console.log(`Completed at block hash #${result.status.asInBlock.toString()}`);
        } else if (result.status.isBroadcast) {
          console.log('Broadcasting the guess...');
        }
      });

      console.log('Transaction sent:', unsub);
      setDisplay('success'); // if the guess is correct set display to success if not fail
      setIsSubmitting(false);
    } catch (error) {
      console.error('Failed to submit guess:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          {/* <p>Return</p> */}
          <Button href="/home" variant={'text'} size={'md'}>
            <Icons.CaretLeft className="size-6" /> Return
          </Button>
          <p>
            Points : <span className="mt-3 text-[#ECB278]">{formatNumber(points)}x</span>
          </p>
        </div>
        <div
          style={{ background: 'rgba(255, 255, 255, 0.20)' }}
          className="backdrop-blur-8 bg- mt-10 flex h-[70vh] gap-3 rounded-md border-[1px] border-[#3B4F74] px-4 py-8"
        >
          <div className="game-play-bg relative w-1/2 border-[1px] border-[#57A0C5]">
            <div className="absolute bottom-[-44px]  left-[5rem] flex h-[20%] w-2/3 gap-3">
              <div className="flex  h-[100%] w-1/3 items-center justify-center overflow-hidden rounded-md shadow-md">
                <Image
                  src="/images/bedroom.png"
                  width={100}
                  height={100}
                  alt="property image"
                />
              </div>
              <div className="flex  h-[100%] w-1/3 items-center justify-center overflow-hidden rounded-md shadow-md">
                <Image
                  src="/images/bedroom.png"
                  width={100}
                  height={100}
                  alt="property image"
                />
              </div>
              <div className="flex  h-[100%] w-1/3 items-center justify-center overflow-hidden rounded-md shadow-md">
                <Image
                  src="/images/bedroom.png"
                  width={100}
                  height={100}
                  alt="property image"
                />
              </div>
            </div>
          </div>
          <div className="flex  w-1/2">
            <div className="flex  w-2/3 flex-col px-6 ">
              <p className="font-bold">Property 1</p>
              <p className="text-sm leading-8">
                Type : <span className="text-[#ECB278]">Apartment</span>
              </p>
              <p className="text-sm leading-8">One bed luxury apartment,</p>
              <p className="text-sm leading-8">Bedrooms :1 Bathrooms:1</p>
              <p className="text-sm leading-8">Size:552 Sq Feet </p>
              <p className="text-sm leading-8">TownCity: </p>
              <p className="text-sm leading-8">PostCode: </p>

              <p className="font-bold leading-10">Key Features</p>
              <p className="text-sm">
                Private balcony. Communal roof terrace. Resident's concierge service. Close
                proximity to green spaces. 999 year lease with peppercorn ground rent
              </p>
              <input
                type="text"
                value={guess}
                onChange={handleGuessChange}
                className="mt-4 rounded-md border-[1px] border-[#57A0C5] bg-transparent p-3 placeholder:text-center"
                placeholder="Enter your guess"
                disabled={isSubmitting}
              />
              <Button className="mt-4" onClick={submitGuess} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Guess Now'}
              </Button>
            </div>
            <div className="flex w-1/3  justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="153"
                height="153"
                viewBox="0 0 153 153"
                fill="none"
              >
                <g filter="url(#filter0_ii_365_625)">
                  <circle cx="76.4609" cy="76.5" r="73.5" fill="#2E4C67" />
                </g>
                <circle
                  cx="76.4609"
                  cy="76.5"
                  r="74.97"
                  stroke="#57A0C5"
                  stroke-width="2.94"
                />
                <defs>
                  <filter
                    id="filter0_ii_365_625"
                    x="-4.38851"
                    y="-8.75994"
                    width="164.639"
                    height="173.166"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="7.35" dy="14.7" />
                    <feGaussianBlur stdDeviation="5.733" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.215333 0 0 0 0 0.448491 0 0 0 0 0.566667 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_365_625" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-4.41" dy="-8.82" />
                    <feGaussianBlur stdDeviation="6.8355" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.341176 0 0 0 0 0.627451 0 0 0 0 0.772549 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_365_625"
                      result="effect2_innerShadow_365_625"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
