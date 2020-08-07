

document.querySelector('header i').addEventListener('click', ()=>{
    document.querySelector('aside').classList.add('show');
});

document.querySelector('header i').addEventListener('click', ()=>{
    document.querySelector('.menu .fa-times').classList.add('show');
});

document.querySelector('.menu .fa-times').addEventListener('click', ()=>{
    document.querySelector('.menu  .fa-times').classList.remove('show');
    document.querySelector('aside').classList.remove('show');
});