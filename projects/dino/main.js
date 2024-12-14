document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    inJump = false
    if(dino.classList != "jump"){
        dino.classList.add("jump")
        inJump = true
    }
    setTimeout(function(){
        if(!inJump){
            dino.classList.remove("jump")
        }}, 1000)
}


let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert ("GAME OVER!!")
    }
}, 10)