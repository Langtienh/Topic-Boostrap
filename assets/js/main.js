window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        navbar.classList.add('navbar-bg'); 
    } else {
        navbar.classList.remove('navbar-bg');
    }
});