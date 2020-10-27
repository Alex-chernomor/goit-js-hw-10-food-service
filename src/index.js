import menuTemplate from "./template/menuTemplate.hbs";
import menuCard from "./menu.json";

import css from "./styles.css";

const menu = menuTemplate(menuCard);

const checkbox = document.querySelector('.theme-switch__toggle');
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', menu);

checkbox.addEventListener('click', (e)=>{
  localStorage.setItem('checkboxStatus', e.target.checked)
})

localStorage.getItem('checkboxStatus') === 'true'
  ? checkbox.checked = true
  : checkbox.checked = false;

  localStorage.getItem('checkboxStatus') === 'true'
  ? document.querySelector('body').classList.add('dark-theme')
  : document.querySelector('body').classList.add('light-theme');
  


checkbox.addEventListener('change',()=>{
  
  if(checkbox.checked){
    document.querySelector('body').classList.add('dark-theme');
    document.querySelector('body').classList.remove('light-theme');
  } else { 
    document.querySelector('body').classList.remove('dark-theme');
    document.querySelector('body').classList.add('light-theme')}
})
