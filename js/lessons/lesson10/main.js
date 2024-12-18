/*
function showHi(){
    alert('Привіт');
};
showHi();
//*/

/*
function myMach(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}
let a = prompt('a=',3)
let b = prompt('b=',5)
alert(myMach(a,b))
//*/

function fibonachi(){
    let a = +document.getElementById('fiba').value
    let b = +document.getElementById('fibb').value
    let c = +document.getElementById('fibc').value
    let sumg = 0
    let textp = ''
    let text = a+','+b
    for(let i = a; i <= c; i++){
        sum = a + b
        a = b
        b = sum
        sumg = sum
        text = text + ',' + sum 
        textp = text
    }
    document.getElementById('fibp').innerText = textp
}

function factorial(){
    let number = document.getElementById('factn').value
    let factorial = 1
    if (number!=0){
        if (number < 0 || number % 1 != 0 || number == null || number == undefined || isNaN(number)){
            factorial = undefined
        }else{
            for(let i = 1;i <= number; i++){
                factorial = factorial * i
            }
        }
    }
    document.getElementById('factorial').innerText = ('Факторіал числа '+number+' = '+factorial)
}

function CubeEquation(){
    let a = parseFloat(document.getElementById('cubea').value)
    let b = parseFloat(document.getElementById('cubeb').value)
    let c = parseFloat(document.getElementById('cubec').value)
    let D = b**2-4*a*c
    document.getElementById('cubeD').innerText = ('D = '+D)
    if (D < 0){
        document.getElementById('cubex').innerText = 'Коренів немає!'
    }else{
        let x1 = (-b+Math.sqrt(D))/(2*a)
        if (D > 0){
            let x2 = (-b-Math.sqrt(D))/(2*a)
            document.getElementById('cubex').innerText = ('Два корені: x1 = '+x1+', x2 = '+x2)
        }else{
            document.getElementById('cubex').innerText = ('Один корінь: x = '+x1)
        }
    }
}

function PowerEquation(){
    let a = document.getElementById('powera').value
    let n = document.getElementById('powern').value
    document.getElementById('power').innerText = (a+'^'+n+' = '+(a**n))
}
