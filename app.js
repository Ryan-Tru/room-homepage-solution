const hamburgerBtn = document.querySelector('.hamburger-btn');
const logo = document.querySelector('.logo');
const navbarContainer = document.querySelector('.navbar-container');
const navbarHeaderContainer = document.querySelector('.navbar-header-container');
const closeBtn = document.querySelector('.close-btn');
const nextBtn = document.querySelector('.slide-next-btn');
const prevBtn = document.querySelector('.slide-prev-btn');

let slides = document.querySelectorAll('.slide');
let slideIndex = 1;

hamburgerBtn.addEventListener('click', () => {
    logo.style.setProperty('--default-navbar-display', 'none');
    hamburgerBtn.style.setProperty('--default-navbar-display', 'none');
    navbarContainer.style.setProperty('--navbar-container-display', 'block');
    navbarHeaderContainer.classList.add('navbar-header-container-active');
    navbarHeaderContainer.style.setProperty('--navbar-header-container-position', 'fixed');
    closeBtn.style.setProperty('--navbar-container-display', 'block');
});

closeBtn.addEventListener('click', () => {
    logo.style.setProperty('--default-navbar-display', 'block');
    hamburgerBtn.style.setProperty('--default-navbar-display', 'block');
    navbarContainer.style.setProperty('--navbar-container-display', 'none');
    navbarHeaderContainer.classList.remove('navbar-header-container-active');
    closeBtn.style.setProperty('--navbar-container-display', 'none');
});

nextBtn.addEventListener('click', () => showSlides(slideIndex += 1));

prevBtn.addEventListener('click', () => showSlides(slideIndex -= 1));

function showSlides(n) {
  if (n > slides.length) {
      slideIndex = 1;
    }

  if (n < 1) {
      slideIndex = slides.length;
    }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex-1].style.display = 'flex';
}

showSlides(slideIndex);