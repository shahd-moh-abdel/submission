const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = BigInt(input);
  console.log(fibonacciSquaresSumLastDigit(n));
});

function fibonacciSquaresSumLastDigit(n) {
  if (n === 0n) return 0;

  const period = 60n;
  const reducedN = n % period;

  if (reducedN === 0n) return 0;

  let prev = 0n;
  let curr = 1n;
  let sum = 1n;

  for (let i = 2n; i <= reducedN; i++) {
    const temp = (prev + curr) % 10n;
    prev = curr;
    curr = temp;
    sum = (sum + curr * curr) % 10n;
  }

  return Number(sum);
}
