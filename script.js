'use strict';

//variables
let box = document.querySelector('.mybox');

//box movement
let boxX = 50;
const moveBox = 20;

box.style.position = 'absolute';

//Functions
function updateBoxPosition() {
    box.style.left = boxX + 'px';
}

function centerBox() {
    const boxWidth = box.offsetWidth;
    const windowWidth = window.innerWidth;
    boxX = (windowWidth - boxWidth) / 2;
    updateBoxPosition();
}


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