const box = document.querySelector('.boxone');
const btns = document.querySelectorAll('.cells-btn4');
const btnsRemove = document.querySelectorAll('.btn-remove');
const table = document.querySelector('tbody tr');
const btnsDelete = document.querySelectorAll('.cells-btn5');
const boxAppend = document.querySelector('.box');
const btnAppend = document.querySelector('.bottom-btn');
const btnRemoveBottom = document.querySelector('.btn-remove1 ')

for (let button of btns) {
   button.addEventListener('click', (event) => {
      box.style.display = 'flex';
      event.preventDefault();
   });
}


btnsDelete.forEach(btn => {
   btn.addEventListener('click', (event) => {
      event.target.closest('tr').remove();
      event.preventDefault();
   });
});


btnAppend.addEventListener('click', (event) => {
   boxAppend.style.display = 'flex';
   event.preventDefault();
});


btnRemoveBottom.addEventListener('click', (event) => {
   boxAppend.style.display = 'none';
   event.preventDefault();
});



for (let btnRemove of btnsRemove) {
   btnRemove.addEventListener('click', (event) => {
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