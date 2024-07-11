const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [m, n] = input.split(" ").map(BigInt);
  console.log(fibonacciPartialSumLastDigit(m, n));
});

function fibonacciLastDigit(n) {
  if (n <= 1) return Number(n);
  let prev = 0,
    curr = 1;
  for (let i = 2n; i <= n; i++) {
    [prev, curr] = [curr, (prev + curr) % 10];
  }
  return curr;
}

function fibonacciSumLastDigit(n) {
  return (fibonacciLastDigit((n + 2n) % 60n) + 9) % 10;
}

function fibonacciPartialSumLastDigit(m, n) {
  // The pattern of last digit of Fibonacci sum repeats every 60 numbers
  const period = 60n;

  // Calculate S(n) - S(m-1), where S(k) is the sum of first k Fibonacci numbers
  let lastDigitN = fibonacciSumLastDigit(n);
  let lastDigitM = m === 0n ? 0 : fibonacciSumLastDigit(m - 1n);

  return (lastDigitN - lastDigitM + 10) % 10;
}
