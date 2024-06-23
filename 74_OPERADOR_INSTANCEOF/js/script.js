class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, 'Shark')

console.log(shark);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, 'teste') instanceof Mamifero);

