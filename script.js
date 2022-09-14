const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY >0);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
});

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.main-text',{delay:200, origin:'left'});
sr.reveal('.left',{delay:200, origin:'left'});
sr.reveal('.right',{delay:200, origin:'right'});
sr.reveal('.about-img',{delay:200, origin:'left'});
sr.reveal('.about-text',{delay:200, origin:'right'});