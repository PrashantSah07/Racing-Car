let rightCtrlBtn = document.querySelector('.right-ctrl');
let leftCtrlBtn = document.querySelector('.left-ctrl');
let roadSlider = document.querySelectorAll('.one-line-road');
let wheelRotate = document.querySelectorAll('.wheel');
let car = document.querySelector('.box');
console.log(car)


let isOn = false;

rightCtrlBtn.addEventListener("click", function () {
    if (isOn) {

        for (let a of roadSlider) {
            a.style.animation = "slider 0.5s linear infinite";
        }

        for (let b of wheelRotate) {
            b.style.animation = "rotate 0.1s linear infinite"
        }

        car.style.animation = "upNdown 0.5s linear infinite alternate"
    }

    else {

        for (let a of roadSlider) {
            a.style.animation = "slider 2.5s linear infinite";
        }

        for (let b of wheelRotate) {
            b.style.animation = "rotate 0.5s linear infinite"
        }
        car.style.animation = "upNdown 1s linear infinite alternate"
    }
    isOn = !isOn;
});


leftCtrlBtn.addEventListener("click", function () {

    for (let a of wheelRotate) {
        a.style.animation = "none"
    }
    for (let b of roadSlider) {
        b.style.animation = "none"
    };
    car.style.animation = "none"
});






let ison2 = false;

let border = document.querySelector('.night-mode');
let nightMode = document.querySelector('.slide');
let container = document.querySelector('.container');

nightMode.addEventListener('click', function () {
    if (ison2) {
        border.style.borderColor = 'black';
        nightMode.style.borderColor = "black";
        nightMode.classList.toggle('move');
        container.classList.toggle('day');
        container.classList.toggle('night');
    }
    else {
        border.style.borderColor = 'white';
        nightMode.style.borderColor = "white";
        nightMode.classList.toggle('move');
        container.classList.toggle('day');
        container.classList.toggle('night');
    }
    ison2 = !ison2;

})

console.log(container)