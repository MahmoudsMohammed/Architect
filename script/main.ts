// Handle Icon
const icon = document.querySelector('.icon') as HTMLElement,
  links = document.querySelector('.menu') as HTMLElement;

icon.addEventListener('click', () => {
  links.classList.toggle('display');
});

// Handle Arrows to slide the team members
(document.querySelector('#right') as HTMLElement).addEventListener(
  'click',
  (e) => {
    (document.querySelector('.members') as HTMLElement).scrollLeft += 370;
    (document.querySelector('.members') as HTMLElement).style.scrollBehavior =
      'smooth';
  }
);

(document.querySelector('#left') as HTMLElement).addEventListener(
  'click',
  (e) => {
    (document.querySelector('.members') as HTMLElement).scrollLeft -= 370;
    (document.querySelector('.members') as HTMLElement).style.scrollBehavior =
      'smooth';
  }
);
