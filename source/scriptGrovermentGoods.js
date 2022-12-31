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

function makeTable(data) {

   const rows = document.querySelector('#sales_table_rows');

	var wrapColumn = function(value) {
		return "<td>" + value + "</td>";
	};

   var makeButtonsRow = function(order_id) {
      return "<td class=\"cells-btn\">" +
      "<a href=\"\" class=\"cells-btn4\">编辑</a>" +
      "<a href=\"/governmentGoods/delete?order_id=" + order_id + "\" class=\"cells-btn5\">册除</a>" +
      "</td>";
   }

   var rows_html = ""
	for ( var i = 0; i < data.length; i += 1) {
		rows_html += "<tr class=\"body-rows\">" +
         wrapColumn(data[i].id) +
         wrapColumn(data[i].order_id) +
         wrapColumn(data[i].client_id) +
         wrapColumn(data[i].amount) +
         wrapColumn(data[i].status) +
         wrapColumn(data[i].update_date) +
         makeButtonsRow(data[i].order_id) +
         "</tr>";
	}

   rows.innerHTML = rows_html;
}

async function getSales() {
   await fetch('/governmentGoods/get', {
      method: 'GET'
   })
   .then(res => res.json())
   .then(data => makeTable(data))
   .catch(e => {
      console.log(e);
      alert("Could not get sales");
   })
}

document.addEventListener("DOMContentLoaded", getSales);