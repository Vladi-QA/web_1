const swiper = new Swiper('.swiper_container', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '."carusel_button.prev',
    prevEl: '.carusel_button.next',
  },

  
});