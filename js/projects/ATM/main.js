const input = document.getElementById('input')
const result = document.getElementById('resultP')
const resultDiv = document.getElementById('resultDiv')
const wigth = 8315
const height = 4444
function getMoney(){
    let money = input.value
    if(money % 1 == 0 && money >= 10){
        if(money % 10 == 0){
            result.innerText = 'Операція успішна! Ось ваші '+money+'₴'
            for(let i = 0; i < (money - (money % 10)); i++){
                resultDiv.innerHTML += '<img src="гривня.jpg" alt="1 гривня">'
            }
        }else{
            let rand = Math.floor(Math.random()*100)
            if((prompt('Операція призупинена! Наразі у банкоматі немає купюр, які менше 10₴. Ми можемо віддати вам '+(money - (money % 10))+'₴ або повернути гроші. Напишіть число '+rand+' якщо хочете повернути кошти. В інакшому разі кошти будуть списані'))){
                result.innerText = 'Операція успішна! Ось ваші '+(money - (money % 10))+'₴'
                resultDiv.innerHTML = ''
                for(let i = 0; i < (money - (money % 1000)); i+=1000){
                    resultDiv.innerHTML += '<img src="1000h.jpg" alt="1000 гривень" style="border: 3px black solid;" wigth="'+(wigth/100)+'">'
                }
                for(let i = (money - (money % 1000)); i < (money - (money % 100)); i+=100){
                    resultDiv.innerHTML += '<img src="100h.jpg" alt="100 гривень" style="border: 3px black solid;" wigth="'+(wigth/100)+'">'
                }
                for(let i = (money - (money % 100)); i < (money - (money % 10)); i+=10){
                    resultDiv.innerHTML += '<img src="10h.jpg" alt="10 гривень" style="border: 3px black solid;" wigth="'+(wigth/100)+'">'
                }
            }else{
                result.innerText = 'Операція відхилена! Ваші кошти на картці'
            }
        }
    }else{
        result.innerText = 'Ми не можемо видати вам таку сумму ('+money+'₴)'
    }
}