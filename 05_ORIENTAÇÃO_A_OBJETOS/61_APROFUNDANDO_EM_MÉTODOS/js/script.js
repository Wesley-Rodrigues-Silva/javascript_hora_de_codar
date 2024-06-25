const pessoa = {
    nome: 'Wesley',

    getNome() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },
}

console.log(pessoa.nome)
console.log(pessoa.getNome())
pessoa.setNome('Joaquim')
console.log(pessoa.getNome())