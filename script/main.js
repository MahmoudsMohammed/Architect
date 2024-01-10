"use strict";
const icon = document.querySelector('.icon'), links = document.querySelector('.menu');
icon.addEventListener('click', () => {
    links.classList.toggle('display');
});
