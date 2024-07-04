export function featuresSlider() {
    new Swiper('.mobile-features', {
        navigation: {
            prevEl: '.features-button__left',
            nextEl: '.features-button__right'
        }
    });
}