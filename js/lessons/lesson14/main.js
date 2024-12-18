//Objects
//let test = Object.create(null)
//or
//test = new Object()
//or
//test = {}

/*
let human = {}
human.name = 'Георгій'
human.age = 12
human.gender = 'Male'
//*/

/*
alert(human.name) // Георгій
alert(human.age) // 12
alert(human.gender) // Male
delete human.age
alert(human.age) // undefined
human.age = 12
//*/

/*
let keya = 0
//let keys = []
for (let key in human) {
    alert('Ключ: '+key+'; значення: '+human[key])
    keya++
    //keys += key
}
alert('У об\'єкті'+' '+keya+' ключів(ключ)')
//*/

//*
function isEmpty(obj){
    for(let key in obj) {
        return false
    }
    return true
}
function toFixed(number, fix){
    return Math.floor(number/(10**Math.floor(fix)))*(10**Math.floor(fix))
}
/*
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "прокидаємось";
alert(isEmpty(schedule)); // false
//*/

let countries = {
    "Індія": 1428000000,
    "США": 334000000,
    "Китай": 1425000000,
    "Бразилія": 214000000,
    "Пакистан": 241000000,
    "Нігерія": 223000000,
    "Мексика": 126000000,
    "Індонезія": 277000000,
    "Бангладеш": 174000000,
    "Японія": 125000000,
    "Ефіопія": 126000000,
    "Філіппіни": 117000000,
    "Єгипет": 112000000,
    "В’єтнам": 100000000,
    "Демократична Республіка Конго": 102000000,
    "Туреччина": 89000000,
    "Іран": 89000000,
    "Непал": 32000000,
    "Південна Корея": 52000000
};

let salaries = {
    "Василь": 10000,
    "Петро": 30000,
    "Дарина": 25000,
    "Григорій": 15000,
    "Галина": 12000
};
let top1 = 0
let top1Name = '🥁🥁🥁ніхто🥁🥁🥁'
let top2 = 0
let top2Name = '🥁🥁🥁ніхто🥁🥁🥁'
let top3 = 0
let top3Name = '🥁🥁🥁ніхто🥁🥁🥁'
let sum = 0
let len = 0
if(isEmpty(countries)){
    alert('Нема країн у об\'єкті')
}else{
    for (let countrie in countries) {
        if(countries[countrie]>top3){
            if(countries[countrie]>top2){
                if(countries[countrie]>top1){
                    top3 = top2
                    top3Name = top2Name
                    top2 = top3
                    top2Name = top3Name
                    top1 = countries[countrie]
                    top1Name = countrie
                }else{
                    top3 = top2
                    top3Name = top2Name
                    top2 = countries[countrie]
                    top2Name = countrie
                }
            }else{
                top3 = countrie[countrie]
                top3Name = countrie
            }
            sum += countries[countrie]
            len++
        }
    }
    alert(`Топ 3 населення у ${top3Name}: ${top3} людей`)
    alert(`Топ 2 населення у ${top2Name}: ${top2} людей`)
    alert(`Топ 1 населення у ${top1Name}: ${top1} людей`)
    alert(`Середня кількість людей: ${toFixed((sum / len), 6)} осіб`)
}

