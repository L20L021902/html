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


let addBtn = document.querySelector('.addBtn');
let rowsTbody = document.querySelector('tbody');
let cellsTbody = document.querySelectorAll('tbody td');
let bodyRows = document.querySelectorAll('.rowsonee td');
// console.log(bodyRows);

addBtn.addEventListener('click', () => {
   // let serialNumber = +(rowsTbody.lastElementChild.children[0].innerHTML) + 1;
   // let productNumber = document.querySelector('.zero-input').value;
   // let productName = document.querySelector('.one-input').value;
   // let productCategory = document.querySelector('.two-input').value;
   // let productFirstPrice = document.querySelector('.three-input').value;
   // let productSecondPrice = document.querySelector('.four-input').value;


   addRow();

});

// let newTr = document.createElement('tr');

// for (let i = 0; i < bodyRows.length; i++) {
//    let newTd = document.createElement('td');
//    newTd.innerHTML = `${i}`;
//    newTr.append(newTd);
// }

// let rowsTr = rowsTbody.append(newTr);









function addRow() {

   let serialNumber = +(rowsTbody.lastElementChild.children[0].innerHTML) + 1;
   let productNumber = document.querySelector('.zero-input').value;
   let productName = document.querySelector('.one-input').value;
   let productCategory = document.querySelector('.two-input').value;
   let productFirstPrice = document.querySelector('.three-input').value;
   let productSecondPrice = document.querySelector('.four-input').value;
   let cellsBtn = document.querySelector('.cells-btn');

   let newTr = document.createElement('tr');
   rowsTbody.append(newTr);

   // for (let i = 0; i < bodyRows.length; i++) {
   //    let newTd = document.createElement('td');
   // newTd.innerHTML = `${productName}`;
   //    newTr.appendChild(newTd);
   // }

   // let rowsTr = rowsTbody.append(newTr);

   let td1 = document.createElement('td');
   td1.innerHTML = `${serialNumber}`;

   let td2 = document.createElement('td');
   td2.innerHTML = `${productNumber}`;

   let td3 = document.createElement('td');
   td3.innerHTML = `${productName}`;

   let td4 = document.createElement('td');
   td4.innerHTML = `${productCategory}`;

   let td5 = document.createElement('td');
   td5.innerHTML = `${productFirstPrice}`;

   let td6 = document.createElement('td');
   td6.innerHTML = `${productSecondPrice}`;

   // TD STATUS
   // function arrStatus(arr){
   //    return splice([Math.floor(Math.random()*arr.length)],1);
   // }

   // let arrStatus = ['却贷','有货'];

   // let td7 = document.createElement('td');

   //TD LINK
   td9 = document.createElement('td');

   td9.classList.add('cells-btn');

   // let linkOne = td9.createElement('a');
   // linkOne.innerHTML = '编辑';
   // linkOne.classList.add('cells-btn1');
   // td9.append(linkOne)

   // let linkTwo = td9.createElement('a');
   // linkTwo.innerHTML = '编辑';
   // linkTwo.classList.add('cells-btn2');
   // td9.append(linkTwo);



   // td9.innerHTML = `${cellsBtn}`;

   newTr.appendChild(td1);
   newTr.appendChild(td2);
   newTr.appendChild(td3);
   newTr.appendChild(td4);
   newTr.appendChild(td5);
   newTr.appendChild(td6);
   newTr.appendChild(td9);

}



