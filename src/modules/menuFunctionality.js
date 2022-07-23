

let menu = document.querySelector('#menu');
let nav = document.querySelector('#navbar ');

menu
.addEventListener('click', function(e){
    this.classList.toggle('open')
    nav.className = this.className
})