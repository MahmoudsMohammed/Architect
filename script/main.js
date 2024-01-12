"use strict";

var icon = document.querySelector('.icon'),
  links = document.querySelector('.menu'),
  right = document.querySelector('#right'),
  left = document.querySelector('#left'),
  members = document.querySelector('.members');

// Handle Icon
icon.addEventListener('click', function () {
  links.classList.toggle('display');
});

// Handle Arrows to slide the team members
right.addEventListener('click', function (e) {
  members.scrollLeft += 370;
  members.style.scrollBehavior = 'smooth';
});
left.addEventListener('click', function (e) {
  members.scrollLeft -= 370;
  members.style.scrollBehavior = 'smooth';
});