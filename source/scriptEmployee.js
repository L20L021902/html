const box = document.querySelector('.box');
const btn = document.querySelectorAll('.cells-btn1');


for (let button of btn) {
   button.addEventListener('click', (event) => {
      box.style.display = 'flex';
      event.preventDefault();
   });
}

//DELETE TABLE
const table = document.querySelector('tbody tr');
const btnsDelete = document.querySelectorAll('.cells-btn2');

btnsDelete.forEach(btn => {
   btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.target.closest('tr').remove();
   });
});

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

// // addBtn

let rowsTbody = document.querySelector('tbody');
let addBtn = document.querySelector('.addBtn');

let cellsTbody = document.querySelectorAll('tbody tr');
console.log(rowsTbody.innerHTML);

addBtn.addEventListener('click', () => {
   let serialNumber = +(rowsTbody.lastElementChild.children[0].innerHTML) + 1;
   let productNumber = document.querySelector('.zero-input').value;
   let productName = document.querySelector('.one-input').value;
   let productCategory = document.querySelector('.two-input').value;
   let productFirstPrice = document.querySelector('.three-input').value;
   let productSecondPrice = document.querySelector('.four-input').value;


   addRow();

});


function addRow() {

   let tr = rowsTbody.createElement(tr);

   for (let i = 0; i < cellsTbody.cells.length; i++) {
      tr.createElement('td')[i];
   }

   rowsTbody.append(tr);






   // let tr = document.createElement('tr');
   // let td = document.createElement('td');
   // rowsTbody.appendChild(tr);

   // for (let i = 0; i < cellsTbody.cells.length; i++) {

   //    tr.appendChild(td)[i];


   // }


   // for (let i = 0; i < rowsTbody.rows.length; i++) {
   //    let tr = rowsTbody.createElement('tr');
   //    let td = tr.createElement('td')[i];
   //    td[i].innerHTML = productNumber;




   // for (let i = 0; i < rowsTbody.rows.length; i++) {}
   // let tr = rowsTbody.createElement('tr');

   // for (let i = 0; i < cellsTbody.cells; i++) { }
   // let td = tr.createElement('td');
   // td.innerHTML = serialNumber;

   // tr.appendChild(td);

}