import { close_modal } from "./inter_listeners.js";


export function addLoginSubmit(wrapper, model) {
	const form = document.getElementById('login-form');
	const loginBox = document.querySelector('.login');

	form.addEventListener('submit', e => {
		e.preventDefault();
		const data = {
      mail: loginBox.querySelector('.email').value,
      password: loginBox.querySelector('.password').value,
      remember: loginBox.querySelector('.remember-me').checked.toString()
    };
		login(data);
		close_modal(wrapper, model);
	})
};


export function addRegisterSubmit(wrapper, model) {
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
		register(data);
		close_modal(wrapper, model);
	});
};

async function register(data) {
	const res = await fetch('../database/registration.php', {
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify(data)
	});
	const answer = await res.json();
	console.log(answer);
}

async function login(data) {
	const response = await fetch('../database/login.php', {
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify(data)
	});
	const redirect = await response;
	window.location.href=redirect['url'];
}