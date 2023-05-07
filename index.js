// const { TweenMax } = require("gsap/gsap-core");

const notesBtn = document.querySelector('#go-to-notes');
const todoBtn = document.querySelector('#go-to-todo');
const switchBtn = document.querySelector('.button-switch')
const toolsBox = document.querySelector('.content')
const gamesBox = document.querySelector('.content-games')
const switchBtnMobile = document.querySelector('#btnSwitchHamburger')
let currentView = 'tools'

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

const swtichContent = () =>{
  switchBtn.classList.add('disabled');
  switchBtn.disabled = true;
  setTimeout(function() {
    switchBtn.classList.remove('disabled');
    switchBtn.disabled = false;
  }, 1000);
  if(currentView === 'tools'){
    TweenMax.to(toolsBox, 0.5, {x: -2000, display: 'none'})
    TweenMax.fromTo(gamesBox, 0.5, {display: 'flex', display: 'none', x: 2000}, {delay: 0.5, display: 'flex', display: 'flex', x: 0})
    currentView = 'games'
  }
  else if(currentView === 'games'){
    TweenMax.to(gamesBox, 0.5, {x: -2000, display: 'none'})
    TweenMax.fromTo(toolsBox, 0.5, {display: 'flex', display: 'none', x: 2000}, {delay: 0.5, display: 'flex', display: 'flex', x: 0})
    currentView = 'tools'
  }
}

const swtichContentMobile = () =>{
  switchBtnMobile.classList.add('disabled');
  switchBtnMobile.disabled = true;
  setTimeout(function() {
    switchBtnMobile.classList.remove('disabled');
    switchBtnMobile.disabled = false;
  }, 1000);
  if(currentView === 'tools'){
    TweenMax.to(toolsBox, 0.5, {y: 2000, display: 'none'})
    TweenMax.fromTo(gamesBox, 0.5, {display: 'flex', display: 'none', y: 2000}, {delay: 0.5, display: 'flex', display: 'flex', y: 0})
    currentView = 'games'
  }
  else if(currentView === 'games'){
    TweenMax.to(gamesBox, 0.5, {y: 2000, display: 'none'})
    TweenMax.fromTo(toolsBox, 0.5, {display: 'flex', display: 'none', y: 2000}, {delay: 0.5, display: 'flex', display: 'flex', y: 0})
    currentView = 'tools'
  }
}

hamburger.addEventListener('click', handleClick)
switchBtn.addEventListener('click', swtichContent)
switchBtnMobile.addEventListener('click', swtichContentMobile)