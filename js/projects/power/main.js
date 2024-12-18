const result = document.getElementById('result')
function PowerEquation(){
    let a = document.getElementById('a').value
    let n = document.getElementById('n').value
    result.innerText = (a+'^'+n+' = '+(a**n))
}