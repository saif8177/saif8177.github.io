var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("header")[0].style.top = "0";
    } else {
        document.getElementsByTagName("header")[0].style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}

menu = document.querySelector('.menu');
nav = document.querySelector('.header')
navList = document.querySelector('.navbar')


function clicked() {
    nav.classList.toggle('h-nav');
    navList.classList.toggle('v-nav');
}