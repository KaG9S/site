const canvas = document.getElementById('myCanvas')
const cxt = canvas.getContext("2d");
const wight = canvas.wight
const height = canvas.height

let colors=[
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue",    "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta",     "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise"
]

/*
cxt.fillStyle="#f00";
cxt.fillRect(0, 0, 50, 50);
cxt.strokeStyle="#000";
cxt.lineWidth=5;
cxt.strokeRect(0, 0, 50, 50);
//*/

/*
let colorsAndY = {'#ff000088': 0, '#00ff0088': 25, '#0000ff88': 50}
for(let i in colorsAndY){
    cxt.fillStyle = i
    cxt.fillRect(colorsAndY[i], (100+colorsAndY[i]), 50, 50)
}
//*/

/*
a = prompt('скіки?')
cxt.lineWidth=5;
for(let i = 0; i < a; i++){
    x = Math.random()*400
    y = Math.random()*400
    h = 50+Math.random()*50
    c = Math.floor(Math.random()*colors.length)
    c2 = Math.floor(Math.random()*colors.length)
    cxt.fillStyle = colors[c]
    cxt.fillRect(x, y, h, h)
    cxt.strokeStyle=colors[c2]
    cxt.strokeRect(x, y, h, h);
}
//*/

/*
function range(start, end, step){
    let ret = []
    for(let n = start; n < end; n += step){
        ret.push(n)
    }
    return ret
}
for(let x in range(0, 8, 1)){
    for(let y in range(0, 8, 1)){
        if((Number(x) + Number(y)) % 2 == 0){
            cxt.fillStyle="white";
        }else{
            cxt.fillStyle="black";
        }
        cxt.fillRect(x*50+50, y*50+50, 50, 50);
    }
}
//*/

/*
a = prompt('скіки?')
cxt.lineWidth=5;
for(let i = 0; i < a; i++){
    x1 = Math.random()*500
    y1 = Math.random()*500
    x2 = Math.random()*500
    y2 = Math.random()*500
    x3 = Math.random()*500
    y3 = Math.random()*500
    c1 = Math.floor(Math.random()*colors.length)
    c2 = Math.floor(Math.random()*colors.length)
    cxt.beginPath();
    cxt.moveTo(x1,y1);
    cxt.lineTo(x2,y2);
    cxt.lineTo(x3,y3);
    cxt.fillStyle = colors[c1]
    cxt.fill();
    cxt.beginPath();
    cxt.moveTo(x1,y1);
    cxt.lineTo(x2,y2);
    cxt.lineTo(x3,y3);
    cxt.lineTo(x1,y1);
    cxt.strokeStyle=colors[c2];
    cxt.stroke();
}
//*/