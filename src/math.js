function fatorial(n) {
  if (typeof n === 'string') n = Number(n);
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n < 0) throw new Error("Não existe fatorial de número negativo");
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}


function fibonacci(n) {
  if (typeof n !== 'number' && typeof n !== 'string') throw new TypeError("O argumento deve ser um número válido");
  n = Number(n);
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n <= 0) throw new Error("Não existe fibonacci de número menor ou igual a zero");
  if (n === 1) return 1;
  if (n === 2) return 1;

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}


function ehPrimo(n) {
   if (typeof n !== 'number' && typeof n !== 'string') throw new TypeError("O argumento deve ser um número válido");
  if (typeof n === 'string') n = Number(n);
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n <= 1) throw new Error("Não existe número primo de número menor ou igual a 1");
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true
}

module.exports = {
  fatorial,
  fibonacci, // Certifique-se de que 'fibonacci' está exportado aqui
  ehPrimo
};


// Luis philipe Lopes Oliveira 22214290018