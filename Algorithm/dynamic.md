# Dynamic Programming Problems – Explained with Examples and Code

---

## 1. Fibonacci Sequence

**Problem:**  
Find the `n`th Fibonacci number where each number is the sum of the two before it.

**DP Idea:**  
Store the results of previous numbers so you don’t recompute them.

🧠 _Think of remembering past steps instead of redoing them._  
💡 _Used in: algorithm warmups, recurrence solving._

```python
def fib(n):
    dp = [0] * (n+1)
    dp[0], dp[1] = 0, 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

print(fib(6))  # ➜ 8
```

---

## 2. Knapsack Problem

**Problem:**  
You have a bag that can carry `W` weight. You’re given items with weights and values. Pick the items to maximize value without exceeding the weight.

**DP Idea:**  
Build a table where `dp[i][w]` is the best value using the first `i` items and max weight `w`.

🎒 _Like packing a hiking bag: what to take to get the most benefit without making it too heavy._

```python
def knapsack(wt, val, W):
    n = len(wt)
    dp = [[0]*(W+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(W+1):
            if wt[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][W]

print(knapsack([1,2,3], [10,15,40], 5))  # ➜ 55
```

---

## 3. Longest Common Subsequence (LCS)

**Problem:**  
Given two strings, find the longest sequence that appears in both (not necessarily consecutive).

**DP Idea:**  
Use a 2D grid to build up matching characters between the two strings.

📜 _Like finding common parts of two different versions of a book._

```python
def lcs(a, b):
    n, m = len(a), len(b)
    dp = [[0]*(m+1) for _ in range(n+1)]
    for i in range(n):
        for j in range(m):
            if a[i] == b[j]:
                dp[i+1][j+1] = 1 + dp[i][j]
            else:
                dp[i+1][j+1] = max(dp[i][j+1], dp[i+1][j])
    return dp[n][m]

print(lcs("abcde", "ace"))  # ➜ 3
```

---

## 4. Shortest Path (Floyd-Warshall)

**Problem:**  
Find the shortest path between all pairs of nodes in a graph.

**DP Idea:**  
Keep updating the shortest path between any two nodes using an intermediate node.

🗺️ _Think of updating best travel times between cities as you discover better routes._

```python
INF = float('inf')
dist = [
    [0, 4, 11],
    [INF, 0, -4],
    [INF, INF, 0]
]
n = 3
for k in range(n):
    for i in range(n):
        for j in range(n):
            if dist[i][j] > dist[i][k] + dist[k][j]:
                dist[i][j] = dist[i][k] + dist[k][j]

for row in dist:
    print(row)
```

---

## 5. Edit Distance

**Problem:**  
Find the minimum operations to convert string A to string B. (Insert, delete, or replace a character)

**DP Idea:**  
Use a table where each cell represents the edit distance between prefixes of the strings.

🔤 _Like correcting a typo with the fewest changes._

```python
def edit_distance(a, b):
    n, m = len(a), len(b)
    dp = [[0]*(m+1) for _ in range(n+1)]
    for i in range(n+1):
        for j in range(m+1):
            if i == 0: dp[i][j] = j
            elif j == 0: dp[i][j] = i
            elif a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[n][m]

print(edit_distance("kitten", "sitting"))  # ➜ 3
```

---

## 6. Matrix Chain Multiplication

**Problem:**  
Given matrices, figure out the best way (order) to multiply them to minimize total computation.

**DP Idea:**  
Try all valid ways to split the sequence and store minimum cost of each split.

🧮 _Like grouping tasks in a way that saves time overall._

```python
def matrix_chain(p):
    n = len(p) - 1
    dp = [[0]*n for _ in range(n)]
    for l in range(2, n+1):
        for i in range(n - l + 1):
            j = i + l - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k+1][j] + p[i]*p[k+1]*p[j+1]
                dp[i][j] = min(dp[i][j], cost)
    return dp[0][n-1]

print(matrix_chain([10, 20, 30, 40]))  # ➜ 18000
```

---

## 7. Coin Change Problem

**Problem:**  
Find the minimum number of coins to make a specific amount with unlimited supply of given denominations.

**DP Idea:**  
Build a table from amount 0 to target using the smallest coins possible.

💰 _Like getting change from a vending machine with the least coins._

```python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount+1)
    dp[0] = 0
    for coin in coins:
        for x in range(coin, amount+1):
            dp[x] = min(dp[x], dp[x - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1,2,5], 11))  # ➜ 3
```

---

## 8. Sequence Alignment (Bioinformatics)

**Problem:**  
Align two DNA or protein sequences to find how similar they are.

**DP Idea:**  
Similar to Edit Distance, build a score grid for matches, mismatches, and gaps.

🧬 _Like comparing two DNA strands to see where they differ._

```python
def sequence_alignment(a, b):
    match, mismatch, gap = 1, -1, -2
    n, m = len(a), len(b)
    dp = [[0]*(m+1) for _ in range(n+1)]

    for i in range(n+1): dp[i][0] = i * gap
    for j in range(m+1): dp[0][j] = j * gap

    for i in range(1, n+1):
        for j in range(1, m+1):
            if a[i-1] == b[j-1]:
                score = match
            else:
                score = mismatch
            dp[i][j] = max(
                dp[i-1][j-1] + score,
                dp[i-1][j] + gap,
                dp[i][j-1] + gap
            )

    return dp[n][m]

print(sequence_alignment("AGT", "AGGT"))  # ➜ 1
```

---
