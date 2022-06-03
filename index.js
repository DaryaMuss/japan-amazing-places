(function() {
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active");
        } else if (window.pageYOffset < 50) {
            header.classList.remove("header_active")
        }
    };
}());

//Burger//

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    
    burgerItem.addEventListener('click', function() {
        menu.classList.add('header_nav-active');
    });

    menuCloseItem.addEventListener('click', function() {
        menu.classList.remove('header_nav-active');
    });
}());