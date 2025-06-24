'use strict';

//variables
let box = document.querySelector('.mybox');
let ball = document.querySelector('.myball');
let test;
//box movement
let boxX = 20;
const moveBox = 20;
box.style.position = 'absolute';

//BallSize
const ballWidth = ball.offsetWidth;
const ballHeight = ball.offsetHeight;

//Ball
function theBall() {
    let randomX = (Math.floor(Math.random() * (window.innerWidth - ballWidth)));
    let randomY = (Math.floor(Math.random() * (window.innerHeight - ballHeight)));
    const newball = document.createElement('div');
    newball.setAttribute('class', 'myball');
    document.body.append(newball);
    newball.style.left = randomX + 'px';
    newball.style.top = randomY + 'px';

    console.log(randomX, randomY);

}


theBall();
theBall();


let numBalls;

function testBall() {
    numBalls = Math.floor(Math.random() * 3) + 1;

    console.log(numBalls);

    for (let i = 0; i < numBalls; i++) {
        console.log('ballSpawned!');

    }

}

testBall();




//Functions
function updateBoxPosition() {
    box.style.left = boxX + 'px';
}

//spawn ball but the problem is that it wont stop spawning...
// function spawnBall() {
//     setInterval(function () {
//         const randomBall = Math.floor(Math.random() * 3) + 1;// Generates a random number between 1 and 3
//         for (let i = 0; i <= randomBall; i++) {
//             console.log("ball has spawned!");

//         }
//     });
// }

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