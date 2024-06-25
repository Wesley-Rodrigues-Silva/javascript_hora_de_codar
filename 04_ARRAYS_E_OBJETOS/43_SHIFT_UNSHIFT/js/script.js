const letters = ['a', 'b', 'c'];

const letter = letters.shift();
console.log(letter);
console.log(letters);

letters.unshift('p', 'q', 'r');

letters.unshift('z');

console.log(letters)

// shift pegar o primeiro elemento da array
// unshift adicionar elementos no inicio do array