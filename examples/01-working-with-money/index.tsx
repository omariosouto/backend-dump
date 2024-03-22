import currency from "currency.js";

console.log("[Working with money]");

var BRL = value => currency(value, { symbol: "R$", separator: ".", decimal: ",", fromCents: true });


const ISS_IN_PERCENT = 2; // 2%
const AMOUNT = "1000"; // R$ 10,00

const money = BRL(AMOUNT);

console.log(`Amount: ${money.toString()}`);
console.log(`${ISS_IN_PERCENT}% of ${AMOUNT} is: ${money.multiply(ISS_IN_PERCENT / 100).toString()}`);