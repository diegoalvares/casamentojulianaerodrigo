const voltar = document.getElementById('voltar');
const qrcode = document.getElementById('qrcode_chave')
const pix = document.getElementById('pix')


pix.addEventListener('click', function(){
    qrcode.style.display='block'
})

voltar.addEventListener('click', function(){
    qrcode.style.display='none'
})

