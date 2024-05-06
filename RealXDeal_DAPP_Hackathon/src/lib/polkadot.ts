import { ApiPromise, WsProvider } from '@polkadot/api';

export async function getApi() {
  const wsProvider = new WsProvider(process.env.NEXT_PUBLIC_RPC);
  const api = await ApiPromise.create({ provider: wsProvider });
  return api;
}
