import { loginModel } from "./loginModel";


export function addWrapperListeners() {
  model = new loginModel();

  const btnPopup = document.querySelector(".btnLogin-popup");	
  btnPopup.addEventListener('click', () => {
    model.toHTML()
    wrapper = document.querySelector(".wrapper");
    addInputListeners(wrapper);
    setTimeout(() => wrapper.classList.add('active-popup'), 10);
  })
}


function addInputListeners(wrapper) {
  const registerLink = document.querySelector(".register-link");	
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  })

  const loginLink = document.querySelector(".login-link");	
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  })

  const iconClose = document.querySelector(".icon-close");	
  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    setTimeout(model.deleteFromDOM, 1000)
  })

  const loginBox = document.querySelector('.login');
  const loginSubmitBtn = document.querySelector('#login-submit');	

  loginSubmitBtn.addEventListener('click', () => {
    loginInfo = {
      email: loginBox.querySelector('.email').value,
      password: loginBox.querySelector('.password').value,
      remember: loginBox.querySelector('.remember-me').checked
    }
    console.log(loginInfo)
  });

  const registerBox = document.querySelector('.register');
  const registerSubmitBtn = document.querySelector("#register-submit");	

  registerSubmitBtn.addEventListener('click', () => {
    registerInfo = {
      email: registerBox.querySelector('.email').value,
      password: registerBox.querySelector('.password').value,
      username: registerBox.querySelector('.username').value,
      agreement: registerBox.querySelector('.agreement').checked
    }
    console.log(registerInfo) 
  });
} 