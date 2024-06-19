const user = {
    firstName:'Wesley',
    lastName: 'Rodrigues',
    job: 'Programador'
}

const {firstName, lastName, job} = user;

console.log(firstName, lastName, job)

// renomear as variaveis
const {firstName: primeiroNome} = user;

console.log(firstName);