//STOCKS
const box = document.querySelector('.box');
const btn = document.querySelectorAll('.cells-btn1');
const buttonRemove = document.querySelectorAll('.btn-remove');


for (let button of btn) {
   button.addEventListener('click', (event) => {
      box.style.display = 'flex';
      event.preventDefault();
   });
}

for (let btnRemove of buttonRemove) {
   btnRemove.addEventListener('click', (event) => {
      box.style.display = 'none';
      event.preventDefault();
   });
}


const caseInfo = document.querySelector('.case');
const btnCase = document.querySelectorAll('.cells-btn2');
const btnRemove = document.querySelectorAll('.btn-remove');

for (let btnInfo of btnCase) {
   btnInfo.addEventListener('click', (event) => {
      box.style.display = 'flex';
      event.preventDefault();
   });
}

for (let btnR of btnRemove) {
   btnR.addEventListener('click', (event) => {
      box.style.display = 'none';
      event.preventDefault();
   });
}

