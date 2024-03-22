import { now, fromDate, format, add } from "./datetime";

console.log("[Working with date/time]");

console.log("now\n", now());
console.log("\n");

console.log("fromDate\n", fromDate('2018-04-13 19:18'));
console.log("\n");


console.log("format\n", format('2018-04-13 19:18', "DD-MM-YYYY"));
console.log("\n");

console.log(
  "add",
  "\n",
  fromDate('2000-12-01 00:00'),
  "\n",
  "Day: ",
  add(fromDate('2000-12-01 00:00'), 1, "day"),
  "\n",
  "Month: ",
  add(fromDate('2000-12-01 00:00'), 1, "month"),
  "\n",
  "Year: ",
  add(fromDate('2000-12-01 00:00'), 2, "year"),
);