const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let idX = 0;
let idY = 0;
let ini = 0;

function rgbRandom(){
    const letras = '0123456789abcdef';
    let colorRGb ='#';
    for (let i = 0; i < 6; i++) {
        colorRGb += letras.charAt(Math.floor(Math.random() * 16));
        
    }
    return colorRGb;
}

function hsColor(h){
    return `hsl(${h},50%,50%`;
}

function cuadro(x, y) {
    ctx.fillStyle = hsColor(ini);
    ini += 5;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40);
}


setInterval(() => {
    cuadro(idX, idY);
    if (idX < 360) {
        idX += 40;
    } else {
        idY += 40;
        idX = 0;
    }
},  100);