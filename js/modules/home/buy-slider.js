export function buySlider() {
    new Swiper('.buy-list', {
        slidesPerView: 3,
        spaceBetween: 30,

        breakpoints: {
            320: {
              slidesPerView: 1,
            },

            1200: {
                slidesPerView: 2,
            },

            1240: {
                slidesPerView: 3,
            }
        },

        navigation: {
            prevEl: '.buy-slider__prev',
            nextEl: '.buy-slider__next',
        }
    });
}