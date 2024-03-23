import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(isLeapYear as any) // use plugin

export const time = {
  now,
  fromDate,
  format,
  add,
};

export function now() {
  return dayjs().utc().format();
}

export function fromDate(date: string) {
  return dayjs(date).format();
}

export function format(date: string, format: string) {
  return dayjs(date).format(format);
}

type Unit = "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";

export function add(date: string, amount: number, unit: Unit) {
  return dayjs(date).add(amount, unit).format();
}