const input = document.getElementById('input')
const result = document.getElementById('result')
function getSeason() {
    let month = parseInt(input.value)
    let season = undefined
    switch (month) {
        case 1: case 2: case 12:
            season = 'Зима'
            break
        case 3: case 4: case 5:
            season = 'Весна'
            break
        case 6: case 7: case 8:
            season = 'Літо'
            break
        case 9: case 10: case 11:
            season = 'Осінь'
            break
    }
    let resultText = 'Ваша пора року: '+season
    result.innerText = resultText
}