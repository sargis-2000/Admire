export function stickyHeader() {
    const headerTop = document.querySelector('.header-top');
    const media = window.matchMedia('(min-width: 1331px)');
    let lastScrollY = 0;

    if(media.matches) {
        function headerStick() {
            if(this.scrollY > lastScrollY) {
                headerTop.addEventListener('mouseover', headerTopShow);
                headerTop.classList.add('active');
                headerTop.style.transform = 'translateY(-85%)';
            } else {
                if(this.scrollY === 0)
                    headerTop.classList.remove('active');

                headerTop.removeAttribute('style');
                headerTop.removeEventListener('mouseover', headerTopShow);
            }

            lastScrollY = this.scrollY;
        }

        function headerTopShow() {
            if(this.getAttribute('style'))
                headerTop.removeAttribute('style');
        }

        window.addEventListener('scroll', headerStick);
        window.addEventListener('load', headerStick);
    }
}