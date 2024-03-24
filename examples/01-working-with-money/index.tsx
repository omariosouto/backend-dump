import { money } from "./money";

console.log("[Working with money]");


const BALANCE = "100"; // In cents

const balance = money.format(BALANCE, "BRL");
console.log(`Balance: ${balance}`);

const balanceInCents = money.toCents(balance);
console.log(`Balance in cents: ${balanceInCents}`);

const amountToAdd = money.format("200", "BRL");
const add = money.add(balance, amountToAdd, "BRL");
console.log(`money.add: ${balance} + ${amountToAdd}: ${add}`);

const amountToMultiply = "0.5";
const multiply = money.multiply(balance, amountToMultiply, "BRL");
console.log(`money.multiply: ${balance} * ${amountToMultiply}: ${multiply}`);
