import currencyJS from "currency.js";
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
  },
  minus(value1: string, value2: string, currency: keyof typeof currencyConfigByCurrency) {
    return currencyJS(value1.replace(",", "."), currencyConfigByCurrency[currency]).subtract(value2).format();
  }
};

// 0.3 - 0.1                              // 0.19999999999999998
// x = new Big(0.3)
// x.minus(0.1)                           // "0.2"
// x                                      // "0.3"


console.log("[Money Ops]", 0.3 - 0.1);
console.log("[Money Ops]", money.minus("0.3", "0.1", "BRL"));






