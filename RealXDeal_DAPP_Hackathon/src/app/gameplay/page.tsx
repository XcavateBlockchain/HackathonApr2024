'use client';

import { Shell } from '@/components/shell';
import { ReactNode, useState } from 'react';
import PlayGuess from './_components/play-guess';
import { FailRedirect, SuccessRedirect } from './_components/success';
import SubstrateContextProvider from '@/context/polkadot-contex';

interface ISection {
  [key: string]: ReactNode;
}

export default function GamePlay() {
  const [display, setDisplay] = useState<'play' | 'success' | 'fail'>('play');

  const game: ISection = {
    play: <PlayGuess setDisplay={setDisplay} />,
    success: <SuccessRedirect />,
    fail: <FailRedirect />
  };

  return (
    <SubstrateContextProvider>
      <Shell className="px-20">{game[display]}</Shell>
    </SubstrateContextProvider>
  );
}
