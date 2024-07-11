const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(fiboacciNumber(input));
});

function fiboacciNumber(number) {
  const n = parseInt(number);
  if (n === 0) return n;
  const fiboacciArraay = [];
  fiboacciArraay.push(0);
  fiboacciArraay.push(1);

  for (let i = 2; i <= n; i++) {
    fiboacciArraay.push(fiboacciArraay[i - 1] + fiboacciArraay[i - 2]);
  }
  return fiboacciArraay[fiboacciArraay.length - 1];
}
