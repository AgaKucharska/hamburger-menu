const arrow = document.querySelector('i.fas');
const nav = document.querySelector('nav');

arrow.addEventListener('click', function () {
    this.classList.toggle('on');
    nav.classList.toggle('on');
})



// arrow.addEventListener('click', function () {
//     nav.classList.toggle('on')
// })