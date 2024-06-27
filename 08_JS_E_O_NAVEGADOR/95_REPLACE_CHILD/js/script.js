const header = document.querySelector('header')

const h2 = document.createElement('h2');

h2.textContent = 'Meu novo titulo!';

header.replaceChild(h2, title);

// Trocar tag e inserir novo texto