const clockTick = new Event('clockTick')
let up = false
let down = false
let left = false
let right = false
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowUp"){
        up = true
    }
    if (e.key === "ArrowDown"){
        down= true
    }
    if (e.key === "ArrowLeft"){
        left= true
    }
    if (e.key === "ArrowRight"){
        right= true
    }
})
document.addEventListener("keyup", function(e){
    if (e.key === "ArrowUp"){
        up = false
    }
    if (e.key === "ArrowDown"){
        down= false
    }
    if (e.key === "ArrowLeft"){
        left= false
    }
    if (e.key === "ArrowRight"){
        right= false
    }
})
function fireClock(){
    document.dispatchEvent(clockTick)
}
setInterval(fireClock, 16.66)
