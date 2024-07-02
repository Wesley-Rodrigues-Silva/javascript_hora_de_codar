const btn = document.querySelector('#btn-second')

// para remover evento é necessário criar a função
function imprimirMensagem() {
    console.log('teste');
}

btn.addEventListener('click', imprimirMensagem);

const twoBtn = document.querySelector('#other-btn');

twoBtn.addEventListener('click', () => {
    console.log('Evento removido');
    btn.removeEventListener('click', imprimirMensagem);
})


const myTitle = document.querySelector('#title');

myTitle.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.ofsetX);
    console.log(e.pointerType);
    console.log(e.target);
})