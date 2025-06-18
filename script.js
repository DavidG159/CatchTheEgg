'use strict';

let box = document.querySelector('.mybox');


window.addEventListener("keydown", function (e) {

    if (!e.repeat) {
        console.log(`Key ${e.key} is pressed`);
    } else {
        console.log(`Key ${e.key} is repeating`);
    }


});