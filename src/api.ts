import { PriceResponse } from "./types";

export function getPrice(data: PriceResponse, coinId: string): number | null {
  const entry = data[coinId];
  if (entry === undefined) {
    return null;
  }
  return entry.usd;
}

export async function getPrices(): Promise<PriceResponse> {
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana,ripple,usd-coin,cardano,dogecoin,tron&vs_currencies=usd";
  const response = await fetch(url);
  const data: PriceResponse = await response.json();
  return data;
}