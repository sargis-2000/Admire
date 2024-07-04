export function popup(buttons) {
    const popupButtons = document.querySelectorAll(buttons);
    let currentPopup;

    function openPopup() {
        const dataVal = this.dataset.popup;
        currentPopup = document.querySelector(`.${dataVal}`);
        currentPopup.classList.add('active');
        document.documentElement.style.overflowY = 'hidden';

        currentPopup.addEventListener('click', closePopup);
    }

    function closePopup(e) {
        switch (true) {
            case e.target.classList.contains('popup'):
            case e.target.tagName === 'svg':
            case e.target.tagName === 'rect':
            case e.target.tagName === 'BUTTON':
                currentPopup.classList.remove('active');
                document.documentElement.removeAttribute('style');
        }
    }
    
    popupButtons.forEach(btn => {
        btn.addEventListener('click', openPopup);
    });
}