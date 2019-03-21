$(function () {
    $('[data-toggle="tooltip"]').tooltip()

})

const $menu= document.getElementById('menu')
const $menu1= document.getElementById('menu1')
const $menu2= document.getElementById('menu2')
const $menu3= document.getElementById('menu3')
const $menu4= document.getElementById('menu4')

const $mover = document.getElementById('navbarSupportedContent')

 $menu.addEventListener('click', (event) =>{

    $mover.classList.remove('show');

 });

 $menu1.addEventListener('click', (event) =>{

    $mover.classList.remove('show');

 });

 $menu2.addEventListener('click', (event) =>{

    $mover.classList.remove('show');

 });

 $menu3.addEventListener('click', (event) =>{

    $mover.classList.remove('show');

 });

 $menu4.addEventListener('click', (event) =>{

    $mover.classList.remove('show');

 });