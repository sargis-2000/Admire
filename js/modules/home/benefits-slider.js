export function benefitsSlider() {
    new Swiper('.mobile-benefits', {
        navigation: {
            prevEl: '.benefits-buttons__prev',
            nextEl: '.benefits-buttons__next'
        }
    });
}