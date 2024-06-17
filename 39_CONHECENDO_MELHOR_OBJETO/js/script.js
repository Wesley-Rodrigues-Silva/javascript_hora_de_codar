const obj = {
    a: 'Teste',
    b: true
}
console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2)

console.log(Object.keys (obj));
console.log(Object.keys (obj2));
console.log(Object.entries(obj));