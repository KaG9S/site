const canvas = document.getElementById('myCanvas')
const cxt = canvas.getContext("2d");
const wight = canvas.wight
const height = canvas.height

let colors=[
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue",    "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta",     "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise"
]

//*
let x = wight / 2;
let y = height / 2;
let radius = 75;
let startAngle = 0;
let endAngle = 2 * Math.PI;
let counterClockwise = false;
cxt.beginPath();
cxt.arc(x, y, radius, startAngle, endAngle, counterClockwise);
cxt.closePath();
cxt.fillStyle = "black";
cxt.fill();
//*/