window.addEventListener('scroll', () => {
    const logoIcon = document.querySelector('.header-logo__icon');
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >=1) {
        logoIcon.style.height = '30px';
    } else {
        logoIcon.style.height = '';
    }
});
