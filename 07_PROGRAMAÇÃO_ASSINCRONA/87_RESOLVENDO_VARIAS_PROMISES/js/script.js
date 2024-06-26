const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 2000);
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject('Erro!')
    }
});

// Executar todas as Promises ao mesmo tempo
Promise.all([p1, p2, p3]).then((values) => console.log(values));