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