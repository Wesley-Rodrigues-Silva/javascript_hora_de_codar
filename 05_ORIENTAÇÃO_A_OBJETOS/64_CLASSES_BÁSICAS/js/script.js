const cachorro = {
    raca: null,
    patas:4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemão';

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = 'Bulldog';

console.log(bulldog)