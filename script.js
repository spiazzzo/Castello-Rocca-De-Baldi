document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const thumbs = document.querySelectorAll('.thumb');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    thumbs.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
  }

  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      showSlide(i);
    });
  });

  showSlide(currentIndex);

  // ✅ Cambio automatico ogni 5 secondi
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
});
