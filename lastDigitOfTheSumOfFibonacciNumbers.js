const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = BigInt(input);
  console.log(fibonacciSumLastDigit(n));
});

function fibonacciSumLastDigit(n) {
  if (n <= 1n) return Number(n);

  const period = 60n;
  const reducedN = n % period;

  if (reducedN === 0n) return 0;

  let prev = 0;
  let curr = 1;
  let sum = 1;

  for (let i = 2n; i <= reducedN; i++) {
    const temp = (prev + curr) % 10;
    prev = curr;
    curr = temp;
    sum = (sum + curr) % 10;
  }

  return sum;
}
