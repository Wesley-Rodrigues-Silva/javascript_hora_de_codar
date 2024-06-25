function checkNumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log('Valor incorreto!');
        return;
    }

    console.log('Valor correto!')
    return;
}

checkNumber(5);
checkNumber('10');
checkNumber({});
checkNumber('teste');