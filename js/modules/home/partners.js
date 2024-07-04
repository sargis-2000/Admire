export function partners() {
    document.addEventListener('DOMContentLoaded', () => {
        const partnersSlider = new Splide('.partners-list', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 5,
            pagination: false,
            arrows: false,
            gap: '107px',
            autoWidth: true,
            autoScroll: {
                speed: .5,
                pauseOnHover: false,
            },
            breakpoints: {
                1024: {
                    gap: '20px',
                    perPage: 3,
                },
                768: {
                    autoScroll: {
                        speed: 0.5,
                        pauseOnHover: false,
                    },
                }
            },
            pauseOnHover: false,
            pauseOnFocus: false,
        }).mount(window.splide.Extensions);
    });
}