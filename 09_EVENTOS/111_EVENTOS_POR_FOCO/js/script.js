const input = document.querySelector('#my-input');

input.addEventListener('focus', (e) => {
    console.log('Entrou no Input');
})

input.addEventListener('blur', (e) => {
    console.log('Saiu do Input');
})