import { loginModel } from "./loginModel.js";


export function addLoginForm() {
  const model = new loginModel();

  const btnPopup = document.querySelector(".btnLogin-popup");	
  btnPopup.addEventListener('click', () => {
    model.toHTML()
    const wrapper = document.querySelector(".wrapper");
    addListeners(wrapper, model);
    setTimeout(() => wrapper.classList.add('active-popup'), 10);
  })
};


function addListeners(wrapper, model) {
  addRegisterLink(wrapper);
  addLoginLink(wrapper);
  addIconClose(wrapper, model);
  addLoginSubmit(wrapper, model);
  addRegisterSubmit(wrapper, model);
} ;

function addRegisterLink(wrapper) {
  const registerLink = wrapper.querySelector(".register-link");	
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  })
};


function addLoginLink(wrapper) {
  const loginLink = wrapper.querySelector(".login-link");	
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  })
};


function close_model(wrapper, model) {
	wrapper.classList.remove('active-popup');
	setTimeout(model.deleteFromDOM, 1000)
}


function addIconClose(wrapper, model) {
  const iconClose = wrapper.querySelector(".icon-close");	
  iconClose.addEventListener('click', () => {
    close_model(wrapper, model);
  })
};


function addLoginSubmit(wrapper, model) {
	const form = document.getElementById('login-form');
	const loginBox = document.querySelector('.login');

	form.addEventListener('submit', e => {
		e.preventDefault();
		const loginInfo = JSON.stringify({
      email: loginBox.querySelector('.email').value,
      password: loginBox.querySelector('.password').value,
      remember: loginBox.querySelector('.remember-me').checked
    });
		console.log(loginInfo);
    localStorage.setItem('loginInfo', loginInfo);
		close_model(wrapper, model);
	})
};


function addRegisterSubmit(wrapper, model) {
	const form = document.getElementById('reg-form');
  const registerBox = document.querySelector('.register');

	form.addEventListener('submit', e => {
		e.preventDefault();
    const registerInfo = JSON.stringify({
      email: registerBox.querySelector('.email').value,
      password: registerBox.querySelector('.password').value,
      username: registerBox.querySelector('.username').value,
      agreement: registerBox.querySelector('.agreement').checked
    });
		console.log(registerInfo);
    localStorage.setItem('registerInfo', registerInfo);
		close_model(wrapper, model);
	});
};