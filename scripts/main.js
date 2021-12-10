//const menuBtn = document.querySelector('.menu-btn');
const menuBtn = document.getElementById('mobile-cta')
navBar = document.getElementById('nav-Bar')
tabletOn = document.getElementById('tablet-on')
tabletOff = document.getElementById('tablet-off')

nav = document.querySelector('nav')      
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navBar.classList.add('menu-btn');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');        
        navBar.classList.remove('menu-btn');              
        menuOpen = false;
    }
});

tabletOn.addEventListener('click', () => {
    
        tabletOn.classList.remove('active');
        tabletOff.classList.add('active');
  
});

tabletOff.addEventListener('click', () => {
    
    tabletOff.classList.remove('active');
    tabletOn.classList.add('active'); 

});