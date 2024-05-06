document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.1 }); // threshold - процент видимости элемента для срабатывания

    // Добавляем наблюдение за всеми элементами, которые должны анимироваться
    if (window.matchMedia('(min-width: 1280px)').matches) {
        document.querySelectorAll('.artboard-leftside__header-logo, .artboard-leftside__content_header, .artboard-leftside__actions_discount, .artboard-leftside__header-phone, .artboard-leftside__content_subheader, .artboard-leftside__content-service-features, .artboard-leftside__actions-button, .reasons__containers-blocks__item img, .reasons__container-blocks__actions button, .reasons__containers-blocks__item-text, .employees__container_blocks-item').forEach(el => {
            observer.observe(el);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
  
    // Обработчик для стрелки "назад"
    document.querySelector('.carousel-control-prev-clone').addEventListener('click', function() {
      items[currentItem].classList.remove('active');
      currentItem = (currentItem - 1 + items.length) % items.length;
      items[currentItem].classList.add('active');
      updateCarousel();
    });
  
    // Обработчик для стрелки "вперед"
    document.querySelector('.carousel-control-next-clone').addEventListener('click', function() {
      items[currentItem].classList.remove('active');
      currentItem = (currentItem + 1) % items.length;
      items[currentItem].classList.add('active');
      updateCarousel();
    });
  
    function updateCarousel() {
      const newTransform = `translateX(-${currentItem * 100}%)`;
      document.querySelector('.carousel-inner').style.transform = newTransform;
    }
  });