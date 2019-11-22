let email = {},
  password = {},
  signInButton;

function getDOMElements() {
  email = document.querySelector('.username');
  password = document.querySelector('.js-password-input');
  signInButton = document.querySelector('.c-button');
}

function testEmail(){
    
}

function enableListeners(){
    email.addEventListener('blur', testEmail )
}
function init() {}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  init();
});
