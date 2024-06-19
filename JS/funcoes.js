const voltar = document.getElementById('voltar');
const voltar2 = document.getElementById('voltar2');
const qrcode = document.getElementById('qrcode_chave')
const qrcode2 = document.getElementById('qrcode_chave2')
const pix = document.getElementById('pix')
const pix2 = document.getElementById('pix2')


pix.addEventListener('click', function(){
    qrcode.style.display='block'
})

voltar.addEventListener('click', function(){
    qrcode.style.display='none'
})

pix2.addEventListener('click', function(){
    qrcode2.style.display='block'
})

voltar2.addEventListener('click', function(){
    qrcode2.style.display='none'
})

