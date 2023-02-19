window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('header_scrolled', window.scrollY > 0);
})

function openMenu() {
    const menu = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.querySelector('body');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('nav_active');
        menuToggle.classList.toggle('menu-toggle_active');
        body.classList.toggle('body_scrolled');
    })
}

function switchPages() {
    const pages = document.querySelectorAll('.pagination__link');
    pages.forEach((item) => {
        item.addEventListener('click', () => {
            pages.forEach(item => {
                item.classList.remove('pagination__link_active');
            });
            item.classList.add('pagination__link_active');
        })
    })
}

openMenu()
switchPages()