let fillColor;
let circleX = 300;
let circleY = 300;

function setup() {
    createCanvas(600, 600);
    fillColor = color(random(255), random(255), random(255))
}

function draw() {
    background(255);
    circle(circleX, circleY, 550);  
}

function keyPressed() {
    if (key === UP_ARROW || key === 'w'){
        circleY -= 5;
    } else if ( key === LEFT_ARROW || key === 'a') {
        circleX -= 5;
    } else if (key === DOWN_ARROW || key === 's') {
        circleY += 5;
    } else if (key === RIGHT_ARROW || key === 'd') {
        circleX += 5;
    }
}