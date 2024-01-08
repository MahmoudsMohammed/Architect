const icon = document.querySelector('.icon') as HTMLElement,
  links = document.querySelector('.menu') as HTMLElement;

icon.addEventListener('click', () => {
  links.classList.toggle('display');
});
