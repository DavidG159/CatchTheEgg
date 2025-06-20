'use strict';

let box = document.querySelector('.mybox');

//box movement
let boxX = 50;
let boxY = 50;
const moveBox = 10;




window.addEventListener("keydown", function (e) {

    if (!e.repeat) {
        console.log(`Key ${e.key} is pressed`);
    } else {
        console.log(`Key ${e.key} is repeating`);
    }

    if (e.key === 'ArrowLeft') {
        boxX -= moveBox;
    } else if (e.key === 'ArrowRight') {
        boxX += moveBox;
    }

    box.style.left = boxX + 'px';


});