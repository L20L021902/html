async function postRequest(url, info) {

   return await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json; charset=utf-8'
      },
      mode: 'no-cors',
      body: JSON.stringify(info),
   }).then(() => {
      window.location.href = "/infocient/indexclient.html";
   })
      .catch(() => {
         alert('Такой пользователь уже существует');
      });

}

const btnPress = document.querySelector('.btn-button');

btnPress.addEventListener('click', (e) => {
   e.preventDefault();
   const inputLogin = document.querySelector('.press-login').value;
   const inputPassword = document.querySelector('.press-password').value;
   postRequest('/registration/register', {
      username: inputLogin,
      password: inputPassword
   })
})
