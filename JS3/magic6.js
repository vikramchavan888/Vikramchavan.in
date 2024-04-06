// Barba Load Wrapper
barba.hooks.beforeEnter(() => {

    var swiper = new Swiper('.swiper-images-slider', {
       speed: 500,
       touch: true,
       grabCursor: true,
       slidesPerView: 1,
       loop: false,
       initialSlide: 1,
       spaceBetween: 60,
       autoplay: false,
       navigation: {
          nextEl: '.swiper-button-next-images-slider',
          prevEl: '.swiper-button-prev-images-slider',
       },
       pagination: {
          el: '.swiper-pagination-images-slider',
       },
    });
 
    var swiper = new Swiper('.swiper-images-slider-single-project', {
       speed: 500,
       touch: true,
       grabCursor: true,
       slidesPerView: 1,
       loop: true,
       autoplay: false,
       navigation: {
          nextEl: '.swiper-button-next-images-slider-single-project',
          prevEl: '.swiper-button-prev-images-slider-single-project',
       },
       pagination: {
          el: '.swiper-pagination-images-slider-single-project',
       },
    });
 
 });    