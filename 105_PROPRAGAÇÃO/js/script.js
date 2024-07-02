const containerBtn = document.querySelector('#btn-container');
const btnInsideContainer = document.querySelector('#div-btn');

containerBtn.addEventListener('click', () => {
    console.log('Evento 1');
})

btnInsideContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Evento 2')
})