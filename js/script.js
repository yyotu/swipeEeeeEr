const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    touchRatio: 2,
    grabCursor: true,

    slideToClickedSlide: true,

    hashNavigation: {
      watchState: true,
    },

    keyboard: {
      enabled: true,

      onlyInViewport:true,

      pageUpDown:true,
    },

    mousewheel: {
      sensivity: 1,
    },

    autoHeight: true,
    

  
  });