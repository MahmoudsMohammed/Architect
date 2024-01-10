"use strict";
// Handle Icon
const icon = document.querySelector('.icon'), links = document.querySelector('.menu');
icon.addEventListener('click', () => {
    links.classList.toggle('display');
});
// Handle Arrows to slide the team members
document.querySelector('#right').addEventListener('click', (e) => {
    document.querySelector('.members').scrollLeft += 370;
    document.querySelector('.members').style.scrollBehavior =
        'smooth';
});
document.querySelector('#left').addEventListener('click', (e) => {
    document.querySelector('.members').scrollLeft -= 370;
    document.querySelector('.members').style.scrollBehavior =
        'smooth';
});
