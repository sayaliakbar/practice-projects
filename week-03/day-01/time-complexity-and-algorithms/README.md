# Introduction to Algorithms and Time Complexity

## 📚 What is an Algorithm?

An **algorithm** is simply a step-by-step set of instructions to solve a specific problem. Think of it like a recipe for baking a cake or a checklist to assemble furniture. In coding, algorithms help us write efficient programs to solve problems like searching for an item in a list, sorting data, or finding the shortest route between two points.

---

## ⏱️ What is Time Complexity?

When we write an algorithm, we want to know how much time it will take to complete. **Time complexity** measures how the running time of an algorithm increases as the size of the input grows.

For example:

- Searching for your name in a list of 10 names takes less time than searching in a list of 1,000 names.
- Sorting 100 numbers takes less time than sorting 10,000 numbers.

Time complexity is expressed using **Big O Notation**, which gives us an idea of the algorithm's performance as the input size grows larger.

---

## Why is Time Complexity Important?

In real-world applications:

- **Efficiency matters**: Faster algorithms save time and computing resources.
- **Scalability**: Some algorithms work well for small inputs but become too slow for large inputs.

Understanding time complexity helps you choose the right approach for your problem.

---

## Examples of Time Complexities

Here are common time complexities with real-life analogies and examples:

| Time Complexity | Description       | Analogy                                                                     |
| --------------- | ----------------- | --------------------------------------------------------------------------- |
| **O(1)**        | Constant time     | Finding the first page of a book — you just open the cover.                 |
| **O(log n)**    | Logarithmic time  | Searching for a word in a dictionary by dividing it into halves.            |
| **O(n)**        | Linear time       | Reading a book page by page.                                                |
| **O(n log n)**  | Linearithmic time | Organizing books using divide-and-conquer strategies.                       |
| **O(n²)**       | Quadratic time    | Comparing every page in one book with every page in another book.           |
| **O(2ⁿ)**       | Exponential time  | Doubling your task every step, like adding a new branch to a decision tree. |
| **O(n!)**       | Factorial time    | Trying every possible combination of books on a shelf.                      |

---

## 🛠️ Code Examples

### O(1): Constant Time Complexity

Accessing an element in an array by index is always constant time:

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // 3
```

---

### O(log n): Logarithmic Time Complexity

Binary search divides the search space in half at each step:

```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Example usage:
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
```

---

### O(n log n): Linearithmic Time Complexity

Merge sort is an example of **O(n log n)** sorting algorithm:

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right);
}

// Example usage:
console.log(mergeSort([4, 2, 7, 1, 3])); // [1, 2, 3, 4, 7]
```

---

### O(n²): Quadratic Time Complexity

Nested loops cause quadratic time complexity:

```javascript
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// Example usage:
console.log(hasDuplicates([1, 2, 3, 4, 2])); // true
```

---

### O(2ⁿ): Exponential Time Complexity

Recursive Fibonacci calculation:

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(5)); // 5
```

---

### O(n!): Factorial Time Complexity

Brute force solution to the traveling salesman problem:

```javascript
function permute(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (let perm of permute(rest)) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

// Example usage:
console.log(permute([1, 2, 3])); // [[1,2,3], [1,3,2], ...]
```

---

### Optimizations

- **Memoization**: Avoid redundant calculations, e.g., in Fibonacci.
- **Divide and Conquer**: Use efficient sorting algorithms like merge sort.
- **Data Structures**: Use hash maps for faster lookups.
