function equation(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let D = b**2-4*a*c
    const DElement = document.getElementById('D')
    const XElement = document.getElementById('x')
    DElement.innerText = ('D = '+D)
    if (D < 0){
        XElement.innerText = 'Коренів немає!'
    }else{
        let x1 = (-b+Math.sqrt(D))/(2*a)
        if (D > 0){
            let x2 = (-b-Math.sqrt(D))/(2*a)
            XElement.innerText = ('Два корені: x1 = '+x1+', x2 = '+x2)
        }else{
            XElement.innerText = ('Один корінь: x = '+x1)
        }
    }
}