const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirX = 1;
let dirY = 1;

let idx = 10;
let idy = 10;

let ini = 0;

function hslColor(h){
    return `hsl(${ h },70%,50%)`;
}

function cuadrito(x,y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.fillRect(x,y, 40, 40);
    ctx.strokeRect(x,y, 40, 40);
}

function bolita(x,y){
    ctx.fillStyle = hslColor(ini);
    ini += 20;
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI *2);
    ctx.fill();
    ctx.stroke();
}

setInterval (() => {
    //ctx.clearRect(0,0,650,400);
    bolita(idx, idy);
    if(dirX === 1 && dirY === 1){
        idx += 1;
        idy += 1;
    }else if(dirX === 1 && dirY === 2) {
        idx += 1;
        idy -= 1; 
    }else if(dirX === 2 && dirY === 1) {
        idx -= 1;
        idy += 1; 
    }else{
        idx -= 1;
        idy -= 1; 
    }
    // cambiar direcciones
    if(idx > 640) dirX =2;
    if(idx < 20) dirX =1;
    if(idy > 390) dirY =2;
    if(idy < 20) dirY =1;
    
}, 10);