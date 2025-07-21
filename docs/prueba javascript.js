let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-nav button');
const carousel = document.getElementById('carousel');

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

setInterval(nextSlide, 5000);

carousel.addEventListener('scroll', () => {
  const slideWidth = slides[0].offsetWidth;
  const scrollPos = carousel.scrollLeft;
  currentSlide = Math.round(scrollPos / slideWidth);

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

//Pestaña Principal

let scrollInterval = null;

document.querySelectorAll('.carousel-arrow').forEach(button => {
  const targetId = button.dataset.target;
  const carousel = document.getElementById(targetId);
  const direction = button.classList.contains('left') ? -1 : 1;

  button.addEventListener('mousedown', () => {
    scrollInterval = setInterval(() => {
      carousel.scrollLeft += direction * 10;
    }, 10);
  });

  button.addEventListener('mouseup', () => {
    clearInterval(scrollInterval);
  });

  button.addEventListener('mouseleave', () => {
    clearInterval(scrollInterval);
  });
});

// Scroll automático (opcional, puede comentarse)
document.querySelectorAll('.carousel').forEach(carousel => {
  setInterval(() => {
    carousel.scrollLeft += 1;
  }, 30);
});