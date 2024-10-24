// Declara uma função tradicional que soma dois números
const sum = function(a, b) {
    return a + b; // Retorna a soma de 'a' e 'b'
}

// Declara uma função de seta (arrow function) que também soma dois números
const arrowSum = (a, b) => a + b; // Retorna a soma de 'a' e 'b' de forma concisa

// Aqui, o console.log não está correto, pois ele deve chamar a função
// O correto seria: console.log(sum(5, 5)); para ver o resultado da soma
console.log((5, 5)); // Isso apenas avalia (5, 5) e não imprime nada útil

// Chama a função de seta com os argumentos 5 e 5 e imprime o resultado
console.log(arrowSum(5, 5)); // Saída: 10

// Função de saudação que verifica se um nome foi passado
const greeting = (name) => {
    if (name) { // Se um nome foi fornecido
        return `Hello ${name}!`; // Retorna uma saudação personalizada
    } else {
        return 'Hello'; // Retorna uma saudação genérica
    }
};

// Chama a função de saudação passando 'Matheus' e imprime o resultado
console.log(greeting('Matheus')); // Saída: Hello Matheus!

// Chama a função de saudação sem passar nome e imprime o resultado
console.log(greeting()); // Saída: Hello

// Criação de um objeto 'user'
const user = {
    name: 'Theo', // Propriedade 'name' com valor 'Theo'
    
    // Método que utiliza uma função tradicional para imprimir o nome após 1 segundo
    sayUseName() {
        setTimeout(function() {
            console.log(this); // 'this' se refere ao contexto do setTimeout, não ao objeto user
            console.log(`Username: ${this.name}`); // 'this.name' será undefined, pois 'this' não é o objeto user
        }, 1000);
    },

    // Método que utiliza uma função de seta para imprimir o nome após 2 segundos
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this); // 'this' se refere ao objeto user, pois a função de seta mantém o contexto léxico
            console.log(`Username: ${this.name}`); // 'this.name' será 'Theo'
        }, 2000);
    },
};

// Chama o método sayUseName (resultados podem ser inesperados devido ao escopo de 'this')
user.sayUseName(); // Após 1 segundo, imprime: undefined (para 'this.name')
user.sayUserNameArrow(); // Após 2 segundos, imprime: Theo (para 'this.name')
