// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-G4F78BMFGL');

//  Init AOS
 AOS.init({
    duration: 1000
 });

//  Set viewport height (fix for mobile)
addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})

// Auto hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
    } else {
        setTimeout(()=>{
            document.getElementsByClassName("navbar")[0].style.top = "-250px";
        },1500)
    }
    prevScrollpos = currentScrollPos;
}

// Hide Show navbar on web/mobile
menu = document.querySelector('.menu');
nav = document.querySelector('.navbar')
navList = document.querySelector('.navList')

function clicked() {
    nav.classList.toggle('h-nav');
    navList.classList.toggle('v-nav');
}

// Set active navitem
var navItems = document.getElementsByClassName("nav-items");

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
