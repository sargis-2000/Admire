export function casesSlider() {
    new Swiper('.cases-slider', {
        navigation: {
            prevEl: '.cases__slider-left',
            nextEl: '.cases__slider-right'
        }
    });
}