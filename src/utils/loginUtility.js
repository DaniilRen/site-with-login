export function addInputListeners() {
  const loginBox = document.querySelector('.login');
  const loginSubmitBtn = document.getElementById("login-submit");	

  loginSubmitBtn.addEventListener('click', () => {
    loginInfo = {
      email: loginBox.querySelector('.email').value,
      password: loginBox.querySelector('.password').value,
      remember: loginBox.querySelector('.remember-me').checked
    }
    console.log(loginInfo)
  });

  const registerBox = document.querySelector('.register');
  const registerSubmitBtn = document.getElementById("register-submit");	

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


export function addWrapperListeners() {
  const wrapper = document.querySelector(".wrapper");	

  const registerLink = document.querySelector(".register-link");	
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  })

  const loginLink = document.querySelector(".login-link");	
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  })

  const btnPopup = document.querySelector(".btnLogin-popup");	
  btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  })

  const iconClose = document.querySelector(".icon-close");	
  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
  })
}