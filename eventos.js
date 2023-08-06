document.addEventListener('DOMContentLoaded', () => {

const div = document.querySelector('div');
div.addEventListener('click', () => {
  alert('Hola! Soy el div');
  });

const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
  event.stopPropagation();
  alert('Hola!');
  } )
});