// first thing declear the element that you want work on it
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


// this for do action of click the buttom 
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

