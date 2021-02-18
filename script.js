const list = document.querySelector('.visible');
const toggle_btn = document.querySelector('.hamburger');

toggle_btn.addEventListener('click', () => {
    list.classList.toggle('invisible');
})