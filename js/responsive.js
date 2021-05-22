 AOS.init({
    duration: 1000
 });

addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
    } else {
        document.getElementsByClassName("navbar")[0].style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}

menu = document.querySelector('.menu');
nav = document.querySelector('.navbar')
navList = document.querySelector('.navList')


function clicked() {
    nav.classList.toggle('h-nav');
    navList.classList.toggle('v-nav');
}