const topBar = document.getElementById('top-bar');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    topBar.classList.add('bg-lightSecondary');
    topBar.classList.add('text-black');
  } else {
    topBar.classList.remove('bg-lightSecondary');
    topBar.classList.remove('text-black');
  }
});

burger.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
