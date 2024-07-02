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