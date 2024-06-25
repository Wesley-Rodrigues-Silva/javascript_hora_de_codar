let y = 10;

function testandoEscopo() {
    let y = 20;

    console.log(`Y dentro da função é ${y}`);
}

testandoEscopo();


console.log(`Y fora da função é ${y}`);

testandoEscopo();