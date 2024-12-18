const result = document.getElementById('result')
function factorial(){
    let number = parseFloat(document.getElementById('n').value)
    let fact = 1
    if (number < 0 || number % 1 != 0 || number == null || number == undefined || isNaN(number)){
        fact = undefined
    }else{
        for(let i = 1;i <= number; i++){
            fact = fact * i
        }
    }
    result.innerText = ('Факторіал числа '+number+' = '+fact)
}