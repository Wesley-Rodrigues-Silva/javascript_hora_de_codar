let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log('Executou o loop');

debugger;

if (c > 5) {
    c = 25;
}