export function builders() {
    const builderButton = document.querySelector('[data-menu="builders"]');
    const buildersMenu = document.querySelector('.builders');
    const buildersLinks = document.querySelectorAll('[data-builder]');
    const buildersImg = Array.from(document.querySelectorAll('.builders-img'));

    function hiedActiveImg() {
        const activeImg= buildersImg.find(img => img.classList.contains('active'));
        if(activeImg)
            activeImg.classList.remove('active');
    }

    buildersLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            hiedActiveImg();

            const dataVal = link.dataset.builder;
            const currentBuilderImg = document.querySelector(`.${dataVal}`);
            currentBuilderImg.classList.add('active');
        });
    });

    builderButton.addEventListener('mouseout', hiedActiveImg);
    buildersMenu.addEventListener('mouseleave', hiedActiveImg);
}