const resultP = document.getElementById('resultP')
function result(){
    let input = document.getElementById('input').value
    let isAnswerRight = 0
    if(input == ''){
        isAnswerRight = -1
    }else if(Number(input) >= 18){
        isAnswerRight = 1
    }else if(Number(input) <= 0){
        isAnswerRight = 3
    }else if (isNaN(Number(input))) {
        isAnswerRight = 2
    }
    let output = ''
    switch (isAnswerRight) {
        case 0:
            output = 'Ми не можемо вас сюди пропустити, бо вам '+input+' років!'
            break;
        case 1:
            output = 'Ласкаво просимо на сайт!'
            break;
        case 2:
            output = 'Ви ввели не ті данні про ваш вік!'
            break;
        case 3:
            output = 'Вам не може бути стільки років!'
            break;
        case -1:
            output = 'Немає данних про ваш вік!'
            break;
        default:
            break;
    }
    resultP.innerText = output
}
