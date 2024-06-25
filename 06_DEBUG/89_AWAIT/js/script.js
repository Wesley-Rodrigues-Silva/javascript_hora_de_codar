function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a Promise');
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log('Chamando a Promise, esperando o resultado!');
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();