const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');
const aboutUs = document.querySelector('.about-us');
const aboutUsOffset = aboutUs.offsetTop;

mobileMenuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

window.addEventListener('scroll', () => {
// Get the current scroll position
const scrollPos = window.pageYOffset + window.innerHeight;

// If the user has scrolled down to the about-us section, add the animate class
if (scrollPos > aboutUsOffset + 100) {
aboutUs.classList.add('animate');
}
});


