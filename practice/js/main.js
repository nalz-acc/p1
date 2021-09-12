const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

//toggle nav
burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
});

//animation links
navLinks.forEach((link, index) => {
    link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s';
});


navSlide();

}
