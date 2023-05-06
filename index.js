const notesBtn = document.querySelector('#go-to-notes');
const todoBtn = document.querySelector('#go-to-todo');

const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger-navigation');
const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    hamburgerNav.classList.toggle('hamburger-navigation--active');
    if (hamburger.classList.contains('hamburger--active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
}

hamburger.addEventListener('click', handleClick)
