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
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();

        allFilters.forEach(item => {
            item.classList.remove('active');
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active');
    })
})

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close');

btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('show-modal')
})

btnCloseModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal')
})