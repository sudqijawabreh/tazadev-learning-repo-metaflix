const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});
