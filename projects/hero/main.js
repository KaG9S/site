document.write('<div id="main">\
    <h1>Вгадай героя!</h1>\
    <p>Цей герой - детектив. У нього є помічник Ватсон. Він розкрив дуже багато злочинів</p>\
    <p>Цей герой:</p>\
    <input id="input"></input>\
    <button onclick="result()">Перевірити</button>\
    <p id="resultP"></p>\
    ')
const answers = ['Шерлок','Шерлок Холмс','Холмс Шерлок']
function result(){
    let answer = document.getElementById('input').value
    let isAnswerRight = 1
    for(let i = 0; i < (answers.length); i += 1){
        if(answer == answers[i]){
            isAnswerRight = 2
        }
    }
    if(answer == ''){isAnswerRight = 0}
    if(isAnswerRight == 2){
        document.getElementById('resultP').innerHTML = 'Вірно. Це '+answer
    }else if(isAnswerRight == 1){
        document.getElementById('resultP').innerHTML = 'Невірно. Це не '+answer
    }else{
        document.getElementById('resultP').innerHTML = 'Пустий текст'
    }
}
