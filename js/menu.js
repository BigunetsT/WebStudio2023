(() => {
    const menuOpenBtnRef = document.querySelector("[data-menu-open]");
    menuOpenBtnRef.addEventListener('click', () => {
        menuOpenBtnRef.classList.add('is-open');
    });
    const menuCloseBtnRef = document.querySelector("[data-menu-close]");
    menuCloseBtnRef.addEventListener('click', () => {
        menuOpenBtnRef.classList.remove('is-open');
    });
})();