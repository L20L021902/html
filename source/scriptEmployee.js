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


//ADDBTN INPUT

let addBtn = document.querySelector('.addBtn');
let rowsTbody = document.querySelector('tbody');
let cellsTbody = document.querySelectorAll('tbody td');
let bodyRows = document.querySelectorAll('.rowsonee td');

addBtn.addEventListener('click', () => {

   addRow();

});


function addRow() {

   let serialNumber = +(rowsTbody.lastElementChild.children[0].innerHTML) + 1;
   let productNumber = document.querySelector('.zero-input').value;
   let productName = document.querySelector('.one-input').value;
   let productCategory = document.querySelector('.two-input').value;
   let productFirstPrice = document.querySelector('.three-input').value;
   let productSecondPrice = document.querySelector('.four-input').value;



   if (productNumber === '' || productName === '' || productName === '' || productCategory === '' || productFirstPrice === '' || productSecondPrice === '') {
      return;
   } else {

      //INPUT
      let newTr = document.createElement('tr');
      rowsTbody.append(newTr);

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
      let td7 = document.createElement('td');

      let words = ['却贷', '有货'];
      let wordArr = words[Math.floor(Math.random() * words.length)];

      if (wordArr === '却贷') {
         td7.classList.add('cells-status1');
      } else {
         td7.classList.add('cells-status2');
      }

      td7.innerHTML = `${wordArr}`;

      //TD TIME

      let td8 = document.createElement('td');

      function randomDate(start, end) {
         return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
      }

      var myDate = randomDate(new Date(2012, 0, 1), new Date());

      let timeData = myDate.getFullYear() + '-'
         + ('0' + (myDate.getMonth() + 1)).slice(-2)
         + '-' + ('0' + myDate.getDate()).slice(-2)
         + ' '
         + ('0' + myDate.getHours()).slice(-2)
         + ':' + ('0' + myDate.getMinutes()).slice(-2)
         + ':' + ('0' + myDate.getSeconds()).slice(-2)
         ;

      td8.innerHTML = `${timeData}`;

      //TD LINK
      td9 = document.createElement('td');
      td9.classList.add('cells-btn');

      let linkOne = document.createElement('a');
      let linkAppendOne = td9.appendChild(linkOne);
      linkAppendOne.classList.add('cells-btn1');
      linkAppendOne.innerHTML = '编辑';

      let linkTwo = document.createElement('a');
      let linkAppendTwo = td9.appendChild(linkTwo);
      linkAppendTwo.classList.add('cells-btn2');
      linkAppendTwo.innerHTML = '册除';

      newTr.appendChild(td1);
      newTr.appendChild(td2);
      newTr.appendChild(td3);
      newTr.appendChild(td4);
      newTr.appendChild(td5);
      newTr.appendChild(td6);
      newTr.appendChild(td7);
      newTr.appendChild(td8);
      newTr.appendChild(td9);

      //CELLS-LINK IN INPUT
      // let btnEdit = document.querySelector('.cells-btn1');
      let boxModal = document.querySelector('.box');

      linkAppendOne.addEventListener('click', (event) => {
         boxModal.style.display = 'flex';
         event.preventDefault();
      });



      linkAppendTwo.addEventListener('click', (event) => {
         event.target.closest('tr').remove();
         event.preventDefault();
      });

      const btnRemove = document.querySelector('btn-remove');

      btnRemove.add

   }
}



