"use strict";
const icon = document.querySelector('.icon'), links = document.querySelector('.menu'), right = document.querySelector('#right'), left = document.querySelector('#left'), members = document.querySelector('.members'), main = document.querySelector('.main'), load = document.querySelector('.loading');
// Handle Icon
icon.addEventListener('click', () => {
    links.classList.toggle('display');
});
// Handle Arrows to slide the team members
right.addEventListener('click', (e) => {
    members.scrollLeft += 320;
    members.style.scrollBehavior = 'smooth';
});
left.addEventListener('click', (e) => {
    members.scrollLeft -= 320;
    members.style.scrollBehavior = 'smooth';
});
// Handle the spinner
document.addEventListener('DOMContentLoaded', () => {
    main.style.display = 'none';
    setTimeout(() => {
        load.style.display = 'none';
        main.style.display = 'block';
    }, 4000);
});
