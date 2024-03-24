import { Queue } from "../data-structures/queue";

export const FLAG = "bfs";

const graph = {
  // Depth 0
  "mario": [
    "amanda",
    "art",
    "ana",
  ],
  // Depth 01
  "amanda": [
    "ana",
    "edson"
  ],
  "art": [
    "teteu"
  ],
  // Depth 02
  "ana": [
    "mario"
  ],
  "edson": [],
  "teteu": [],
};


let iterations = 0;
let searchQueue = Queue(graph["mario"]);
const checked = new Set();
let seller;
const isSeller = (name: string) => name.at(-1) === "n"; // edson case

while(searchQueue.get().length) {
  iterations++;
  const person = searchQueue.dequeue() as string;

  if(!checked.has(person)) {
    console.table(searchQueue.get());
    if(isSeller(person)) {
      console.log(`${person} is a seller!`);
      seller = person;
      searchQueue.clear();
    }
    if(!isSeller(person)) {
      // perserve the queue order
      searchQueue.enqueue(graph[person]);
    }
  }

  checked.add(person);
}

console.log("\n");

seller ? console.log(`Seller is: ${seller}`)
       : console.log(`Nobody is a seller :(`);

console.log("Total Iterations: ", iterations);