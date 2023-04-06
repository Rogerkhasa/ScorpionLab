var btn = document.querySelector('.toggle');
var nav = document.querySelector('nav');

btn.onclick = function(){
    nav.classList.toggle('aff_nav');
}