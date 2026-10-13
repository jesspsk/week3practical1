let circleX = 300;
let circleY = 300;
let fillCircle = 255

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    fill(fillCircle);
    circle(circleX, circleY, 300);
}

function mouseDragged(){
    if (circleX - 150 <= mouseX && mouseX <= circleX + 150 && circleY - 150 <= mouseY && mouseY <= circleY + 150){
        circleX = mouseX;
        circleY = mouseY;
        fillCircle = 100;
    }
}

function mouseReleased() {
    fillCircle = 255
}