export function projectsSlider() {
    const projectItems = Array.from(document.querySelectorAll('.projects-list__item'));
    
    if (projectItems.length % 2 !== 0) {
        projectItems[projectItems.length - 1].classList.add('h-full');
    }

    new Swiper('.projects-list', {
        slidesPerView: 3,

        grid: {
          rows: 3,
        },

        slidesPerColumn: 3,

        navigation: {
            prevEl: '.projects-buttons__prev',
            nextEl: '.projects-buttons__next'
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                },
            },

            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 3,
                },
            },
        }
    });
}