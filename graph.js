/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    for (let adj of vertex.adjacent) {
      vertex.adjacent.delete(adj);
    }
    this.nodes.delete(vertex);
  }

  // /** traverse graph with DFS and returns array of Node values */
  // depthFirstSearch(start) {
  //   let acc = [];
  //   let visited = new Set([start]);
  //   let visitStack = [start];

  //   while (visitStack.length) {
  //     let current = visitStack.pop();
  //     acc.push(current.value);

  //     for (let adj of current.adjacent) {
  //       if (!visited.has(adj)) {
  //         visitStack.push(adj);
  //         visited.add(adj);
  //       }
  //     }
  //   }
  //   console.log("THIS IS ACC", acc);
  //   return acc;
  // }
   /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start, acc=[start.value], visited=new Set([start])) {
    if (this.nodes.size === 0) return [];
    let current = start;
 
    for (let adj of current.adjacent) {
        if (!visited.has(adj)) {
          acc.push(adj.value);
          this.depthFirstSearch(adj, acc, visited.add(adj));
        }
      }
      console.log("THIS IS ACC", acc);
      return acc;
    }
  // [S, P, X, U, V, W, Y, R, Q, T]
  // stack: [S, P, X, U, V,W,Y,R,Q]
  // visited: [S, P, X, U, V, W,Y,R,Q]
  // acc: [S, P ,X, U, V, W,Y,R, Q]
  // adjacents: [P, U], [X, Q], [U, V, Y, Q, P], [V, X, S],[W, X, U],[Y,V,T]
  // [R, X, W],[Q, T, Y], [P, X, R]

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {}

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {}
}

module.exports = { Graph, Node };
