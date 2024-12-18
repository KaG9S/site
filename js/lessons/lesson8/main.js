/*let count = 0;
while(count<4){
    alert(count);
    count++
}//*/

/*let i = -4;
while (i){
    alert(i);
    i = i + 1000000000
}//*/

/*let i = 0
do{
    alert(i);
    i++
} while(i < 4);//*/

/*for (let i = 0; ++i <= 4;){
    alert(i)
}//*/
//alert(i) //err

/*
function correctTimes(times){
    let tenTimes = times % 10;
    let hunTimes = times % 100;
    if (times == null){
        alert('Операцію скасовано');
    }else if (tenTimes == 1 && hunTimes != 11){
        return 'раз';
    }else if (((tenTimes>=5 && tenTimes<=9) || tenTimes==0) || (hunTimes>=11 && hunTimes<=14)){
        return 'разів';
    }else if ((tenTimes>=2 && tenTimes<=4) && !(hunTimes>=12 && hunTimes<=14)){
        return 'рази';
    }else {
        return undefined;
    };
};

let i;
let min = +prompt('Введіть мінімальне число діапазону',1);
let max = +prompt('Введіть максимальне число діапазону',100);
for( i = min; i <= max; i++){
    if (i % 2 == 0){
        document.write(`<p>${i}) Слава Україні!</p>`);
    }
}
document.write(`<p>Героям Слава! ${Math.ceil((max-min)/2)} ${correctTimes(Math.ceil((max-min)/2))}</p>`);
//*/

let from=+prompt('Введіть число a',1);
let to=+prompt('Введіть число b',10);
//let zrpr=+prompt('Введіть число c',5);
//let zram=+prompt('Введіть число d',2);
let sym=prompt('Введіть символ','*');
let pr='';
let prn='';
for (let i=from;i<=to;i++){
    pr=pr+sym;
    document.write('<p>'+pr+'</p>'+'<br>');
};//*/
