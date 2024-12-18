const input = document.getElementById('input')
const resultParagrah = document.getElementById('result')
let numberToGuess = Infinity
let atempts = 1
function getNumber() {
    numberToGuess = Math.round(Math.random()*100)
    console.log(numberToGuess)
    resultParagrah.innerText = 'Число загадане!'
    atempts = 1
    clearInterval()
}
function result(){
    let guess = input.value
    if (guess == numberToGuess) {
        resultParagrah.innerText = '\nВи вгадали! Це число '+numberToGuess+'! Ви вгадали за '+atempts+' Спроб'
        let colors = ['blue', 'yellow', 'green', 'red']
        let colorId = 0
        setInterval(function(){document.body.style.backgroundColor = colors[colorId%4]; colorId++},500)
    }else{
        if (guess < numberToGuess) {
            resultParagrah.innerText += '\n'+atempts+'. Наше число більше за '+guess
        } else {
            resultParagrah.innerText += '\n'+atempts+'. Наше число менше за '+guess
        }
    }
    atempts += 1
}
