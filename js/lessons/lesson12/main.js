/*
//teoric material

let backspace = '\b'
let newLine = '\n'
let backSlash = '\\'
let unicodeSymbol = '\u0A58' //'\uHHHH' 'H' hexdecimal number. This is infinity symbol
//alert(unicodeSymbol)

let str = 'Hello world'
alert(str.charAt(4)) // o
alert(str[4]) // o

alert(str.toLowerCase(str)) // hello world
alert(str.toUpperCase(str)) // HELLO WORLD

alert(str.indexOf('world')) // 6
alert(str.indexOf('he')) // 0 
alert(str.indexOf('hey')) // -1 coz he isn`t in text

alert(str.substring(2,3)) // 'll'
alert(str.substr(2,3)) // 'llo'
alert(str.slice(2,-3)) // 'llo wo'
//*/

/*

() parenthesis
<> angle brackets
<> diamond brakets
[] square brackets
{} curly brackets

*/

/*
function correctDigits(Digits){
    let tenDigits = Digits % 10;
    let hunDigits = Digits % 100;
    if(Digits == null){
        return null
    }else if(tenDigits == 1 && hunDigits != 11){
        return 'цифра';
    }else if(((tenDigits>=5 && tenDigits<=9) || tenDigits==0) || (hunDigits>=11 && hunDigits<=14)){
        return 'цифр';
    }else if((tenDigits>=2 && tenDigits<=4) && !(hunDigits>=12 && hunDigits<=14)){
        return 'цифри';
    }else{
        return undefined;
    };
};
let multiple = 0
let notmultiple = 0
let number = String(parseFloat(prompt('Введіть число')))
for(let i = 0; i < number.length; i++){
    if(+number[i] % 2 == 0){
        multiple++
    }else if(number[i] == '-' || number[i] == '.'){
        null
    }else{
        notmultiple++
    }
}
alert('Парні = '+multiple+' '+correctDigits(multiple))
alert('Непарні = '+notmultiple+' '+correctDigits(notmultiple))
//*/

//*
let str = prompt() // qwerty
str = str[0].toUpperCase() + str.slice(1)
alert(str) //Qwerty
//*/

/*
let massage = prompt('Введіть рядок')
if(~massage.toLowerCase().indexOf('безкоштовно')||massage.toLowerCase().indexOf('гарантія'){
    for(let i = 0; i <= 1000; i++){
        document.write(`<text>В_НОКАУТ_ТУДА_БОТА!!!</text><br>`)
    }
}else{
    alert('Ваше повідомлення прийнято')
    let fromWho = prompt('Введіть, від кого йде повідомлення','jokageorgik@gmail.com')
    let toWho = prompt('Введіть, кому відправити повідомлення','user@gmail.com')
    document.write(`<p>From: ${fromWho}</p>`)
    document.write(`<p>To: ${toWho}</p>`)
    document.write(`<p style="background-color: gray;">${massage}</p>`)

}
//*/

/*
let text = prompt('','Бредуть бобри в сирі бори. бобри хоробрі, а для бобрят добрі')
let textMach = prompt('','ри')
let Mached = 0
let Maches = ''
while(true){
    Mach = text.indexOf(textMach, Mached)
    if(Mach == -1){
        break
    }else{
        Mached = Mach + 1
        Maches += Mach + ','
    }
}
alert(Maches.slice(0))
//*/
