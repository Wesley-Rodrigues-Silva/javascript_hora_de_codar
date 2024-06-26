async function somar (a, b) {
    return a + b;
}

somar(2, 4).then((value) => console.log(`A soma entre os números é ${value}`));

console.log('Teste Async')