/*
let massive = [1,0,5.5,-1234,'Привіт',true,null,[1,2,3,4,5,6,7,8,9,0],{'1': 1, 'Хай': true},undefined,NaN]
alert(massive)
massive = ['один','два','три']
alert(massive[0])
alert(massive[1])
alert(massive[2])
massive[1] = 'не два'
alert(massive[1])
alert(massive)
massive[3] = 'чотири'
alert(massive[3])
alert(massive)
//*/

/*
let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let x = prompt('Введіть значення x')
let y = prompt('Введіть значення y')
alert(array2D[x][y])
//*/

/*
let colors = ['Жовтий','Синій']
alert(colors)
colors.push('Червоний')
alert(colors)
colors.shift()
alert(colors)
colors.unshift('Помаранчевий')
alert(colors)
colors.unshift('Зелений')
alert(colors)
//*/

//*
let compliments=[
    "smart","clever","nice","happy","amazing","strong","attractive","kind","genius","brilliant","creative","inspiring","talented","thoughtful","determined","generous","remarkable","inspiring","talented","radiant","charming","creative","caring","brilliant","generous","thoughtful","empathetic","confident","kind-hearted","supportive","admirable","unique","hilarious","hardworking","resourceful","gracious","loyal"
]
let animals = [
    "cat", "dog", "elephant", "giraffe", "lion", "tiger", "zebra", "horse", "rabbit", "kangaroo", "panda", "koala", "penguin", "wolf", "bear", "fox", "monkey", "deer", "bison", "rhino", "hippopotamus", "crocodile", "alligator", "snake", "lizard", "turtle", "owl", "eagle", "parrot", "swan", "falcon", "camel", "cheetah", "leopard", "gorilla", "whale", "dolphin", "shark", "octopus", "jellyfish", "starfish", "lobster", "crab", "seahorse", "antelope", "buffalo", "ostrich", "vulture", "hyena", "beaver"
]
let colors=[
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue",    "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta",     "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise"
]
let amount = parseFloat(prompt('Введіть кількість компліментів'))
for(let i = 1; i <= amount; i++){
    id = Math.floor(Math.random()*compliments.length)
    id2 = Math.floor(Math.random()*animals.length)
    id3 = Math.floor(Math.random()*colors.length)
    document.write(
        '<p>'
        +i
        +') '
        +'You are so <span style="color: '
        +colors[id3]
        +'; weight: bold;">'
        +compliments[id]
        +'</span> as <span  style="color: '
        +colors[id3]
        +'; weight: bold;">'
        +animals[id2]
        +'</span>!'
        +'</p>')
}
//*/

/*
ukrainianLetters = [
    "А", "Б", "В", "Г", "Ґ", "Д", "Е", "Є", "Ж", "З", "И", "І", "Ї", "Й",
    "К", "Л", "М", "Н", "О", "П", "Р",
    "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ю", "Я"
]
alert(
    (ukrainianLetters.indexOf(prompt('Введіть літеру').toUpperCase())+1)+' літера!'
)
//*/