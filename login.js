const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message');

const hardcodedEmail = 'abdul@gmail.com'; 
const hardcodedPassword = '1234'; 

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  error_message.innerText = '';

  const email = email_input.value;
  const password = password_input.value;

  let errors = [];

  if (email === '' || email == null) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }

  if (password === '' || password == null) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }

  if (errors.length > 0) {
    error_message.innerText = errors.join(". ");
    return; 
  }

  if (email === hardcodedEmail && password === hardcodedPassword) {
    window.location.href = "home.html"; 
  } else {
    error_message.innerText = "Invalid username or password";
    email_input.parentElement.classList.add('incorrect');
    password_input.parentElement.classList.add('incorrect');
  }
});
