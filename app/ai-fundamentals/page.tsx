import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Fundamentals | Artificial Intelligence Basics | Seekho With Rua",
  description:
    "Learn AI Fundamentals including intelligent agents, search algorithms (A*, BFS, DFS), knowledge representation, and automated planning. Master the foundations of AI with Seekho With Rua.",

  keywords: [
    "AI fundamentals",
    "artificial intelligence basics",
    "intelligent agents",
    "search algorithms",
    "A* algorithm",
    "knowledge representation",
    "automated planning",
    "AI course",
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/ai-fundamentals",
  },

  openGraph: {
    title: "AI Fundamentals | Seekho With Rua",
    description:
      "Master AI Fundamentals: agents, search algorithms, knowledge representation, and automated planning.",
    url: "https://seekhowithrua.com/ai-fundamentals",
    type: "website",
  },
};

export default function AIFundamentals() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">
        🤖 Artificial Intelligence Fundamentals
      </h1>

      <p className="mt-4 text-lg">
        A comprehensive introduction to AI concepts, history, and applications. 
        Learn about intelligent agents, search algorithms, knowledge representation, 
        and the foundations of modern AI systems.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        📚 Course Modules
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li><strong>Introduction to AI:</strong> History, applications, and AI types</li>
        <li><strong>Intelligent Agents:</strong> Agent architectures and environments</li>
        <li><strong>Search Algorithms:</strong> BFS, DFS, A*, heuristic search</li>
        <li><strong>Knowledge Representation:</strong> Logic, ontologies, semantic networks</li>
        <li><strong>Planning & Reasoning:</strong> Automated planning systems</li>
        <li><strong>Game Theory:</strong> Minimax, alpha-beta pruning</li>
        <li><strong>Constraint Satisfaction:</strong> CSPs and backtracking</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        💻 Python Implementation Example
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto text-sm">
{`# A* Search Algorithm Implementation
import heapq

class Node:
    def __init__(self, state, parent=None, g=0, h=0):
        self.state = state
        self.parent = parent
        self.g = g  # Cost from start
        self.h = h  # Heuristic to goal
        self.f = g + h
    
    def __lt__(self, other):
        return self.f < other.f

def astar_search(start, goal, neighbors_func, heuristic):
    open_set = [Node(start, g=0, h=heuristic(start, goal))]
    closed_set = set()
    
    while open_set:
        current = heapq.heappop(open_set)
        
        if current.state == goal:
            path = []
            while current:
                path.append(current.state)
                current = current.parent
            return path[::-1]
        
        closed_set.add(current.state)
        
        for neighbor, cost in neighbors_func(current.state):
            if neighbor in closed_set:
                continue
            
            g = current.g + cost
            h = heuristic(neighbor, goal)
            node = Node(neighbor, current, g, h)
            heapq.heappush(open_set, node)
    
    return None

def manhattan_distance(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

# Usage
start = (0, 0)
goal = (5, 5)
result = astar_search(start, goal, get_neighbors, manhattan_distance)
print(f"Path found: {result}")`}
      </pre>

      <div className="mt-10 p-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg">
        <h3 className="text-xl font-bold mb-4">🎯 Learning Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-blue-300">Understanding AI</h4>
            <p className="text-sm">Master the core concepts and history of artificial intelligence</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-purple-300">Search Algorithms</h4>
            <p className="text-sm">Implement A*, BFS, DFS, and heuristic search methods</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-green-300">Knowledge Systems</h4>
            <p className="text-sm">Build knowledge representation and reasoning systems</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-yellow-300">Real Projects</h4>
            <p className="text-sm">Apply AI concepts to real-world problem solving</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a 
          href="https://app.seekhowithrua.com/signup"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
        >
          🚀 Enroll in AI Fundamentals →
        </a>
      </div>
    </main>
  );
}
