const container = document.querySelector('.container')
const qrCodeBtn = document.querySelector('#qr-form button')
const qrCodeIpunt = document.querySelector('#qr-form input')



// Eventos

function generateQrCode(){
    const qrCodeIpuntValue = qrCodeIpunt.value;

    if (!qrCodeIpuntValue) return;

    qrCodeBtn.innerHTML = 'Gerando código...';
}

qrCodeBtn.addEventListener('click', () => {
 generateQrCode()
})