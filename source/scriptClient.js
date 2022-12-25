function findByClass (className) {
  return document.querySelector(className)
}

let buttonForm = findByClass('.button-send');
let buttonClear = findByClass('.button-clear');

async function postRequest (url, info) {
  return await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(info),
  });
}

buttonForm.addEventListener('click' , () => {
  let name = findByClass('.head-header1').childNodes[3].value;
  let address = findByClass('.top1-wrap').childNodes[3].value;
  let phoneNumber = findByClass('.top2-wrap').childNodes[3].value;
  let sex = findByClass('.header2-sex').value;

  let userInfo = {
    name: name,
    address: address,
    number: phoneNumber,
    sex: sex,
  };

  postRequest('https://jsonplaceholder.typicode.com/users', userInfo);
  if (name == '') return;
  else {
    findByClass('.info-head').innerHTML = userInfo.name + ',';
    findByClass('.header-menu').innerHTML = `${userInfo.name}, ` + '欢迎使用本系统';
    findByClass('.icon-text').innerHTML = userInfo.name;
    findByClass('.info-headbottom').innerHTML = `ID: ${Math.floor(Math.random() * 1000000)}`
  };
  clearFields();

});

function clearFields () {
  findByClass('.head-header1').children[1].value = '';
  findByClass('.top1-wrap').children[1].value = '';
  findByClass('.top2-wrap').children[1].value = '';
  findByClass('.header2-sex').children[0].selected = true;
}

buttonClear.addEventListener('click', () => {
  clearFields();
})








