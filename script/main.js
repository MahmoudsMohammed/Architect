"use strict";
const icon = document.querySelector('.icon'), links = document.querySelector('.menu'), right = document.querySelector('#right'), left = document.querySelector('#left'), members = document.querySelector('.members');
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
