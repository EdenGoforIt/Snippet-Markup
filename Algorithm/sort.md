# index

## selection sort

- O(n2)
- pick the lowest number from the list continuously
- **Algorithm Steps:**
  1. Start from the first element.
  2. Find the minimum element in the unsorted part of the list.
  3. Swap it with the first unsorted element.
  4. Move the boundary of the sorted part one step forward.
  5. Repeat until the list is sorted.

**Step-by-step example with [3, 1, 2]:**

| Step | i   | min_idx | Array before swap | Array after swap |
| ---- | --- | ------- | ----------------- | ---------------- |
| 0    | 0   | 1       | [3, 1, 2]         | [1, 3, 2]        |
| 1    | 1   | 2       | [1, 3, 2]         | [1, 2, 3]        |
| 2    | 2   | 2       | [1, 2, 3]         | [1, 2, 3]        |

**Detailed steps:**

1. i = 0: min_idx = 1 (1 is smallest), swap arr[0] and arr[1] → [1, 3, 2]
2. i = 1: min_idx = 2 (2 is smallest in [3,2]), swap arr[1] and arr[2] → [1, 2, 3]
3. i = 2: already sorted

- **Python Example:**
  ```python
  def selection_sort(arr):
      n = len(arr)
      for i in range(n):
          min_idx = i
          for j in range(i+1, n):
              if arr[j] < arr[min_idx]:
                  min_idx = j
          arr[i], arr[min_idx] = arr[min_idx], arr[i]
      return arr
  ```

## Insertion sort

- O(n2)
- pick one by one and put that into the right place
- **Algorithm Steps:**
  1. Start from the second element.
  2. Compare the current element with the elements before it.
  3. Shift larger elements one position to the right.
  4. Insert the current element into its correct position.
  5. Repeat for all elements.

**Step-by-step example with [3, 1, 2]:**

| Step | i   | key | Array after shifts | Array after insert |
| ---- | --- | --- | ------------------ | ------------------ |
| 0    | -   | -   | [3, 1, 2]          | [3, 1, 2]          |
| 1    | 1   | 1   | [3, 3, 2]          | [1, 3, 2]          |
| 2    | 2   | 2   | [1, 3, 3]          | [1, 2, 3]          |

**Detailed steps:**

1. Initial: `[3, 1, 2]`
2. i = 1, key = 1:
   - Compare 1 < 3 → shift 3 right → `[3, 3, 2]`
   - Insert 1 at position 0 → `[1, 3, 2]`
3. i = 2, key = 2:
   - Compare 2 < 3 → shift 3 right → `[1, 3, 3]`
   - Compare 2 > 1 → stop
   - Insert 2 at position 1 → `[1, 2, 3]`
4. Done: `[1, 2, 3]`

- **Python Example:**
  ```python
  def insertion_sort(arr):
      for i in range(1, len(arr)):
          key = arr[i]
          j = i - 1
          # The outer loop starts from 1, but the inner loop needs to check all previous elements (from j down to 0)
          # So we use while j >= 0 to compare key with every element before position i
          while j >= 0 and arr[j] > key:
              arr[j + 1] = arr[j]
              j -= 1
          arr[j + 1] = key
      return arr
  ```

## Merge Sort

- O(n logn)
- group them continuously and finally merge
- **Algorithm Steps:**
  1. Divide the list into two halves.
  2. Recursively sort each half.
  3. Merge the two sorted halves into one sorted list.

**Step-by-step example with [3, 1, 2]:**

1. Split: [3, 1, 2] → [3] and [1, 2]
2. [1, 2] splits to [1] and [2]
3. Merge [1] and [2] → [1, 2]
4. Merge [3] and [1, 2]:
   - Compare 3 and 1 → 1 goes first
   - Compare 3 and 2 → 2 goes next
   - 3 is left, goes last
   - Result: [1, 2, 3]

- **Python Example:**
  ```python
  def merge_sort(arr):
      if len(arr) > 1:
          mid = len(arr) // 2
          L = arr[:mid]
          R = arr[mid:]
          merge_sort(L)
          merge_sort(R)
          i = j = k = 0
          while i < len(L) and j < len(R):
              if L[i] < R[j]:
                  arr[k] = L[i]
                  i += 1
              else:
                  arr[k] = R[j]
                  j += 1
              k += 1
          while i < len(L):
              arr[k] = L[i]
              i += 1
              k += 1
          while j < len(R):
              arr[k] = R[j]
              j += 1
              k += 1
      return arr
  ```

## Quick sort

- O(n logn)
- select a mid point and call that recursively
- **Algorithm Steps:**
  1. Pick a pivot element from the list.
  2. Partition the list into two sublists: elements less than the pivot and elements greater than the pivot.
  3. Recursively apply the above steps to the sublists.
  4. Combine the sorted sublists and the pivot.

**Step-by-step example with [3, 1, 2]:**

1. Array: [3, 1, 2], pivot = 1 (middle element)
   - left: []
   - middle: [1]
   - right: [3, 2]
2. Recursively sort right: [3, 2], pivot = 2
   - left: []
   - middle: [2]
   - right: [3]
3. Combine: [] + [2] + [3] = [2, 3]
4. Combine all: [] + [1] + [2, 3] = [1, 2, 3]

- **Python Example:**
  ```python
  def quick_sort(arr):
      if len(arr) <= 1:
          return arr
      pivot = arr[len(arr) // 2]
      left = [x for x in arr if x < pivot]
      middle = [x for x in arr if x == pivot]
      right = [x for x in arr if x > pivot]
      return quick_sort(left) + middle + quick_sort(right)
  ```

## bubble sort

- O(n2)
- compare with the next item and swap if lower
- **Algorithm Steps:**
  1. Start at the beginning of the list.
  2. Compare each pair of adjacent elements.
  3. Swap them if they are in the wrong order.
  4. Repeat for all elements, reducing the range each time.
  5. Continue until no swaps are needed.

**Step-by-step example with [3, 1, 2]:**

| Pass | j comparisons          | Array after swaps |
| ---- | ---------------------- | ----------------- |
| 1    | (3>1) swap, (3>2) swap | [1, 2, 3]         |
| 2    | (1>2) no swap          | [1, 2, 3]         |

**Detailed steps:**

1. First pass:
   - Compare 3 > 1 → swap → [1, 3, 2]
   - Compare 3 > 2 → swap → [1, 2, 3]
2. Second pass:
   - Compare 1 > 2 → no swap
3. Array is sorted: [1, 2, 3]

- **Python Example:**
  ```python
  def bubble_sort(arr):
      n = len(arr)
      for i in range(n):
          for j in range(0, n-i-1):
              if arr[j] > arr[j+1]:
                  arr[j], arr[j+1] = arr[j+1], arr[j]
      return arr
  ```
