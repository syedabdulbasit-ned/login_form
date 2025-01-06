const form = document.getElementById('form')
const fullname_input = document.getElementById('fullname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form submission initially
  
  let errors = []

  if(fullname_input){
    // If we have a fullname input then we are in the signup
    errors = getSignupFormErrors(fullname_input.value, email_input.value, password_input.value, repeat_password_input.value)
  }
  else{
    // If we don't have a fullname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value)
  }

  if(errors.length > 0){
    // If there are any errors
    error_message.innerText  = errors.join(". ")
  } else {
    if(fullname_input) {
      // If it's a signup, redirect to the login page after validation
      setTimeout(() => {
        window.location.href = 'login.html'; // Adjust the URL as needed
      }, 500); // Delay to allow any UI updates (like error message removal) before redirection
    }
  }
})

function getSignupFormErrors(fullname, email, password, repeatPassword){
  let errors = []

  if(fullname === '' || fullname == null){
    errors.push('Fullname is required')
    fullname_input.parentElement.classList.add('incorrect')
  }
  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 4){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}

const allInputs = [fullname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})
