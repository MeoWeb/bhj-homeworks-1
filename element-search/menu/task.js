const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(menuLink => {
    menuLink.onclick = function () {
        const parentLink = menuLink.parentElement;
        const parentMenu = parentLink.querySelector('.menu_sub');

        if (parentMenu) {
            parentMenu.classList.toggle('menu_active');
            return false;
        }
    }
});