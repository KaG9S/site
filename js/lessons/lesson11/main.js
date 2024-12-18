/*
let x
while(isNaN(x) || x == null){
    x = prompt("Введіть будь-яке значення:", "-3.14");
    if (isNaN(x) || x == null) {
      alert( "Це NaN - не число!" );
    }
}
alert( "Ви ввели число" );
//*/

/*
let sum = 0.1 + 0.2
alert(sum)
alert((String(sum).length-4)+' нулів')
//*/

/*
let a = -1
while(a <= 0 || a >= 1){
    a = parseFloat(prompt('Введіть число між 0 і 1',0.5))
}
let b = -1
while(b <= 0 || b >= 1){
    b = parseFloat(prompt('Введіть друге число між 0 і 1',0.4))
}
let sum = a + b
sum = sum.toFixed((Math.max(String(a).length,String(b).length)-2))
alert(a+' + '+b+' = '+sum)
//*/

/*
let min = parseFloat(prompt('Введіть мінімальне число діапазону',-50))
let max = min
while(max <= min){
    max = parseFloat(prompt(`Введіть максимальне число діапазону, яке більше ${min}`,50))
}
let amount = 0
while(amount <= 0 || amount % 1 != 0){
    amount = parseFloat(prompt('Введіть кількість чисел',100))
}
for(let i = 0; i<=amount; i++){
    document.writeln(`<text>${Math.floor(Math.random()*(max-min+1))+min}</text>`)
}
//*/

let min = parseFloat(prompt('Введіть мінімальне число діапазону',0))
let max = min
while(max <= min){
    max = parseFloat(prompt(`Введіть максимальне число діапазону, яке більше ${min}`,100))
}
let number = Math.floor(Math.random()*(max-min+1))+min
alert('Число загадане')
let run = true
while(run){
    input = prompt('Введіть ціле число','50')
    if (inp == null){
        run = false
    }else{
        inp = parseInt(inp)
        if(input == number){
            alert('Ви вгадали!')
            run = false
        }else{
            if(input > number){
                alert('Наше число менше')
            }else{
                alert('Наше число більше')
            }
        }
    }
}