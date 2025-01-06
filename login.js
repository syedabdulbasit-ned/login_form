const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message');

const hardcodedEmail = 'abdul@gmail.com'; // Example email
const hardcodedPassword = '1234'; // Example password

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Clear any previous error messages
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
    return; // Stop execution if there are errors
  }

  // Check hardcoded credentials
  if (email === hardcodedEmail && password === hardcodedPassword) {
    // Successful login, redirect to home page
    window.location.href = "home.html"; // Adjust the URL as needed
  } else {
    // Invalid credentials, show error message
    error_message.innerText = "Invalid username or password";
    email_input.parentElement.classList.add('incorrect');
    password_input.parentElement.classList.add('incorrect');
  }
});
