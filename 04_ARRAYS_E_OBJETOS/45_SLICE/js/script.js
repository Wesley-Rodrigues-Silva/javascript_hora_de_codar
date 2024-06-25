const testeSlice = ['a', 'b,','c', 'd', 'e', 'f'];
const subArray = testeSlice.slice(2, 4)
console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20) //gera uma lista vazia, pois não existe esses valores na lista.
console.log(subArray3)

const subArray4 = [testeSlice.slice(2)]; // inicia do segundo elemento
console.log(subArray4)