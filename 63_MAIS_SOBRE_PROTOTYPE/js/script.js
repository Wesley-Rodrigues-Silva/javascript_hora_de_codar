const myObject = {
    a: 'b',
};

console.log(Object.getPrototypeOf(myObject));

const mySecondObject = Object.create(myObject) // Copiar o objeto

console.log(mySecondObject);

console.log(mySecondObject.a);


// Copiando objeto ele herda tudo do objeto pai