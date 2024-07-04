export function mobileMenu() {
    const burgerButton = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    const menuClose = document.querySelector('.menu-close');
    const headerTop = document.querySelector('.header-top');

    burgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            burgerIcon.classList.add('active');
            menuClose.classList.add('active');
            headerTop.classList.add('active-mobile');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            burgerIcon.classList.remove('active');
            menuClose.classList.remove('active');
            headerTop.classList.remove('active-mobile');
            document.documentElement.removeAttribute('style');
        }
    });
}