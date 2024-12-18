const result = document.getElementById('result')
function triangle(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let canBe = (a > 0 && b > 0)
    let P = undefined
    let S = undefined
    if(canBe){
        P = (a+b)*2
        S = a*b
    }
    result.innerText = 'P = '+P+'; S = '+S
}