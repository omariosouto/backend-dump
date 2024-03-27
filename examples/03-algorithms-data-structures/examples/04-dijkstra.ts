import { Queue } from "../data-structures/queue";
export const FLAG = "dijkstra";

/**

A -2-> C -> B
  -4-> D ->


*/

const GRAPH = {
  A: {
    B: 6,
    D: 1,
  },
  B: {
  },
  D: {
    E: 1,
    B: 2,
  },
  E: {

  },
}


function dijkstra(graph, from, to) {
  // Create a distances object that holds every node
  let distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[from] = 0;

  // Create an object for tracking the path
  let prev = {};

  // Process nodes using a priority queue based on distance
  let pq = [{ node: from, distance: 0 }];
  while (pq.length > 0) {
    // Sort the pq based on distance
    pq.sort((a, b) => a.distance - b.distance);
    let current = pq.shift() as {
      node: any;
      distance: number;
    };

    // Visit each neighbor of the current node
    let neighbors = graph[current.node];
    for (let neighbor in neighbors) {
      let newDistance = current.distance + neighbors[neighbor];
      // If a shorter path is found
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        prev[neighbor] = current.node;
        pq.push({ node: neighbor, distance: newDistance });
      }
    }
  }

  // Reconstruct the path from 'from' to 'to'
  let path: unknown[] = [];
  for (let at = to; at !== undefined; at = prev[at]) {
    path.push(at);
  }
  path.reverse();

  // If the path does not start with the 'from' node, then no path exists
  if (path[0] !== from) {
    return { distance: "Infinity", path: "No path" };
  }

  return { distance: distances[to], path: path };
}

console.log(dijkstra(GRAPH, "A", "B"));