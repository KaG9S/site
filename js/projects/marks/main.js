const input = document.getElementById('input')
const result = document.getElementById('result')
function getMark() {
    let mark0 = parseInt(input.value)
    let markInUkraine = undefined
    switch (mark0) {
        case 1: case 2: case 3:
            markInUkraine = 'Низький рівень'
            break;
        case 4: case 5: case 6:
            markInUkraine = 'Середній рівень'
            break;
        case 7: case 8: case 9:
            markInUkraine = 'Достатній рівень'
            break;
        case 10: case 11: case 12:
            markInUkraine = 'Високий рівень'
            break;
        default:
            markInUkraine = undefined
            break;
    }
    let markSing = mark0 % 2 == 0 ? '+':'-'
    let markInPoland = (mark0 >= 1 && mark0 <=12) ? (Math.ceil(mark0 / 2)+markSing) : undefined
    let markInAmerika = undefined
    switch (mark0) {
        case 1: case 2:
            markInAmerika = 'F'+markSing
            break;
        case 3: case 4:
            markInAmerika = 'E'+markSing
            break;
        case 5: case 6:
            markInAmerika = 'D'+markSing
            break;
        case 7: case 8:
            markInAmerika = 'C'+markSing
            break;
        case 9: case 10:
            markInAmerika = 'B'+markSing
            break;
        case 11: case 12:
            markInAmerika = 'A'+markSing
            break;
        default:
            markInAmerika = undefined
            break;
    }
    let resultText = 'Оцінка в Україні: '+markInUkraine
    +'\n Оцінка в Польші: '+markInPoland
    +'\n Оцінка в Америці: '+markInAmerika
    result.innerText = resultText
}