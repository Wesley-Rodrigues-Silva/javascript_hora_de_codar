const myJson = '{"name": "Wesley", "age": 26, "skills": ["PHP", "JavaScript", "Python"]}'

const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// json invalido
const badJson = {"Name": 'Wesley', "age": 31};
// está faltando as aspas na string "Wesley"

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);