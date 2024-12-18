const myCanvas = document.getElementById('myCanvas')
const cxt = myCanvas.getContext('2d')
const wight = myCanvas.wight
const height = myCanvas.height
cxt.strokeStyle="blue";
for (let x = 0; x <= 10; x += 1){
    cxt.beginPath()
    cxt.moveTo(x*50, 0);
    cxt.lineTo(x*50, height);
    cxt.stroke();
}
for (let x = 0; x <= 10; x += 1){
    cxt.beginPath()
    cxt.moveTo(0, x*50);
    cxt.lineTo(wight, x*50);
    cxt.stroke();
}