// Seleciona o elemento com a classe 'container' e o armazena na variável 'container'
const container = document.querySelector('.container')

// Seleciona o botão dentro do formulário com o id 'qr-form' e o armazena na variável 'qrCodeBtn'
const qrCodeBtn = document.querySelector('#qr-form button')

// Seleciona o campo de entrada dentro do formulário com o id 'qr-form' e o armazena na variável 'qrCodeIpunt'
const qrCodeIpunt = document.querySelector('#qr-form input')

// Seleciona a imagem dentro do elemento com o id 'qr-code' e a armazena na variável 'qrCodeImg'
const qrCodeImg = document.querySelector('#qr-code img')

// Função para gerar o QR Code
function generateQrCode(){
    // Obtém o valor atual do campo de entrada
    const qrCodeIpuntValue = qrCodeIpunt.value;

    // Se o campo de entrada estiver vazio, a função é encerrada sem fazer nada
    if (!qrCodeIpuntValue) return;

    // Altera o texto do botão para indicar que o QR Code está sendo gerado
    qrCodeBtn.innerHTML = 'Gerando código...';

    // Define a URL da imagem do QR Code, incluindo o valor do campo de entrada como dados
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeIpuntValue}`

    // Adiciona um evento de 'load' à imagem para executar um código quando a imagem for carregada
    qrCodeImg.addEventListener('load', () => {
        // Adiciona a classe 'active' ao elemento 'container', mostrando o QR Code
        container.classList.add('active');
        // Altera o texto do botão para indicar que o QR Code foi gerado
        qrCodeBtn.innerHTML = 'Código gerado!';
    })
}

// Adiciona um evento de 'click' ao botão para gerar o QR Code quando o botão for clicado
qrCodeBtn.addEventListener('click', () => {
    generateQrCode()
})

// Adiciona um evento de 'keydown' ao campo de entrada para gerar o QR Code quando a tecla 'Enter' for pressionada
qrCodeIpunt.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
        generateQrCode()
    }
})

// Adiciona um evento de 'keyup' ao campo de entrada para limpar a área do QR Code quando o campo estiver vazio
qrCodeIpunt.addEventListener('keyup', () => {
    if(!qrCodeIpunt.value) {
        // Remove a classe 'active' do elemento 'container', ocultando o QR Code
        container.classList.remove('active')
        // Altera o texto do botão de volta para 'Gerar QR Code'
        qrCodeBtn.innerText = 'Gerar QR Code'
    }
})
