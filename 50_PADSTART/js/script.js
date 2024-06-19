const testePadStart = '1'

const newNumber = testePadStart.padStart(4, '0');
// Adicionar o tanto de número que quer adicionar e ao lado coloque por qual número esse espaço será preenchido

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, '0');
console.log(testePadEnd);