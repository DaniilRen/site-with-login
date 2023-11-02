export function addRegisterLink(wrapper) {
  const registerLink = wrapper.querySelector(".register-link");	
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  })
};


export function addLoginLink(wrapper) {
  const loginLink = wrapper.querySelector(".login-link");	
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  })
};


export function addIconClose(wrapper, model) {
  const iconClose = wrapper.querySelector(".icon-close");	
  iconClose.addEventListener('click', () => {
    close_modal(wrapper, model);
  })
};


export function close_modal(wrapper, model) {
	wrapper.classList.remove('active-popup');
	setTimeout(model.deleteFromDOM, 1000)
};