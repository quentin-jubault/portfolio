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

  function darkmode() {
    document.querySelector('main').classList.add('darkmode');
    document.getElementById('ampoule').classList.add('hidden');
    document.getElementById('ampouleBlack').classList.remove('hidden');
    
  }

  function lightmode() {
    document.querySelector('main').classList.remove('darkmode');
    document.getElementById('ampouleBlack').classList.add('hidden');
    document.getElementById('ampoule').classList.remove('hidden');
  }

var projetsMobile = document.getElementById("projetsMobile");
var projetsDesktop = document.getElementById("projetsDesktop");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(projetsMobile);
observer.observe(projetsDesktop);


function animateSequence(elements, animationClass) {
  let index = 0;

  function animateNext() {
    if (index >= elements.length) return;

    const current = elements[index];
    current.classList.add(animationClass);

    current.addEventListener("animationend", function handler() {
      current.removeEventListener("animationend", handler);
      index++;
      animateNext();
    });
  }

  animateNext();
}

const elements = [
  document.getElementById("firsttitle"),
  document.getElementById("apropos"),
  document.getElementById("photoDeProfil"),
  document.getElementById("introduction")
];

animateSequence(elements, "visible");

console.log(photoDeProfil);

// var firsttitle = document.getElementById("firsttitle");
// var apropos = document.getElementById("apropos");
// var photoDeProfil = document.getElementById("photoDeProfil");
// var introduction = document.getElementById("introduction");

// firsttitle.addEventListener("animationend", listener, false);

// firsttitle.className = "fade-up";

// function listener(event) {
//   switch (event.type) {
//     case "animationend":
//       apropos.classList.add("fade-up");
//       break;
//   }
// }
