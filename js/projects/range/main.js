const resultP = document.getElementById('resultP')
const first = document.getElementById('first')
const last = document.getElementById('last')
const step = document.getElementById('step')
function range(first, last, step = 1){
    let result = []
    for(let i = first; i < last; i+=step){
        result.push(i)
    }
    return result
}
function result(){
    let firstV = parseFloat(first.value)
    let lastV = parseFloat(last.value)
    let stepV = step.value !='' ? parseFloat(step.value) : 1
    let result = range(firstV, lastV, stepV)
    resultP.textContent = result
}