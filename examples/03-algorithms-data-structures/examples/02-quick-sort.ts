import { array } from "../data/array-numbers-unordered-small.tsx";
export const FLAG = "quick-sort";


// Quick Sort - Unordered without repeated
export function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const smaller = array.filter(item => item < pivot);
  const bigger = array.filter((item => item > pivot));
  
  return [
    ...quickSort(smaller),
    pivot,
    ...quickSort(bigger),
  ];
}

console.table(quickSort(array));
console.table(quickSort([51, 2, 1, 3, 4, 50, 17, 18, 20]));