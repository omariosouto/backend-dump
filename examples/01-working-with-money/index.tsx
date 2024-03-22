import currency from "currency.js";

console.log("[Working with money]");

var BRL = value => currency(value, { symbol: "R$", separator: ".", decimal: ",", fromCents: true });


const ISS = 2.00; // 2%
// const ISS = 2; // 2%
// const ISS = "2.10"; // 2%
// const ISS = "10"; // 10%
// const ISS = "50"; // 50%

const AMOUNT_IN_CENTS = "20000"; // R$ 100,00

const money = BRL(AMOUNT_IN_CENTS);

console.log(`Amount: ${money.toString()}`);
console.log(`${ISS}% of ${money.format()} is: ${money.multiply(toPercent(ISS)).toString()}`);















function toPercent(value: number | string) {
  const valueStr = typeof value === "number" ? value.toFixed(2) : String(value);

  return Number(valueStr) / 100;
}