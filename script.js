'use strict';

//variables
let box = document.querySelector('.mybox');

//box movement
let boxX = 50;
const moveBox = 20;
let boxY = 50;




box.style.position = 'absolute';

//Functions
function updateBoxPosition() {
    box.style.left = boxX + 'px';
}

function centerBox() {
    const boxWidth = box.offsetWidth;// Get total box width
    const windowWidth = window.innerWidth; //Get window width
    boxX = (windowWidth - boxWidth) / 2; //Calculate center position
    updateBoxPosition(); //Apply the position
}

// Whenever the browser window changes size

// Re-center the box automatically

// Without this, your box would stay in the same pixel position when resizing

// Center box initially and on window resize
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