const somaInfita = (...args) => {
    let total = 0;

    for(num of args) {
        total += num
    }

    return total;
}

console.log(somaInfita(1, 2, 3));