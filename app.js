const hamburgerBtn = document.querySelector('.hamburger-btn');
const logo = document.querySelector('.logo');
const navbarContainer = document.querySelector('.navbar-container');
const navbarHeaderContainer = document.querySelector('.navbar-header-container');
const closeBtn = document.querySelector('.close-btn');

hamburgerBtn.addEventListener('click', () => {
    logo.classList.add('no-display');
    hamburgerBtn.classList.add('no-display');
    navbarContainer.style.display = 'block';
    navbarHeaderContainer.style.backgroundColor = 'white';
    navbarHeaderContainer.style.position = 'fixed';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    logo.classList.remove('no-display');
    hamburgerBtn.classList.remove('no-display');
    navbarContainer.style.display = 'none';
    navbarHeaderContainer.style.backgroundColor = 'transparent';
    navbarHeaderContainer.style.position = 'absolute';
    closeBtn.style.display = 'none';
});