let txt =document.querySelector('.txt');
let genBtn =document.querySelector('.genBtn');
let qrBody =document.querySelector('.qrBody');
let dowBtn =document.querySelector('.dowBtn');


genBtn.addEventListener('click',()=>{

    if(txt.value.length > 0){
        let displypBtn =dowBtn.style.display='block';
        generatorQR() && displypBtn
    }

})

const generatorQR = () =>{
    qrBody.innerHTML=''
    new QRCode(qrBody,{
        text:txt.value,
        height:'260',
        width:'260',
        colorLight:'#fff',
        colorDark:'#000'
    })
}



dowBtn.addEventListener('click',()=>{
    let img =document.querySelector('.qrBody img');

    if(img !== null){
        let  imgAtrr = img.getAttribute('src');
        dowBtn.setAttribute("href",imgAtrr);
        
    }else{
        dowBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})

