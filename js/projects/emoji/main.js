const result = document.getElementById('result')
const Command = document.getElementById('command')
const helpFeedback = 'Доступні команди: help, fromto, show, random'
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from) + from)
}
function emoji(){
    let elements = Command.value.split(' ')
    let command = elements[0]
    let first = Math.floor(parseInt(elements[1]))
    let second = Math.floor(parseInt(elements[2]))
    let third = Math.floor(parseInt(elements[3]))
    let resultTo = ''
    switch(command){
        case 'help':
            resultTo = helpFeedback
            break
        case 'fromto':
            for (let i = first; i < second; i += third){
                resultTo += '&#'+i+';'
            }
            break
        case 'show':
            resultTo = '&#'+elements[1]+';'
            break
        case 'random':
            if(first == 'NaN' || second == 'NaN'){
                resultTo = 'Помилка вводу'
            }else{
                resultTo = '&#'+randomFromTo(first, second)+';'
            }
            break
        case '':
            resultTo = 'Введіть команду'
            break
        default:
            resultTo = 'Невідома команда'
    }
    if (resultTo === '&#NaN;'){
        resultTo = 'Помилка вводу'
    }
    result.innerHTML = resultTo
}