const input = document.getElementById('input')
const resultP = document.getElementById('resultP')
function result(){
    let numbers = input.value.split(';')
    let summ = 0 
    for(let i = 0; i < numbers.length; i++){
        summ += parseFloat(numbers[i])
    }
    summ = isNaN(summ) || summ == null ? undefined : summ
    resultP.innerText = 'Сумма чисел = '+summ
}
