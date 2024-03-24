import { array } from "../data/array-strings-ordered-small";
export const FLAG = "binary-search";

let iterations = 0;
export function binarySearch(array, target) {
  let smallest = 0;
  let highest = array.length - 1;
  let answer;

  while(smallest <= highest) {
    iterations++;
    const middle = Math.floor((smallest + highest) / 2);
    const bet = array[middle];
    const betIsBigger = bet[0] > target[0];
    const betIsSmaller = bet[0] < target[0];
    
    console.log("highest", highest);
    console.log("small", smallest);
    console.log("=====");

    if(bet === target) {
      answer = bet;
      break;
    }
    if(betIsBigger) {
      highest = middle - 1;
    }
    if(betIsSmaller) {
      smallest = middle + 1;
    }
  }

  return answer;
}

console.log("Answer: ", binarySearch(array, "Zoe"));
console.log("Iterations: ", iterations);