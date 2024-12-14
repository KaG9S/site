function equation(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let D = b**2-4*a*c
    const DElement = document.getElementById('D')
    DElement.innerText = ('D = '+D)
    if (D < 0){
        DElement.innerText = 'Коренів немає!'
    }else{
        let x1 = (-b+Math.sqrt(D))/(2*a)
        if (D > 0){
            let x2 = (-b-Math.sqrt(D))/(2*a)
            DElement.innerText = ('Два корені: x1 = '+x1+', x2 = '+x2)
        }else{
            DElement.innerText = ('Один корінь: x = '+x1)
        }
    }
}