const clock = document.getElementById('clockCanvas');
const ctx = clock.getContext('2d');
const width = clock.width;
const height = clock.height;
const centerX = width / 2;
const centerY = height / 2;
const radius = centerX - 50;
const PI = Math.PI;
const PI2 = PI * 2;
const oneMinute = PI / 30;
const oneHour = PI / 6;
const oneSecond = PI / 30;
const quater = PI / 2;
let date = new Date();

function drawDots(){
    ctx.fillStyle="black";
    for(let i = 0; i < 12; i++){
        let angle = i * oneHour;
        let x = centerX + Math.cos(angle) * radius;
        let y = centerY + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, PI2, false);
        ctx.fill();
    }
}

function drawHand(angle, length, width, color){
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * length, centerY + Math.sin(angle) * length);
    ctx.stroke();
}

function drawHands(){
    drawHand(oneHour * date.getHours() + oneMinute * date.getMinutes(), radius * 0.5, 10, 'black'); // hours
    drawHand(oneMinute * date.getMinutes(), radius * 0.75, 7.5, 'black'); // minutes
    drawHand(oneSecond * date.getSeconds(), radius, 5, 'red'); // seconds
}

function updateDate(){
    date = new Date();
}

function drawClock(){
    ctx.clearRect(0, 0, width, height);
    updateDate();
    drawDots();
    drawHands();
}

drawClock();
setInterval(drawClock, 50);