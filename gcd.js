const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [a, b] = input.split(" ").map(Number);
  console.log(gcd(a, b));
});

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
