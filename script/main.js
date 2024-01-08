"use strict";

var icon = document.querySelector('.icon'),
  links = document.querySelector('.menu');
icon.addEventListener('click', function () {
  links.classList.toggle('display');
});