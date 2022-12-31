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

function makeTable(data) {

   const rows = document.querySelector('#stocks_table_rows');

	var wrapColumn = function(value) {
		return "<td>" + value + "</td>";
	};

   var makeStatusRow = function(status) {
      if (status == "却贷") {
         return "<td class=\"cells-status1\">却贷</td>";
      } else {
         return "<td class=\"cells-status2\">有货</td>";
      }
   }

   var makeButtonsRow = function() {
      return "<td>" +
      "<div class=\"cells-btn\">" +
         "<a href=\"\" class=\"cells-btn1\">库存盘点</a>" +
         "<a href=\"\" class=\"cells-btn2\">销售出库</a>" +
      "</div>" +
   "</td>";
   }

   var rows_html = ""
	for ( var i = 0; i < data.length; i += 1) {
		rows_html += "<tr class=\"body-rows\">" +
         wrapColumn(data[i].id) +
         wrapColumn(data[i].goods_id) +
         wrapColumn(data[i].name) +
         wrapColumn(data[i].category) +
         wrapColumn(data[i].sell_price) +
         wrapColumn(data[i].stock) +
         makeStatusRow(data[i].status) +
         wrapColumn(data[i].update_date) +
         makeButtonsRow() +
         "</tr>";
	}

   rows.innerHTML = rows_html;
}

async function getGoods() {
   await fetch('/stocks/get', {
      method: 'GET'
   })
   .then(res => res.json())
   .then(data => makeTable(data))
   .catch(e => {
      console.log(e);
      alert("Could not get stocks");
   })
}

document.addEventListener("DOMContentLoaded", getGoods);