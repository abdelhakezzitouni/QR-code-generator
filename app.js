document.addEventListener('DOMContentLoaded', () => {
    let txt = document.querySelector('.txt');
    let genBtn = document.querySelector('.genBtn');
    let qrBody = document.querySelector('.qrBody');
    let dowBtn = document.querySelector('.dowBtn');

    genBtn.addEventListener('click', () => {
        if (txt.value.length > 0) {
            generateQR();
            dowBtn.style.display = 'block'; // Show the download button after generating QR
        }
    });

    const generateQR = () => {
        qrBody.innerHTML = '';
        new QRCode(qrBody, {
            text: txt.value,
            height: 260,
            width: 260,
            colorLight: '#fff',
            colorDark: '#000'
        });

        // Short delay to ensure the QR code is fully generated
        setTimeout(() => {
            let canvas = qrBody.querySelector('canvas');
            if (canvas) {
                dowBtn.setAttribute('href', canvas.toDataURL('image/png'));
            }
        }, 100); // Short delay to ensure the image is fully created
    };

    dowBtn.addEventListener('click', () => {
        // No need to update href here as it is set in generateQR
    });
});
