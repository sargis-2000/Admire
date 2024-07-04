export function scrollAnimation(...items) {
    const elements = document.querySelectorAll(items);

    const pricingSubtitleObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('disabled');
            }
        });
    });

    elements.forEach(elemnt => {
        pricingSubtitleObserver.observe(elemnt);
    });
}