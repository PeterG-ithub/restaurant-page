import './style.css';
import Restaurant from './restaurant.png';
import menu from './menu.js'
console.log('index.js is connected!!!!!')

const content = document.createElement('div');
content.classList.add('content');
document.body.appendChild(content);

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

function clearContent() {
  heroTitle.innerHTML = '';
}

menuNav.addEventListener('click', () => {
  clearContent();
  menu();
})

homeNav.addEventListener('click', () => {
  clearContent();
  heroTitle.innerHTML = 'Minecrƒft cafe'
})

aboutNav.addEventListener('click', () => {
  clearContent();
  heroTitle.innerHTML = 'About'
})