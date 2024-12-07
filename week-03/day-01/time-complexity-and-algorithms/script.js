let array = [2, 4, 6, 8]; //1
console.log(sum(array)); // 1

// function sum(array) {
//   //1
//   let sum = 0; //1
//   for (let i = 0; i < array.length; i++) {
//     //1
//     sum += array[i]; //n
//   }
//   return sum; //1
// }

//Asymptotic Analysis
// T = 1+1+1+1+1+n+1 (Writing all the times)
// T = 6+n (Summing all the times)
// T = 6+1*n (Resulting)
// T = 1*n + b (Define the funtion-a*n + b)
// T = a*n (Find the fastest growing term - a * n)
// T = n (Removing co-efficient - a)
