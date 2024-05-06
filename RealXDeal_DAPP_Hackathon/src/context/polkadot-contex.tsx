'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { InjectedExtension, InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type SubstrateContext = {
  address: string;
  points: number;
  isConnected: boolean;
  selectedAccount: InjectedAccountWithMeta | any;
  handleConnect: any;
  disconnectWallet: any;
};

const SubstrateContext = createContext<SubstrateContext>({
  address: '',
  points: 0,
  isConnected: false,
  selectedAccount: {},
  handleConnect: async () => {}, // Dummy function for handleConnect
  disconnectWallet: () => {} // Dummy function for disconnectWallet
});

export function useSubstrateContext() {
  return useContext(SubstrateContext);
}

export interface SubstrateProps {
  children?: React.ReactNode;
}

export default function SubstrateContextProvider({ children }: SubstrateProps) {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
  const [address, setAddress] = useState<string>('');

  const handleConnect = async (walletName: 'talisman' | 'subwallet-js') => {
    try {
      const extensions = await web3Enable('RealXChange');
      const extension = extensions.find(
        ext => ext.name.toLowerCase() === walletName.toLowerCase()
      );
      if (!extension) {
        alert(`Please install the ${walletName} extension.`);
        return;
      }

      const injected = await web3FromSource(extension.name);
      if (!injected) {
        throw new Error(`Failed to connect with ${walletName}`);
      }

      const accounts = await web3Accounts();
      if (accounts.length === 0) {
        throw new Error('No accounts found in the wallet.');
      }

      setSelectedAccount(accounts[0]);
      setAddress(accounts[0].address);
      localStorage.setItem('selectedWalletAddress', accounts[0].address);
      console.log('Connected with account:', accounts[0]);

      alert(`Connected successfully with ${walletName}`);
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      alert(`Failed to connect the wallet: ${error}`);
    }
  };

  const disconnectWallet = () => {
    setAddress('');
    localStorage.removeItem('selectedWalletAddress');
    setIsConnected(false);
    router.refresh();
  };

  const onReconnect = async () => {
    const localStorageAddress = localStorage.getItem('selectedWalletAddress');
    if (localStorageAddress) {
      setAddress(localStorageAddress);
      setIsConnected(true);
    }
  };

  useEffect(() => {
    onReconnect();
  }, []);

  return (
    <SubstrateContext.Provider
      value={{
        address,
        points: 0,
        isConnected,
        selectedAccount,
        handleConnect,
        disconnectWallet
      }}
    >
      {children}
    </SubstrateContext.Provider>
  );
}
