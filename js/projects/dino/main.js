let score = 0
let inJump = false
document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if(dino.classList != "jump"){
        dino.classList.add("jump")
        inJump = true
    }
    setTimeout(function(){
        if(inJump){
            dino.classList.remove("jump")
            inJump = false
        }}, 1000)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    score++
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert('Game over! You got '+Math.floor(score/10)+' score!')
        score = 0
        clearInterval()
    }
}, 10)