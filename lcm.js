function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [a, b] = input.split(" ").map(Number);

  if (
    a < 1 ||
    b < 1 ||
    a > 10 ** 7 ||
    b > 10 ** 7 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  ) {
    rl.close();
  } else {
    const result = lcm(a, b);
    console.log(result);
  }

  rl.close();
});
