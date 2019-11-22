function togglePassword() {
  var inputCheckbox = document.querySelector('.js-password-toggle-checkbox');
  var inputPassword = document.querySelector('.js-password-input');
  console.log('In functie');
  if (inputCheckbox.checked) {
    inputPassword.type = 'text';
    console.log('Text');
  } else if (!inputCheckbox.checked) {
    inputPassword.type = 'password';
    console.log('Password');
  }
}

function init() {
  var inputCheckbox = document.querySelector('.js-password-toggle-checkbox');
  inputCheckbox.addEventListener('click', togglePassword);
  console.log('Init');
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  init();
});
