const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(menuLink => {
    menuLink.onclick = function() {
        const parentLink = menuLink.parentElement;
        if (parentLink.querySelector('.menu_sub').className === 'menu menu_sub') {
            parentLink.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parentLink.querySelector('.menu_sub').className = 'menu menu_sub';
        }

        if (menuLink.closest('.menu_main')) {
            return false;
        }
    }
});