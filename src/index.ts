import { getPrices, getPrice } from "./api";

async function main() {
  const prices = await getPrices();
  console.log(prices);
  console.log(getPrice(prices, "bitcoin"));
}

main();