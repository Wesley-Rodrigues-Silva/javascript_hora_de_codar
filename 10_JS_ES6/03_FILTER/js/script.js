// Define um array com números de 1 a 6
const arr = [1, 2, 3, 4, 5, 6];

// Filtra os números do array que são maiores ou iguais a 3
const highNumbers = arr.filter((n) => {
    // A função callback é chamada para cada elemento 'n' do array
    if (n >= 3) {
        // Se 'n' for maior ou igual a 3, ele é retornado
        return n; // Isso retorna 'true', mantendo o número no novo array
    }
});

// Exibe os números filtrados que são maiores ou iguais a 3
console.log(highNumbers); // Resultado: [3, 4, 5, 6]

// Define um array de objetos, cada um representando um usuário com um nome e disponibilidade
const users = [
    {name: 'Matheus', available: true},
    {name: 'João', available: false},
    {name: 'Messias', available: true},
    {name: 'Wesley', available: false},
    {name: 'Ronaldo', available: true},
];

// Filtra os usuários que estão disponíveis (available: true)
const availableUsers = users.filter((user) => user.available);

// Exibe os usuários que estão disponíveis
console.log(availableUsers); 
// Resultado: [{name: 'Matheus', available: true}, {name: 'Messias', available: true}, {name: 'Ronaldo', available: true}]
