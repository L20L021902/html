async function postRequest(url, info = {
   username: "admin",
   password: "password"
}) {

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
         alert('Неверное имя пользователя или пароль');
      });

}

const btnPress = document.querySelector('#btn-button-login');

btnPress.addEventListener('click', () => {
   const inputLogin = document.querySelector('.press-login').value;
   const inputPassword = document.querySelector('.press-password').value;
   postRequest('/login', {
      username: inputLogin,
      password: inputPassword
   })
})

const btnRegistration = document.querySelector('#btn-button-registration');

btnRegistration.addEventListener('click', () => {
  window.location.href = "/registration"
})
