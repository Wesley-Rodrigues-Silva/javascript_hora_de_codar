const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}!`
}

console.log(customGreeting('Wesley'));
console.log(customGreeting('João', 'Bom dia'));

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text)
    };
};
repeatText('Testando');
repeatText('Agora repete as 5 vezes', 5);