// Seleção de elementos
const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplication')
const multiplicationTitle = document.querySelector('#multiplication-title span')
const multiplicationTable = document.querySelector('#multiplication-operations')

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = '';

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const templete = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser()

        const htmlTemplete = parser.parseFromString(templete, "text/html")

        const row = htmlTemplete.querySelector('.row');

        multiplicationTable.appendChild(row);
}
    multiplicationTitle.innerHTML = number;
};

// Eventos
multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)

})