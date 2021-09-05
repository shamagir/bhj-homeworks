'use strict';

let aciveClass = 'rotator__case_active';
let cards = Array.from(document.querySelectorAll('.card'));
let rotatorCases;
let activeIndex;
let activeColor;
let activeSpeed;

let timerId = setTimeout(function tick() {
  cards.forEach(function(item) {
    rotatorCases = Array.from(item.querySelectorAll('.rotator__case'));
    activeIndex = rotatorCases.indexOf(item.querySelector(`.${aciveClass}`));
    rotatorCases[activeIndex].classList.toggle(aciveClass);
    activeIndex = (activeIndex < rotatorCases.length - 1) ? activeIndex + 1 : 0;
    rotatorCases[activeIndex].classList.toggle(aciveClass);
    activeColor = rotatorCases[activeIndex].dataset.color;
    activeSpeed = rotatorCases[activeIndex].dataset.speed;
    rotatorCases[activeIndex].style.color = activeColor;
  });

  timerId = setTimeout(tick, activeSpeed);
}, activeSpeed);