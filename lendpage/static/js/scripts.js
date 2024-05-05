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
    document.querySelectorAll('.artboard-leftside__header-logo, .artboard-leftside__content_header, .artboard-leftside__actions_discount, .artboard-leftside__header-phone, .artboard-leftside__content_subheader, .artboard-leftside__content-service-features, .artboard-leftside__actions-button, .reasons__containers-blocks__item img, .reasons__container-blocks__actions button, .reasons__containers-blocks__item-text, .employees__container_blocks-item').forEach(el => {
        observer.observe(el);
    });
});