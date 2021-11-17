let btn = document.querySelector('#menuMobile');
let nav = document.querySelector('nav');
let icon = document.querySelector('#icon');

var menu = false;

window.addEventListener('resize', ()=>{
    document.location.reload();
})

btn.addEventListener('click', ()=>{
    if( this.menu == false ) {
        nav.style.transform = 'translateY(0)';
        icon.innerHTML = 'close'
        this.menu = !this.menu;
    } else {
        nav.style.transform = 'translateY(-100%)';
        icon.innerHTML = 'menu'
        this.menu = !this.menu;
    }
})