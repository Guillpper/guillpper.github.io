// ===== CONFIGURACIÓN GENERAL =====
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-nav button');
const carousel = document.getElementById('carousel');

// ===== FUNCIONES DE CONTROL DE SLIDES =====
function goToSlide(n) {
  currentSlide = n;
  updateCarousel();
}

function updateCarousel() {
  carousel.scrollTo({
    left: slides[currentSlide].offsetLeft,
    behavior: 'smooth'
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

// ===== AUTO-SLIDE CON CONTROL POR HOVER =====
let autoSlideInterval = setInterval(nextSlide, 5000);

carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextSlide, 5000);
});

// ===== SINCRONIZACIÓN CON SCROLL MANUAL =====
carousel.addEventListener('scroll', () => {
  const slideWidth = slides[0].offsetWidth;
  const scrollPos = carousel.scrollLeft;
  currentSlide = Math.round(scrollPos / slideWidth);

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
});

// Navegación por dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

// ===== FLECHAS DE SCROLL CONTINUO =====
let scrollTimer = null;

document.querySelectorAll('.arrow').forEach(button => {
  const direction = button.classList.contains('left') ? -1 : 1;
  const carouselId = button.dataset.carousel;
  const targetTrack = document.querySelector(`#${carouselId} .carousel-track`);

  const startScroll = () => {
    scrollTimer = setInterval(() => {
      targetTrack.scrollLeft += direction * 10;
    }, 20);
  };

  const stopScroll = () => clearInterval(scrollTimer);

  button.addEventListener('mousedown', startScroll);
  button.addEventListener('mouseup', stopScroll);
  button.addEventListener('mouseleave', stopScroll);
});

// ===== SCROLL AUTOMÁTICO CONTROLADO =====
document.querySelectorAll('.carousel').forEach(carousel => {
  let autoScroll = setInterval(() => {
    carousel.scrollLeft += 1;
  }, 30);

  carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      carousel.scrollLeft += 1;
    }, 30);
  });
});

// ===== SCROLL AUTOMÁTICO PARA TRACKS =====
document.querySelectorAll('.carousel-track').forEach(track => {
  let autoTrack = setInterval(() => {
    track.scrollLeft += 1;
  }, 40);

  track.addEventListener('mouseenter', () => clearInterval(autoTrack));
  track.addEventListener('mouseleave', () => {
    autoTrack = setInterval(() => {
      track.scrollLeft += 1;
    }, 40);
  });
});

// ===== AJUSTE RESPONSIVO CON ResizeObserver =====
if ('ResizeObserver' in window) {
  const resizeObserver = new ResizeObserver(() => {
    updateCarousel();
  });
  resizeObserver.observe(carousel);
}

// ===== SCROLL SUAVE PERSONALIZADO =====
function smoothScrollTrack(track, distance) {
  let total = 0;
  function step() {
    if (total < distance) {
      track.scrollLeft += 2;
      total += 2;
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// ===== CARRUSEL DINÁMICO PARA TODAS LAS SECCIONES =====
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const leftArrow = wrapper.querySelector('.carousel-arrow.left');
  const rightArrow = wrapper.querySelector('.carousel-arrow.right');

  let autoScroll = setInterval(() => {
    carousel.scrollLeft += 1;
  }, 25);

  // Detener scroll al hacer hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      carousel.scrollLeft += 1;
    }, 25);
  });

  // Scroll continuo al mantener flechas presionadas
  let scrollTimer = null;

  const startScroll = (direction) => {
    scrollTimer = setInterval(() => {
      carousel.scrollLeft += direction * 10;
    }, 20);
  };

  const stopScroll = () => clearInterval(scrollTimer);

  leftArrow.addEventListener('mousedown', () => startScroll(-1));
  rightArrow.addEventListener('mousedown', () => startScroll(1));
  leftArrow.addEventListener('mouseup', stopScroll);
  rightArrow.addEventListener('mouseup', stopScroll);
  leftArrow.addEventListener('mouseleave', stopScroll);
  rightArrow.addEventListener('mouseleave', stopScroll);
});
flatpickr("#selector-fecha", {
  minDate: "today",
  dateFormat: "Y-m-d",
  disableMobile: true,
});
