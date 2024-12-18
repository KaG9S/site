const resultP = document.getElementById('resultP')
const input = document.getElementById('input')
function result(){
    let number = input.value == '' ? NaN : input.value
    let len = 0
    if(number == ''){
        len = NaN
    }else{
        number = parseFloat(number)
        if(isNaN(number)){
            len = undefined
        }else{
            len = (''+number).length
            if(number < 0){
                len -= 1
            }
            if(number % 1 != 0){
                len -= 1
            }
        }
    }
    
    resultP.innerText = 'Довжина числа '+number+' = '+len
}
