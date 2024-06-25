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

try {
    const soma = x + y;
} catch(error) {
    console.log(`Erro no programa ${error}`);
}

try {
    const value = checkNumber(1);
    
    if (!value) {
        throw new Error('Valores inválidos');
    }
} catch(error) {
    console.log(`Opa, aconteceu um problema: ${error}`)
} finally {
    console.log('O código foi executado!')
}