// index.js
import User from './login.js';

const ln=document.getElementById('loginForm');

function handlesubmit(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = new User();
  const result = user.validate(username, password);

  alert(result);
}

ln.addEventListener('submit', handlesubmit );
