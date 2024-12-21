const checkbox = document.getElementById('spam')
const text = document.getElementById('text')
const wordsEl = document.getElementById('words')
const resultP = document.getElementById('resultP')
function result(){
    const words = (checkbox.checked ? wordsEl.value : 'гарантія;безкоштовно;не спам;').split(';')
    let check = false
    for(let i = 0; i < words.length; i++){
        if(text.value.toLowerCase().indexOf(words[i].toLowerCase()) != -1){
            check = true
            break
        }
    }
    if (checkbox.checked) {
        if (check) {
            resultP.innerText = 'Спам виявлено'
        } else {
            resultP.innerText = 'Спам не виявлено'
        } 
    } else {
        if (check) {
            resultP.innerText = 'Слова виявлено'
        } else {
            resultP.innerText = 'Слова не виявлено'
        } 
    }
}
