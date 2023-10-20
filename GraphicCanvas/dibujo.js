var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(220, 110);
ctx.lineTo(210, 70);
ctx.lineTo(180, 60);
ctx.lineTo(180, 120);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgb(230,115,0)";
ctx.fill();

ctx.beginPath();
ctx.arc(200,200,100,0 ,Math.PI*2,true);
ctx.fill();
ctx.fillStyle = "black";

ctx.beginPath();
ctx.moveTo(180,190);
ctx.lineTo(150,140);
ctx.lineTo(120,180);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,190);
ctx.lineTo(220,140);
ctx.lineTo(280,180);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(180,230);
ctx.lineTo(220,230);
ctx.fill();


ctx.beginPath();
ctx.moveTo(180,250);
ctx.lineTo(140,250);
ctx.lineTo(130,220);
ctx.fillStyle = "white"
ctx.fill();

ctx.beginPath();
ctx.moveTo(220,258);
ctx.lineTo(170,245);
ctx.lineTo(170,270);
ctx.fillStyle = "black"
ctx.fill();

ctx.beginPath();
ctx.moveTo(270,250);
ctx.lineTo(210,270);
ctx.lineTo(210,250);
ctx.fillStyle = "white"
ctx.fill();

