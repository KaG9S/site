/*let from = +prompt('Введіть перше значення діапазону',128000);
let to = +prompt('Введіть останнє значення діапазону',129000);
switch(Math.sign(to-from)){
    case 1:
        for (let i = from; i <= to; i++){
            document.write(`<p id="${i}">&#${i}; - &amp;#${i};</p>`);
            if (i%10==9){
                document.write('<br>');
            }
        }
        break;
    case -1:
        for (let i = from; i <= to; i--){
            document.write(`<p id="${i}">&#${i}; - &amp;#${i};</p>`);
            if (i%10==9){
                document.write('<br>');
            }
        }
        break;
    case 0:
        document.write(`<p id="${i}">&#${i}; - &amp;#${i};</p>`);
        break;
}//*/

/*let number = prompt('Введіть число більше 100');
if(number==null){
    alert('Пока')
}else if (number<=100){
    number = prompt('Введіть число Більше 100');
    if(number==null){
        alert('Пока')
    }else if (number<=100){
        number = prompt('Введіть число БІЛЬШЕ 100');
        if(number==null){
            alert('Пока')
        }else if (number<=100){
            number = prompt('Введіть число БІЛЬШЕЕЕЕЕЕ 100');
            if(number==null){
                alert('Пока')
            }else{
                while(number<=100){
                    number = prompt('Введіть число БІЛЬШЕЕЕЕЕЕ 100');
                    if(number==null){
                        alert('Пока');
                        break;
                    }
                }
                if(number>100){
                    alert('Ваше число більше 100 :)');
                    alert(':)');
                    alert('>:)');
                }
            }
        }else{
            alert('Ваше число більше 100 :)');
            alert(':)');
            alert('>:)');
        }
    }else{
        alert('Ваше число більше 100 :)');
    }
}else{
    alert('Ваше число більше 100 :)');
}//*/

/*
function correctAtempts(atempts){
    let tenAtempts = atempts % 10;
    let hunAtempts = atempts % 100;
    if (atempts == null){
        alert('Операцію скасовано');
    }else if (tenAtempts == 1 && hunAtempts != 11){
        return 'спроба';
    }else if (((tenAtempts>=5 && tenAtempts<=9) || tenAtempts==0) || (hunAtempts>=11 && hunAtempts<=14)){
        return 'спроб';
    }else if ((tenAtempts>=2 && tenAtempts<=4) && !(hunAtempts>=12 && hunAtempts<=14)){
        return 'спроби';
    }else {
        return undefined;
    };
};
let numberToGuess = Math.floor(Math.random()*100);
let input = -1;
let atempts = 0;
while (input!=numberToGuess){
    atempts++
    input = prompt('Вгадайте число від 1 ДО 100');
    if (input == null){
        alert('Треба вгадати')
    }else{
        switch(Math.sign(numberToGuess-input)){
            case 1:
                alert('Наше число більше');
                break;
            case -1:
                alert('Наше число менше');
                break;
        };
    }
};
alert('Ви виграли за '+atempts+' '+correctAtempts(atempts))//*/

/*
function factorial(number){
    let factorial = 1
    if (number!=0){
        if (number < 0 || number % 1 != 0){
            factorial = undefined
        }else{
            for(let i = 1;i <= number; i++){
                factorial = factorial * i
            }
        }
    }
    return factorial
}
let number = prompt('Введіть число')
alert('Факторіал числа '+number+' = '+factorial(number))//*/

let a = prompt('Введіть число a')
let n = prompt('Введіть число n')
alert(a+'^'+n+'='+Math.pow(a,n))
