// Colocar um tempo para execução dos eventos

const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setInterval(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener
    ('mousemove', 
    debounce(() => {
        console.log('Executando a tarefa')
}, 400))