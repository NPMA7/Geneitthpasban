const burger = document.querySelector('#burger');
const navMenu =  document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
})