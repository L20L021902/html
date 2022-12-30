function findByClass(className) {
  return document.querySelector(className)
}

let buttonForm = findByClass('.button-send');

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
	alert("Couldn't update user info")
  });
}

buttonForm.addEventListener('click', (e) => {
	e.preventDefault();
  let realname = findByClass('.head-header1').childNodes[3].value;
  let address = findByClass('.top1-wrap').childNodes[3].value;
  let phoneNumber = findByClass('.top2-wrap').childNodes[3].value;
  let sex = findByClass('.header2-sex').value;

  postRequest('/infocient/update', {
    realname: realname,
    address: address,
    phone: phoneNumber,
    sex: sex,
  })
})
