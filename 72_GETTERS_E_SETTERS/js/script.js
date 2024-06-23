class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo ${this.titulo}`
    }

    set adcTags(tags){
        const tagsArrays = tags.split(', ')
        this.tags = tagsArrays
    }
}

const myPost = new Post('Algum post', 'É um post sobre programação');

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adcTags = 'Programçaõ, JavaScript, JS';

console.log(myPost)