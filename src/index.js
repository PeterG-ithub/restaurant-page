import './style.css';
import Restaurant from './restaurant.png';

console.log('index.js is connected!!!!!')

const content = document.querySelector('#content');
function clearContent() {
  content.innerHTML = '';
}

const navContainer = document.createElement('div');
navContainer.classList.add('nav-container');

const homeNav = document.createElement('button');
homeNav.classList.add('nav-home');
homeNav.innerHTML = 'Home'

const menuNav = document.createElement('button');
menuNav.classList.add('nav-menu');
menuNav.innerHTML = 'Menu'

const aboutNav = document.createElement('button');
aboutNav.classList.add('nav-about');
aboutNav.innerHTML = 'About'

const heroTitle = document.createElement('div')
heroTitle.classList.add('hero-title')
heroTitle.innerHTML = 'Minecrƒft cafe'

navContainer.appendChild(homeNav)
navContainer.appendChild(menuNav)
navContainer.appendChild(aboutNav)
content.appendChild(navContainer)
content.appendChild(heroTitle)