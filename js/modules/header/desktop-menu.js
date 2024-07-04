export function desktopMenu() {
    const menuButtons = document.querySelectorAll('.header-left__btn');
    const headerTop = document.querySelector('.header-top');

    menuButtons.forEach(btn => {
        const dataVal = btn.dataset.menu;
        const currentMenu = document.querySelector(`.${dataVal}`);
        let currentButton;

        btn.addEventListener('mouseover', () => {
            currentMenu.classList.add('active');
            headerTop.classList.add('active');
        });

        btn.addEventListener('mouseout', () => {
            if(window.scrollY === 0) {
                headerTop.classList.remove('active');
            }

            currentMenu.classList.remove('active');
        });

        currentMenu.addEventListener('mouseover', () => {
           headerTop.classList.add('active');
            currentButton = document.querySelector(`[data-menu=${dataVal}]`);
            currentButton.classList.add('active');
        });

        currentMenu.addEventListener('mouseout', () => {
            if(window.scrollY === 0) {
                headerTop.classList.remove('active');
            }
            currentButton.classList.remove('active');
        });
    });
}