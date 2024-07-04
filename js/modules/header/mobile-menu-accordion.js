export function mobileMenuAccordion() {
    const mobileMenuButtons = document.querySelectorAll('.mobile-menu__btn');
    const mobileLangButton = document.querySelector('.mobile-lang__btn');

    mobileMenuButtons.forEach(btn => {
       const parent = btn.parentNode;
       const btnArrow = btn.querySelector('svg');

       btn.addEventListener('click', () => {
           parent.classList.toggle('active');
           btnArrow.classList.toggle('active');

           if (parent.classList.contains('active')) {
               parent.style.height = `${parent.scrollHeight}px`;
           } else {
               parent.removeAttribute('style');
           }
       });
    });

    mobileLangButton.addEventListener('click', () => {
        const arrow = mobileLangButton.querySelector('svg');
        const nextElement = mobileLangButton.nextElementSibling;

        nextElement.classList.toggle('active');
        arrow.classList.toggle('active');

        if (nextElement.classList.contains('active')) {
            nextElement.style.height = `${nextElement.scrollHeight}px`;
        } else {
            nextElement.removeAttribute('style');
        }
    });
}