//тернарний оператор
/*
let age = prompt('Скіки років?', 12);
let access = age >= 18 ? true : false;
alert(access);
//*/

/*
alert('Тернарний оператор крутий!')
let question = prompt('Згоден? Напиши "тернарка"') == "тернарка" ? 'Крутий' : 'НЕ КРУТИЙ'
alert(question)
//*/

//стрілкові функції
/*
const sumArrow = (a, b) => a + b;
alert(sumArrow(4, 5));
//*/

/*
const myEval = () => 'Your expretion: '+eval(prompt('Write expretion'))
alert(myEval())
//*/

//setinterval
//setInterval(function, timeOwerload)

//*

train.onclick = function() {
    let start = Date.now()
    let timer = setInterval(function() {
        let timePassed = Date.now() - start
        train.style.left = timePassed / 5 + 'px'
        if (timePassed > 2000) clearInterval(timer)
    }, 50);
}
//*/
function move() {
    const bar = document.getElementById("myBar");   
    let progres = 0;
    let id = setInterval(frame, 100);
    function frame() {
        if (progres == 95) {
            clearInterval(id);
            id = setInterval(frame, 500);
            function frame() {
                if (progres == 99) {
                    clearInterval(id);
                    id = setInterval(frame, 3000);
                    function frame() {
                        if (progres == 100) {
                            clearInterval(id);
                        } else {
                            progres++; 
                            bar.style.width = progres + '%'; 
                        }
                    }
                } else {
                    progres++; 
                    bar.style.width = progres + '%'; 
                }
            }
        } else {
            progres++; 
            bar.style.width = progres + '%'; 
        }
    }
}