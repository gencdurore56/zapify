/*
Filename: complexCode.js

Description: This code implements a sophisticated and complex algorithm to find the shortest path in a graph using the Dijkstra's algorithm.

Author: [Your Name]

Date: [Date]

*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  addEdge(node1, node2, distance) {
    this.edges[node1][node2] = distance;
    this.edges[node2][node1] = distance;
  }

  dijkstraAlgorithm(startNode) {
    let distances = {};
    let previous = {};
    let queue = [];

    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] === startNode) {
        distances[this.nodes[i]] = 0;
        queue.push(this.nodes[i]);
      } else {
        distances[this.nodes[i]] = Infinity;
      }

      previous[this.nodes[i]] = null;
    }

    while (queue.length > 0) {
      let smallestNode = queue.shift();

      if (!smallestNode) {
        break;
      }

      for (let neighbor in this.edges[smallestNode]) {
        let distance = this.edges[smallestNode][neighbor];
        let calculatedDistance = distances[smallestNode] + distance;

        if (calculatedDistance < distances[neighbor]) {
          distances[neighbor] = calculatedDistance;
          previous[neighbor] = smallestNode;
          queue.push(neighbor);
        }
      }
    }

    return previous;
  }
}

// Create a new graph
let graph = new Graph();

// Add nodes to the graph
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

// Add edges to the graph
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// Run Dijkstra's algorithm on the graph
let shortestPaths = graph.dijkstraAlgorithm("A");

// Output the shortest path to each node
console.log("Shortest paths:");
for (let node in shortestPaths) {
  let path = [];
  let currentNode = node;

  while (currentNode !== null) {
    path.push(currentNode);
    currentNode = shortestPaths[currentNode];
  }

  path.reverse();
  console.log(`${node}: ${path.join(" -> ")} // Distance: ${distances[node]}`);
}