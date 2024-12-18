const result = document.getElementById('result')
function fibonachi(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let sumg = 0
    let textp = ''
    let text = a+', '+b
    for(let i = a; i <= c; i++){
        sum = a + b
        a = b
        b = sum
        sumg = sum
        text += ', ' + sum 
        textp = text
    }
    textp = 'Числа: '+textp
    result.innerText = textp
}