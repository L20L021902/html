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

function makeTable(data) {

   const rows = document.querySelector('#goods_table_rows');
   rows.append("test")

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

   var makeButtonsRow = function(goods_id) {
      return "<td class=\"cells-btn\">" +
      "<a href=\"/employee/delete?goods_id=" + goods_id + "\" class=\"cells-btn1\">编辑</a>" +
      "<a href=\"\" class=\"cells-btn2\">册除</a>" +
      "</td>";
   }

	for ( var i = 0; i < data.length; i += 1) {
		rows.append("<tr class=\"body-rows\">" +
         wrapColumn(data[i].id) +
         wrapColumn(data[i].goods_id) +
         wrapColumn(data[i].name) +
         wrapColumn(data[i].category) +
         wrapColumn(data[i].buy_price) +
         wrapColumn(data[i].sell_price) +
         makeStatusRow(data[i].status) +
         wrapColumn(data[i].update_date) +
         makeButtonsRow(data[i].goods_id) +
         "</tr>")
	}
}

async function getGoods() {
   fetch('/employee/get', {
      method: 'GET'
   }).then(res => {
      makeTable(res.json());
   }).catch(() => {
      alert("Could not get goods");
   })
}

document.addEventListener("DOMContentLoaded", getGoods);
