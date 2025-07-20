const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    direction: 'horizontal',
    speed: 1000,
    slidePerVuew: 1,
    spaceBetween:300,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-projets',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
  });

  function openMenuMobile() {
    document.querySelector('nav').classList.add('open');
    document.querySelector('.overlay').classList.add('open');
  }

  function closeMenuMobile() {
    document.querySelector('nav').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
  }
