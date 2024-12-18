const canvas = document.getElementById('myCanvas')
const cxt = canvas.getContext("2d");
const wight = canvas.wight
const height = canvas.height
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
