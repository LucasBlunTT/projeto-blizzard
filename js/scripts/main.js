var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true
});

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');

allFilters.forEach(filter => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('click');
    })
})