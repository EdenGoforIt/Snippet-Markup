# Dynamic Programming Examples with Explanations and Code

This document contains 8 classic dynamic programming (DP) problems, each with:

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
