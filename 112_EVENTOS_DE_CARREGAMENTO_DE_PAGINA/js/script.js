window.addEventListener('load', () => {
    console.log('Carregou a página');
})

window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    e.returnValue = ''
})