const result = document.getElementById('result')
function triangle(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let canBe = ((b+c) > a && (a+c) > b && (a+b) > c && a > 0 && b > 0 && c > 0)
    let P = undefined
    let S = undefined
    if(canBe){
        P = a+b+c
        let p = P / 2
        S = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    }
    result.innerText = 'P = '+P+'; S = '+S
}