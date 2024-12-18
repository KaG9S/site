/*let minPaper = 20;
let money = parseInt(prompt('Яку суму хочете зняти','50'));
if (money < minPaper || money > 3000){
    alert('На жаль ви можете зняти гроші на суму від '+minPaper+' грн до 3000 грн');
} else{
    if (money % minPaper == 0){
        alert('Успішно знято '+money+' грн');
    } else{
        alert('Ми не можемо видати вам таку сумму. Ми можемо лише видати лише '+(money - (money % minPaper))+' грн бо немає купюр менше '+minPaper+' грн');
        if (confirm('Знімати '+(money-(money % minPaper))+' грн? Ви загубите '+(money % minPaper)+' грн')){
            alert('Успішно знято '+(money-(money % minPaper))+' грн');
        } else{
            alert('Операцію скасовано');
        };
    };
};//*/

/*let minAge = 18;
let maxAge = 100;
let age = prompt('Скільки вам років?','18');
if (age == null){
    alert('Гудбай');
}else if (age === 'wasd'){
    alert('ІНОПЛАНЄТЯНІН!?!?!?!??!?!?');
}else {
    if (minAge <= age && maxAge >= age){
        alert('О! Наш клієнт. Тобі '+age);
    } else{
        alert('Вийди отсюда, розбійник! Тобі '+age);
    };
};//*/

/*let A=+prompt('a = ');
let B=+prompt('b = ');
let C=+prompt('c = ');
function isTriangle(a,b,c){
    return a>0 && b>0 && c>0 && a+b>c && a+c>b && b+c>a;
};
function pTriangle(a,b,c){
    if (isTriangle(a,b,c)){
        let P=A+B+C;
        return P;
    }else {
        return undefined;
    };
};
let P = pTriangle(A,B,C);
alert('P = '+P);
function sTriangle(a,b,c){
    if (isTriangle(a,b,c)){
        let halfP = P/2;
        let S = Math.sqrt(halfP*(halfP-a)*(halfP-b)*(halfP-c));
        return S;
    }else {
        return undefined;
    };
};
let S = sTriangle(A,B,C);
alert('S = '+S);//*/

let Age = prompt('Введіть ваш вік');
function correctAge(age){
    let tenAge = age % 10;
    let hunAge = age % 100;
    if (age == null){
        alert('Операцію скасовано');
    }else if (tenAge == 1 && hunAge != 11){
        return 'рік';
    }else if (((tenAge>=5 && tenAge<=9) || tenAge==0) || (hunAge>=11 && hunAge<=14)){
        return 'років';
    }else if ((tenAge>=2 && tenAge<=4) && !(hunAge>=12 && hunAge<=14)){
        return 'роки';
    }else {
        return undefined;
    };
};
alert(`Вам ${Age} ${correctAge(Age)}`);//*/
