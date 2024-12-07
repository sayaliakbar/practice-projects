// O(1): Constant Time Complexity
const arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // 3

// O(log n): Logarithmic Time Complexity
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
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

// O(n): Linear Time Complexity
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(findElement([1, 2, 3, 4, 5], 3)); // 2

// O(n log n): Linearithmic Time Complexity
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
console.log(mergeSort([4, 2, 7, 1, 3])); // [1, 2, 3, 4, 7]

// O(n²): Quadratic Time Complexity
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
console.log(hasDuplicates([1, 2, 3, 4, 2])); // true

// O(2ⁿ): Exponential Time Complexity
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // 5

// O(n!): Factorial Time Complexity
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
console.log(permute([1, 2, 3])); // [[1,2,3], [1,3,2], ...]
