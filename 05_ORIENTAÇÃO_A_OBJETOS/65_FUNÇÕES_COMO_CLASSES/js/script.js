function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro;
}

const bob = criarCachorro('Bob', 'Vira lata');

console.log(bob)

const jack = criarCachorro('Jack', 'Poodle')

console.log(jack)