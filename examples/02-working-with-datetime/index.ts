import { time } from "./time";

console.log("[Working with date/time]");

console.log("now\n", time.now());
console.log("\n");

console.log("fromDate\n", time.fromDate('2018-04-13 19:18'));
console.log("\n");


console.log("format\n", time.format('2018-04-13 19:18', "DD-MM-YYYY"));
console.log("\n");

console.log(
  "add",
  "\n",
  time.fromDate('2000-12-01 00:00'),
  "\n",
  "Day: ",
  time.add(time.fromDate('2000-12-01 00:00'), 1, "day"), // 2000-12-02 00:00
  "\n",
  "Month: ",
  time.add(time.fromDate('2000-12-01 00:00'), 1, "month"), // 2001-01-01 00:00
  "\n",
  "Year: ",
  time.add(time.fromDate('2000-12-01 00:00'), 2, "year"), // 2002-12-01 00:00
);