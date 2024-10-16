function fatorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}


function fibonacci(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function ehPrimo(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { fatorial, fibonacci, ehPrimo };
