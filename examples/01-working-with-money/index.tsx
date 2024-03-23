import { money } from "./money";

console.log("[Working with money]");


const BALANCE = "100"; // In cents

const balance = money.format(BALANCE, "BRL");
console.log(`Balance: ${balance}`);
const balanceInCents = money.toCents(balance);
console.log(`Balance in cents: ${balanceInCents}`);
const add = money.add(balance, "100", "BRL");
console.log(`${balance} + ${money.format("100", "BRL")}: ${add}`);