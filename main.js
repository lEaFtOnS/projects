function preload() {
    
}

function setup() {
 canvas=createCanvas(500,500)   
 canvas.position(500,200)
 Video=createCapture(VIDEO)
 Video.hide()
}
function draw() {
    image(Video,0,0,500,500)
    
}