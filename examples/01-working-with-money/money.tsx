import currencyJS from "currency.js";

// var BRL = value => currency(value, { symbol: "R$", separator: ".", decimal: ",", fromCents: true });


// // const ISS = 2.1; // 2.1%
// const ISS = 2.1111; // 2.1111%%
// // const ISS = 2; // 2%
// // const ISS = "2.10"; // 2%
// // const ISS = "10"; // 10%
// // const ISS = "50"; // 50%

// const AMOUNT_IN_CENTS = "20000"; // R$ 100,00

// const money = BRL(AMOUNT_IN_CENTS);

// console.log(`Amount: ${money.toString()}`);
// console.log(`${ISS}% of ${money.format()} is: ${money.multiply(ISS / 100).toString()}`);
// console.log(`${ISS}% of ${AMOUNT_IN_CENTS} is: ${Number(BigInt(AMOUNT_IN_CENTS)) * (ISS / 100)}`);

const currencyConfigByCurrency = {
  BRL: {
    symbol: "R$",
    separator: ".",
    decimal: ",",
    fromCents: true,
  },
};

export const money = {
  format(valueInCents: string, currency: keyof typeof currencyConfigByCurrency) {
    return currencyJS(valueInCents, currencyConfigByCurrency[currency]).format();
  },
  toCents(value: string) {
    return currencyJS(value).value;
  },
  add(value1: string, value2: string, currency: keyof typeof currencyConfigByCurrency) {
    const baseValue = currencyJS(value1.replace(",", "."), currencyConfigByCurrency[currency]).intValue;
    const valueToAdd = currencyJS(value2.replace(",", "."), currencyConfigByCurrency[currency]).intValue;
    return currencyJS(baseValue, currencyConfigByCurrency[currency]).add(valueToAdd).format();
  },
  multiply(value1: string, value2: string, currency: keyof typeof currencyConfigByCurrency) {
    const baseValue = currencyJS(value1.replace(",", "."), currencyConfigByCurrency[currency]).intValue;
    return currencyJS(baseValue, currencyConfigByCurrency[currency]).multiply(value2).format();
  }
};