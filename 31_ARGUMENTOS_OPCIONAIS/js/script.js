const multiplaction = function(m, n){
    if(n === undefined){
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplaction(5));
console.log(multiplaction(2, 5));

const greeting = (name) => {
    if(!name) {
        console.log('Olá')
        return
    }

    console.log(`Olá ${name} `)
}

greeting();
greeting('Wesley')