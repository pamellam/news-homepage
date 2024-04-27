const navBar = document.querySelector('nav');
const openBtn = document.getElementById('button__open');
const closeBtn = document.getElementById('button__close');

// Event Listeners
openBtn.addEventListener('click', () => {
  navBar.classList.add('open');
});


closeBtn.addEventListener('click', () => {
  navBar.classList.remove('open');
});
