
var swiper = new Swiper(".block__smartchoice__slide", {

  pagination: {
    el: ".swiper-pagination",
  },
});
var mySwiper = new Swiper('.block__appscreen__slide', {
  loop: true,
  speed: 1000,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 50,
  coverflowEffect: {
      rotate: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
      slidesPerView: 5,
  },
  pagination: {
    el: ".swiper-pagination",
  },

});