const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function drawFillRectangle() {
context.fillStyle = 'purple'
context.fillRect(20, 250, 50,30);
}

function strokeRect(){
 context.strokeRect(200, 20, 75, 75);
}

function drawRectPath(){
  context.beginPath();
  context.moveTo(20,20);

  context.lineTo(20, 150);
  context.stroke();

   context.lineTo(150,150);
     context.stroke();

 context.lineTo(150, 20);
   context.stroke();

  context.lineTo(20, 20);
    context.stroke();

  context.closePath()
}

function drawBullsEye(){

context.beginPath();
context.arc(220, 180, 60, 0, Math.PI *2);
context.fillStyle = 'black';
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.arc(220, 180, 30, 0, Math.PI *2);
context.fillStyle = 'white';
context.fill();
context.stroke();
context.closePath();
}

function drawText(){
  context.fillStyle = 'blue';
  context.font = '30px Verdana'

  context.fillText('Ironhack',100, 280)
}

