const input = document.getElementById('input')
const resultP = document.getElementById('resultP')
function result(){
    let text = input.value.split('.')
    for(let i = 0; i < text.length; i++){
        text[i] = text[i][0].toUpperCase() + text[i].slice(1)
    }
    let fullText = text.join('. ')
    console.log(fullText)
    input.value = fullText
}
