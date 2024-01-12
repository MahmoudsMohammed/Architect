const icon = document.querySelector('.icon') as HTMLElement,
  links = document.querySelector('.menu') as HTMLElement,
  right = document.querySelector('#right') as HTMLElement,
  left = document.querySelector('#left') as HTMLElement,
  members = document.querySelector('.members') as HTMLElement,
  main = document.querySelector('.main') as HTMLElement,
  load = document.querySelector('.loading') as HTMLElement;

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
