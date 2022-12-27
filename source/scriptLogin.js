async function postRequest(url, info) {
   return await fetch(`${url}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(info),
   });
}

postRequest('https://jsonplaceholder.typicode.com/users', userInfo);

const btnPress = document.querySelector('.btn-button');

btnPress.addEventListener('click',)