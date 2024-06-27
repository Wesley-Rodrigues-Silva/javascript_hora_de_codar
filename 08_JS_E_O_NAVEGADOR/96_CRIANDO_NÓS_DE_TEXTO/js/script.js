const mainContainer = document.querySelector('#main-container');

const myText = document.createTextNode('Agora vamos adicionar mais um título');

console.log(myText);

const h3 = document.createElement('h3');

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3)

// adicionar uma nova tag, elemento