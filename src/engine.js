const canvas = document.getElementById("Main-Screen")
const ctx = canvas.getContext("2d")
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

class Entity {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.fIndex = functionLoop.length
        functionLoop.push(this)
    }
    destroy(){
        functionLoop[fIndex] = false
    }
    loop() {
    }
}

function fireClock(){
    document.dispatchEvent(clockTick)
    for (const object in functionLoop){
        if (functionLoop[object]){
             functionLoop[object].loop()
        }
    }
}

class Player extends Entity {
    constructor(x,y) {
        super(x,y)
        this.img = document.getElementById('player-ship')
    }
    loop(){
        this.x += (right) - (left)
        this.y += (down) - (up) 
        ctx.drawImage(img, this.x, this.y)
}
