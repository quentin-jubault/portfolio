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
    
    // Seulement si on est sur la page sortir
    var mainsortir = document.querySelector('main.mainsortir');
    if (mainsortir) mainsortir.classList.add('darkmode');

    document.getElementById('ampoule').classList.add('hidden');
    document.getElementById('ampouleBlack').classList.remove('hidden');
}

function lightmode() {
    document.querySelector('main').classList.remove('darkmode');

    var mainsortir = document.querySelector('main.mainsortir');
    if (mainsortir) mainsortir.classList.remove('darkmode');

    document.getElementById('ampouleBlack').classList.add('hidden');
    document.getElementById('ampoule').classList.remove('hidden');
}

var projetsMobile = document.getElementById("projetsMobile");
var projetsDesktop = document.getElementById("projetsDesktop");
var competences = document.getElementById("competences");

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
observer.observe(competences);


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

function openLightbox(src, caption) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-caption').textContent = caption;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

// Fermer avec Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});
