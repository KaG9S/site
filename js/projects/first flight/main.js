const answer = '1961'
function result(){
    let input = document.getElementById('input').value
    let isAnswerRight = input == '' ? 0 : (input == answer ? 2 : 1)
    if(isAnswerRight == 2){
        document.getElementById('resultP').innerHTML = 'Вірно. Це '+input
    }else if(isAnswerRight == 1){
        document.getElementById('resultP').innerHTML = 'Невірно. Це не '+input
    }else{
        document.getElementById('resultP').innerHTML = 'Пустий текст'
    }
}
