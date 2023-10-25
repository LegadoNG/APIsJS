const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let direction = 1; // 1 - Right, 2 - Down, 3 - Left, 4 - Up

let posX = 0;
let posY = 1;


function mummble(x,y){
    ctx.font = '50px Serif';
    ctx.fillText('🐧', x*30, y*30);
}


const peces =[];
 for(let i = 0; i < 20; i++){
    const pez ={
      x : Math.round(Math.random() * 30),
      y : Math.round(Math.random() * 20),
     pinta :function(){
        if(!this.comido){
            ctx.font = '40px Serif';
            ctx.fillText('🐟',this.x * 30, this.y *30);
        }
     },
     comido: false
 }
 peces.push(pez)
}

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    mummble(posX, posY);
    peces.forEach(pez=>{
        if(pez.x === posX && pez.y === posY)
        pez.comido = true
    })
    peces.forEach(pez => pez.pinta());
    switch (direction) {
        case 1:
            posX++;
            break;
        case 2:
            posY++;
            break;
        case 3:
            posX--;
            break;
        case 4:
            posY--;
            break;

        
    }
    if(posX > 600) {
        direction = 3;
        posX = 600;
    }
    if(posX < 0) {
        direction = 1;
        posX = 0;
    }
    if(posY > 400) {
        direction = 4;
        posY = 400;
    }
    if(posY < 1) {
        direction = 2;
        posY = 1;
    }
}, 200)

document.querySelector('body').addEventListener('keydown', (e) => {
    e.preventDefault();
    switch(e.key){
        case 'ArrowRight':
            direction = 1;
            break;
        case 'ArrowDown':
            direction = 2;
            break;
        case 'ArrowLeft':
            direction = 3;
            break;
        case 'ArrowUp':
            direction = 4;
            break;
    }
})