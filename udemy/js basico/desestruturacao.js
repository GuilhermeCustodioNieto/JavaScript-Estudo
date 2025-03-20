const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [primeiro, segundo, ...resto] = numeros

console.log(primeiro, segundo);
console.log(`O resto é ${resto}`);
