const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [n, m] = input.split(" ").map(Number);
  console.log(fibonacciModulo(n, m));
});

function getPisanoPeriodLength(m) {
  let previous = 0;
  let current = 1;
  let periodLength = 0;

  for (let i = 0; i < m * m; i++) {
    let temp = (previous + current) % m;
    previous = current;
    current = temp;

    if (previous === 0 && current === 1) {
      periodLength = i + 1;
      break;
    }
  }
  return periodLength;
}

function fibonacciModulo(n, m) {
  // Find the length of the Pisano period
  const periodLength = getPisanoPeriodLength(m);

  // Reduce n modulo the period length
  n = n % periodLength;

  // Compute the n-th Fibonacci number modulo m
  if (n <= 1) {
    return n;
  }

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let temp = (previous + current) % m;
    previous = current;
    current = temp;
  }

  return current;
}
