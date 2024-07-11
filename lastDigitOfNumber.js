const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(fiboacciNumber(input));
});

function fiboacciNumber(n) {
  if (n <= 1) {
    return parseInt(n);
  }

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let temp = (previous + current) % 10;
    previous = current;
    current = temp;
  }

  return current;
}
