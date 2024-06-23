class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const wesley = new Humano ('Wesley', 26)
console.log(wesley)

Humano.prototype.idade = 'Não definida';

console.log(wesley.idade);
console.log(Humano.prototype.idade);