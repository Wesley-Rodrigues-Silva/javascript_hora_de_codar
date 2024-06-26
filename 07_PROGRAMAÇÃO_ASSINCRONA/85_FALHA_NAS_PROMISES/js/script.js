const promessa = Promise.resolve(5 + 5);

console.log('Algum código');

promessa
    .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
})

.then((value) => value - 1)
.then((value) => console.log(`Agora o valor é ${value}`));

console.log('Outro valor');