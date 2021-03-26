const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');

ham.addEventListener('click', function() {
    enlaces.classList.toggle('activado');
})