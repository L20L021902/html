//STOCKS
const box = document.querySelector('.box');
const btn = document.querySelector('.cells-btn1');
const buttonRemove = document.querySelector('.btn-remove');


btn.addEventListener('click', (event) => {
   box.style.display = "flex";
   event.preventDefault();
});

buttonRemove.addEventListener('click', (event) => {
   box.style.display = 'none';
   event.preventDefault();
});

const caseInfo = document.querySelector('.case');
const btnCase = document.querySelector('.cells-btn2');
const btnRemove = document.querySelector('.btn-remove');

btnCase.addEventListener('click', (event) => {
   caseInfo.style.display = 'flex';
   event.preventDefault();
});

btnRemove.addEventListener('click', (event) => {
   caseInfo.style.display = 'none';
   event.preventDefault();
});
