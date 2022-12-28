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

//Highlight

let requestButton = document.querySelector('.head-btn');

requestButton.addEventListener('click', () => {
   findProduct();
})

function findProduct() {
   let allProductNumbers = document.querySelectorAll('.body-rows');
   let productNumber = document.querySelector('.look-input').value;

   clearHighlight();

   for (item of allProductNumbers) {
      if (item.children[1].innerHTML === productNumber) {
         item.classList.add('blueBackground');
      }
   }
}

function clearHighlight() {
   let allProductNumbers = document.querySelectorAll('.body-rows');

   allProductNumbers.forEach(item => {
      if (item.className == 'body-rows blueBackground') {
         item.classList.remove('blueBackground');
      }
   })
}