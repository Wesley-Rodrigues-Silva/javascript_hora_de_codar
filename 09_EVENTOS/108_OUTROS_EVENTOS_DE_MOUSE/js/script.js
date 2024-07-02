const mouseEvents = document.querySelector('#mouse');

mouseEvents.addEventListener('mousedown', () => {
    console.log('Pressionou no mouse')
})

mouseEvents.addEventListener('mouseup', () => {
    console.log('Soltou o mouse')
})

mouseEvents.addEventListener('dblclick', () => {
    console.log('Double Click!')
})