// IMC DATA: Definição das faixas de IMC e suas classificações
const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0",
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Normal",
        obesity: "0",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Entre 25,0 e 29,9",
        info: "Sobrepeso",
        obesity: "I",
    },
    {
        min: 30,
        max: 39.9,
        classification: "Entre 30,0 e 39,9",
        info: "Obesidade",
        obesity: "II",
    },
    {
        min: 40,
        max: 99,
        classification: "Maior que 40,0",
        info: "Obesidade grave",
        obesity: "III",
    },
];

// Seleção de elementos do DOM
const imcTable = document.querySelector('#imc-table'); // Tabela para exibir dados do IMC
const heightInput = document.querySelector('#height'); // Input para altura
const weightInput = document.querySelector('#weight'); // Input para peso
const calcBtn = document.querySelector('#calc-btn'); // Botão para calcular IMC
const clearBtn = document.querySelector('#clear-btn'); // Botão para limpar inputs
const calcContainer = document.querySelector('#calc-container'); // Contêiner de cálculo
const resultContainer = document.querySelector('#result-container'); // Contêiner de resultados

const imcNumber = document.querySelector('#imc-number span'); // Elemento para exibir o número do IMC
const imcInfo = document.querySelector('#imc-info span'); // Elemento para exibir a informação do IMC
const backBtn = document.querySelector('#back-btn'); // Botão para voltar à tela de cálculo

// Funções
// Cria a tabela de dados do IMC
function createTable(data) {
    data.forEach((item) => {
        const div = document.createElement('div'); // Cria uma nova div para cada item
        div.classList.add('table-data'); // Adiciona classe para estilização

        const classification = document.createElement('p'); // Parágrafo para classificação
        classification.innerHTML = item.classification;

        const info = document.createElement('p'); // Parágrafo para informação
        info.innerHTML = item.info;

        const obesity = document.createElement('p'); // Parágrafo para obesidade
        obesity.innerHTML = item.obesity;

        div.appendChild(classification); // Adiciona parágrafos à div
        div.appendChild(info);
        div.appendChild(obesity);

        imcTable.appendChild(div); // Adiciona a div à tabela do IMC
    });
}

// Limpa os inputs e resultados
function cleanInputs() {
    heightInput.value = ''; // Limpa o input de altura
    weightInput.value = ''; // Limpa o input de peso
    imcNumber.classList = ''; // Remove classes do número do IMC
    imcInfo.classList = ''; // Remove classes da informação do IMC
}

// Valida os dígitos da entrada, permitindo apenas números e vírgulas
function validDigits(text) {
    return text.replace(/[^0-9,]/g, ''); // Remove caracteres não numéricos
}

// Calcula o IMC com base no peso e altura
function calcImc(weight, height) {
    const imc = (weight / (height * height)).toFixed(1); // Fórmula do IMC
    return imc; // Retorna o IMC calculado
}

// Mostra ou esconde os resultados
function showOrHideResults() {
    calcContainer.classList.toggle('hide'); // Alterna a visibilidade do contêiner de cálculo
    resultContainer.classList.toggle('hide'); // Alterna a visibilidade do contêiner de resultados
}

// Inicialização: Cria a tabela de IMC ao carregar o script
createTable(data);

// Eventos: Adiciona ouvintes de eventos aos inputs
[heightInput, weightInput].forEach((el) => {
    el.addEventListener('input', (e) => {
        const updateValue = validDigits(e.target.value); // Valida a entrada
        e.target.value = updateValue; // Atualiza o valor do input
    });
});

// Evento para o botão de calcular IMC
calcBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevê o comportamento padrão do botão

    const weight = +weightInput.value.replace(',', '.'); // Converte peso para número
    const height = +heightInput.value.replace(',', '.'); // Converte altura para número

    if (!weight || !height) return; // Se peso ou altura forem inválidos, sai da função

    const imc = calcImc(weight, height); // Calcula o IMC
    let info; // Variável para armazenar a informação

    // Determina a classificação do IMC
    data.forEach((item) => {
        if (imc >= item.min && imc <= item.max) info = item.info; // Encontra a informação correspondente
    });

    if (!info) return; // Se não encontrar informação, sai da função

    imcNumber.innerText = imc; // Exibe o IMC calculado
    imcInfo.innerText = info; // Exibe a informação correspondente ao IMC

    // Adiciona classes de estilo baseadas na classificação
    switch (info) {
        case 'Magreza':
            imcNumber.classList.add('low');
            imcInfo.classList.add('low');
            break;
        case 'Normal':
            imcNumber.classList.add('good');
            imcInfo.classList.add('good');
            break;
        case 'Sobrepeso':
            imcNumber.classList.add('low');
            imcInfo.classList.add('low');
            break;
        case 'Obesidade':
            imcNumber.classList.add('medium');
            imcInfo.classList.add('medium');
            break;
        case 'Obesidade grave':
            imcNumber.classList.add('high');
            imcInfo.classList.add('high');
            break;
    }

    showOrHideResults(); // Mostra os resultados
});

// Evento para o botão de limpar inputs
clearBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevê o comportamento padrão do botão
    cleanInputs(); // Limpa os inputs
});

// Evento para o botão de voltar
backBtn.addEventListener('click', () => {
    cleanInputs(); // Limpa os inputs
    showOrHideResults(); // Retorna à tela de cálculo
});
