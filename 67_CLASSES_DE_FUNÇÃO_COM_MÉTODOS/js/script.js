function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro('Ozzy', 'Husk')
console.log(husky)

Cachorro.prototype.uivar = function(){
    console.log('auuu!');
}

husky.uivar();