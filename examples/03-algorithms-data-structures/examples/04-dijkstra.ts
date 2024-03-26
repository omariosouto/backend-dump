import { Queue } from "../data-structures/queue";
export const FLAG = "dijkstra";

/**

A -2-> C -> B
  -4-> D ->


*/

const GRAPH = {
  A: {
    C: 2,
    D: 4,
  },
  B: {

  },
  C: {
    B: 10,
  },
  D: {
    C: 2,
    B: 1,
  },
}


function djikstra(graph, from, to) {
  const unvisited = Queue(Object.keys(graph));
  const visited = Queue();

  const tentativeDistance = Object.keys(graph).reduce((_tentativeDistance, node) => {
    const isStartNode = node === from;
    return {
      ..._tentativeDistance,
      [node]: {
        shortestDistance: isStartNode ? 0 : Infinity,
        previousNode: undefined,
      },
    };
  }, {});

  while(unvisited.get() >= visited.get()) {
    const activeNode = unvisited.dequeue() as string;
    const queue = Queue(Object.keys(GRAPH[activeNode]));

    while(queue.get().length > 0) {
      const node = queue.dequeue() as string;

      const shortestDistanceToNode = tentativeDistance[node].shortestDistance;
      const shortestDistancePrevious = tentativeDistance[node].previousNode;
      const distanceFromActiveNodeToNode = graph[activeNode][node];
      if(shortestDistanceToNode === Infinity) {
        tentativeDistance[node].shortestDistance = graph[activeNode][node];
        tentativeDistance[node].previousNode = activeNode;
      }
      if(shortestDistanceToNode !== Infinity) {
        // TODO: Understand the criteria to update the values
        console.log(node, shortestDistanceToNode, shortestDistancePrevious);
      }
    }
    
    visited.enqueue(activeNode);
  }

  console.log(tentativeDistance);
}

djikstra(GRAPH, "A", "B");