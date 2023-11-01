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


function addIconClose(wrapper, model) {
  const iconClose = wrapper.querySelector(".icon-close");	
  iconClose.addEventListener('click', () => {
    close_model(wrapper, model);
  })
};


function close_model(wrapper, model) {
	wrapper.classList.remove('active-popup');
	setTimeout(model.deleteFromDOM, 1000)
};


function addLoginSubmit(wrapper, model) {
	const form = document.getElementById('login-form');
	const loginBox = document.querySelector('.login');

	form.addEventListener('submit', e => {
		e.preventDefault();
		const data = {
      mail: loginBox.querySelector('.email').value,
      password: loginBox.querySelector('.password').value,
      remember: loginBox.querySelector('.remember-me').checked.toString()
    };
		sendData(data);
		close_model(wrapper, model);
	})
};


function addRegisterSubmit(wrapper, model) {
	const form = document.getElementById('reg-form');
  const registerBox = document.querySelector('.register');

	form.addEventListener('submit', e => {
		e.preventDefault();
    const data = {
			name: registerBox.querySelector('.username').value,
      mail: registerBox.querySelector('.email').value,
      password: registerBox.querySelector('.password').value,
      agreement: registerBox.querySelector('.agreement').checked.toString()
    };
		sendData(data);
		close_model(wrapper, model);
	});
};


async function sendData(data) {
	const res = await fetch('./utils/registration.php', {
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify(data)
	});
	const answer = await res.json();
	console.log(answer);
}