import { loginModel } from "./loginModel";


export function addLoginForm() {
  model = new loginModel();

  const btnPopup = document.querySelector(".btnLogin-popup");	
  btnPopup.addEventListener('click', () => {
    model.toHTML()
    wrapper = document.querySelector(".wrapper");
    addListeners(wrapper);
    setTimeout(() => wrapper.classList.add('active-popup'), 10);
  })
}


function addListeners(wrapper) {
  addRegisterLink(wrapper);
  addLoginLink(wrapper);
  addIconClose(wrapper);
  addLoginSubmit();
  addRegisterSubmit();
} 

function addRegisterLink(wrapper) {
  const registerLink = document.querySelector(".register-link");	
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  })
}


function addLoginLink(wrapper) {
  const loginLink = document.querySelector(".login-link");	
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  })
}


function addIconClose(wrapper) {
  const iconClose = document.querySelector(".icon-close");	
  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(model.deleteFromDOM, 1000)
  })
}


function addLoginSubmit() {
  const loginBox = document.querySelector('.login');
  const loginSubmitBtn = document.querySelector('#login-submit');	

  loginSubmitBtn.addEventListener('click', () => {
    loginInfo = JSON.stringify({
      email: loginBox.querySelector('.email').value,
      password: loginBox.querySelector('.password').value,
      remember: loginBox.querySelector('.remember-me').checked
    })
    localStorage.setItem('loginInfo', loginInfo);
    console.log(loginInfo)
  });
}


function addRegisterSubmit() {
  const registerBox = document.querySelector('.register');
  const registerSubmitBtn = document.querySelector("#register-submit");	

  registerSubmitBtn.addEventListener('click', () => {
    registerInfo = JSON.stringify({
      email: registerBox.querySelector('.email').value,
      password: registerBox.querySelector('.password').value,
      username: registerBox.querySelector('.username').value,
      agreement: registerBox.querySelector('.agreement').checked
    })
    localStorage.setItem('registerInfo', registerInfo);
    console.log(registerInfo) 
  });
}