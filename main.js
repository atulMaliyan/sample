const menuBtn = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menuUL = document.querySelector('.menu ul');
const menu = document.querySelector('.menu');

let showMenu = false;

menuBtn.addEventListener("click" , toggleMeneu);

function toggleMeneu() {
    if(!showMenu){
        hamburger.classList.add('open');
        menuUL.classList.add('open');
        menu.classList.add('mobile-menu-open');
        showMenu = true;
    }
    else{
        hamburger.classList.remove('open');
        menuUL.classList.remove('open');
        menu.classList.remove('mobile-menu-open');
        showMenu = false;
    }
}


const lightTheme = document.querySelector('.light-theme');
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', toggleTheme);

let defaultTheme = false;

function toggleTheme() {
if(defaultTheme){
        lightTheme.classList.add('light-theme');
        // themeBtn.classList.add('light-theme');
        defaultTheme = false;
    }
    else{
        lightTheme.classList.remove('light-theme');
        // themeBtn.classList.remove('light-theme');
        defaultTheme = true;
    }
}