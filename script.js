'use strict';

//variables
let box = document.querySelector('.mybox');
let ball = document.querySelector('.myball');
let numBalls;

//box movement
let boxX = 20;
const moveBox = 20;
box.style.position = 'absolute';

//BallSize
const ballWidth = window.innerWidth - ball.offsetWidth;
const ballHeight = ball.offsetHeight;

console.log("Viewport width:", window.innerWidth);

//Functions
function updateBoxPosition() {
    box.style.left = boxX + 'px';
}


//test
let nums = 0;


//ballFall animation
function fallAnimation() {

    nums++;
    console.log(nums);

    if (nums < 300) {
        requestAnimationFrame(fallAnimation);
    }


}

console.log(document.body.clientHeight);

function move(theball) {
    ballPos = 0;
    ballPos += 5;
    theball.style.transform = `translateY(${ballPos}px)`;
    let hh = document.body.clientHeight - 250;
    if (ballPos < hh) {
        requestAnimationFrame(move);
    }
}

window.requestAnimationFrame(move);


//create Ball
function theBall() {
    let randomX = Math.floor(Math.random() * ballWidth);
    let randomY = 0;
    const newball = document.createElement('div');  //creates a new div
    newball.setAttribute('class', 'myball');        // adds the class myball to get the css
    document.body.append(newball);                  //adds the div to the body tag
    newball.style.left = randomX + 'px';
    newball.style.top = randomY + 'px';
    move(newball);
}

theBall();

//spawnBall
function spawnBall() {
    numBalls = Math.floor(Math.random() * 3) + 1;   //Generates a random number on how many balls will spawn
    for (let i = 0; i < numBalls; i++) {
        // theBall();
    }

}

// Whenever the browser window changes size
// Re-center the box automatically
// Without this, your box would stay in the same pixel position when resizing
// Center box initially and on window resize
function centerBox() {
    const boxWidth = box.offsetWidth;// Get total box width
    const windowWidth = window.innerWidth; //Get window width
    boxX = (windowWidth - boxWidth) / 2; //Calculate center position
    updateBoxPosition(); //Apply the position
}

centerBox();
window.addEventListener('resize', centerBox);



//=======================================================


spawnBall();

window.addEventListener("keydown", function (e) {
    const boxWidth = box.offsetWidth;


    if (e.key === 'ArrowLeft') {
        boxX = Math.max(0, boxX - moveBox); // Don't go past left edge
    } else if (e.key === 'ArrowRight') {
        const maxRight = window.innerWidth - boxWidth;
        boxX = Math.min(maxRight, boxX + moveBox); // Don't go past right edge
    }

    updateBoxPosition();
});