# Search

1. Informed (Heuristic search)
2. Uninformed (Blind Search)
3. Optimal
4. Any Path

### Trees

> Trees are the subclass of the graph
> Tree doesn't allow loop

### Graph

Directed graphs (one way)

undirected graph (two ways)
loops allowed and node can have multiple parents

## MinHeap

A MinHeap is a binary heap where the value of each node is greater than or equal to the value of its parent. The smallest value is always at the root of the tree.

## MaxHeap

A MaxHeap is a binary heap where the value of each node is less than or equal to the value of its parent. The largest value is always at the root of the tree.

### worst case for all searches

worst case running time

> b^d+1. d is death and b is branching factor

worse case space

- dominant factor is the maximum size of the Q

depth first search worst case space => d\*b
because (d) depth of tree can have two siblings.

breath first search visited - expanded

any path means it doesn't have predetermined path but explore the path

any path + unfinformed = depth first, breath first
any path + informed = best first
optimal + uninformed = uniform-cost

### uniform cost search

- similar to best search search but uniform cost search uses the total cost rather than the state cost.
- path length only

### A(\*) (Star) Algorithm

f(bs) = g(s-> b) + heuristic value from (b-g);
path length + heuristics
UC with the admissible estimate -> a\*

- no bias towards the goal (it only use path length and heuristics without ordering of the Q)
