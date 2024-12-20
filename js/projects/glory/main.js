const result = document.getElementById('result')
const input = document.getElementById('input')
function glory(){
    const inputTo = input.value
    let resultTo = ''
    if (inputTo % 1 == 0 && inputTo > 0){
        for (let i = 1; i <= inputTo; i++){
            resultTo += '<p>'+i+') Glory to Ukraine!</p>'
        }
        resultTo += '<p>Glory to Heroes '+inputTo+' times!</p>'
    }else{
        resultTo = '<p>Please enter a positive integer!</p>'
    }
    result.innerHTML = resultTo
}