const mobileMenu = document.querySelector('.mobile_menu');
const menuBtnOpen = document.querySelector('.menu_btn_open');
const menuBtnClose = document.querySelector('.menu_btn_close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);