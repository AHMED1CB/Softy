$(document).ready(function() {
    let menu = $('.menu');
    let navbar = $('.navbar');

    menu.click(function() {
        navbar.toggleClass('hero');
    });
});


$('.menu').click(()=>{
$('.hero').slideToggle()
})


$(window).scroll(function () {
let element1 = $('.serv1 .image');
let element2 = $('.serv2 .image');
if(window.scrollY >= $('.featurs').offset().top && window.scrollY <= $('.work').offset().top){
element1.addClass('shower')
element2.addClass('lefter')
}
})


let element1 = $('.serv1 .image');
let element2 = $('.serv2 .image');
if(window.scrollY >= $('.featurs').offset().top && window.scrollY <= $('.work').offset().top){
element1.addClass('shower')
element2.addClass('lefter')
}


let links = document.querySelectorAll('header ul li a')



let plans = document.querySelectorAll('.plan');
for (var i = 0; i < plans.length; i++) {
plans[i].classList.add('hidden')
}

$(window).scroll(function () {
if (window.scrollY >= 3049){
let plans = document.querySelectorAll('.plan');
for (var i = 0; i < plans.length; i++) {
plans[i].classList.add('sh')
}
}
})



let counts = document.querySelectorAll('.counter .count h3')
let sec = document.querySelector('.counter');
let starts = false;
function count(el) {
let stoped = el.getAttribute('dtata');
let counteing = setInterval( ()=>{
el.innerHTML -= -1;

if (+el.innerHTML == stoped){
clearInterval(counteing)
}
},2000 / stoped)
}


window.onscroll = function () {
if (window.scrollY >= sec.offsetTop-300){
if (!starts){
counts.forEach((e) => count(e))

starts = true
}
}
}
