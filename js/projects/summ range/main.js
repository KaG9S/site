const resultP = document.getElementById('resultP')
const first = document.getElementById('first')
const last = document.getElementById('last')
const step = document.getElementById('step')
function result(){
    let firstV = parseFloat(first.value)
    let lastV = parseFloat(last.value)
    let stepV = parseFloat(step.value)
    let sum = 0
    for (let i = firstV; i <= lastV; i += stepV){
        sum += i
    }
    text = 'Сумма чисел від '+firstV+' до '+lastV+' з кроком '+stepV+' = '+sum
    resultP.innerText = text
}