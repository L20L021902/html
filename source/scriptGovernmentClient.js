const box = document.querySelector('.box');
const btn = document.querySelectorAll('.cells-btn1');


for (let button of btn) {
   button.addEventListener('click', (event) => {
      box.style.display = 'flex';
      event.preventDefault();
   });
}

//Highlight

let requestButton = document.querySelector('.head-btn');

requestButton.addEventListener('click', () => {
   findProduct();
})

function findProduct() {
   let allClientNumbers = document.querySelectorAll('.body-rows');
   let productNumber = document.querySelector('.look-input').value;

   clearHighlight();

   for (item of allClientNumbers) {
      if (item.children[0].innerHTML === productNumber) {
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

   const rows = document.querySelector('#clients_table_rows');

	var wrapColumn = function(value) {
		return "<td>" + value + "</td>";
	};

   var makeButtonsRow = function(client_id) {
      return "<td class=\"cells-btn\">" +
      "<a href=\"\" class=\"cells-btn1\">编辑</a>" +
      "<a href=\"/governmentClient/delete?client_id=" + client_id + "\" class=\"cells-btn2\">册除</a>" +
      "</td>";
   }

   var rows_html = ""
	for ( var i = 0; i < data.length; i += 1) {
		rows_html += "<tr class=\"body-rows\">" +
         wrapColumn(data[i].client_id) +
         wrapColumn(data[i].name) +
         wrapColumn(data[i].sex) +
         wrapColumn(data[i].phone) +
         wrapColumn(data[i].address) +
         makeButtonsRow(data[i].client_id) +
         "</tr>";
	}

   rows.innerHTML = rows_html;
}

async function getClients() {
   await fetch('/governmentClient/get', {
      method: 'GET'
   })
   .then(res => res.json())
   .then(data => makeTable(data))
   .catch(e => {
      console.log(e);
      alert("Could not get clients");
   })
}

document.addEventListener("DOMContentLoaded", getClients);

let buttonForm = document.querySelector('.addBtn');

async function postRequest(url, info) {
  return await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(info),
  }).then(() => {
	window.location.reload();
  }).catch(() => {
	alert("Couldn't add user")
  });
}

buttonForm.addEventListener('click', (e) => {
	e.preventDefault();
   let client_id = Number(document.querySelector('#input-client_id').value);
   let name = document.querySelector('#input-name').value;
   let sex = document.querySelector('#input-sex').value;
   let phone = Number(document.querySelector('#input-phone').value);
   let address = document.querySelector('#input-address').value;

  postRequest('/governmentClient/add', {
    client_id: client_id,
    name: name,
    address: address,
    phone: phone,
    sex: sex
  })
})