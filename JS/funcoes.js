const voltar = document.getElementById('voltar');
const voltar2 = document.getElementById('voltar2');
const voltar3 = document.getElementById('voltar3');
const voltar4 = document.getElementById('voltar4');
const qrcode = document.getElementById('qrcode_chave')
const qrcode2 = document.getElementById('qrcode_chave2')
const qrcode3 = document.getElementById('qrcode_chave3')
const qrcode4 = document.getElementById('qrcode_chave4')
const pix = document.getElementById('pix')
const pix2 = document.getElementById('pix2')
const pix3 = document.getElementById('pix3')
const pix4 = document.getElementById('pix4')


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

pix3.addEventListener('click', function(){
    qrcode3.style.display='block'
})

voltar3.addEventListener('click', function(){
    qrcode3.style.display='none'
})

pix4.addEventListener('click', function(){
    qrcode4.style.display='block'
})

voltar4.addEventListener('click', function(){
    qrcode4.style.display='none'
})
