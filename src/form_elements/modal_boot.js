import { modal } from "./modal.js";
import { addLoginLink, addRegisterLink, addIconClose } from "./inter_listeners.js";
import { addLoginSubmit, addRegisterSubmit } from "./submit_listeners.js";


function addListeners(wrapper, model) {
  addRegisterLink(wrapper);
  addLoginLink(wrapper);
  addIconClose(wrapper, model);
  addLoginSubmit(wrapper, model);
  addRegisterSubmit(wrapper, model);
};


export function addForm() {
  const modal_ = new modal();
  const btnPopup = document.querySelector(".btnLogin-popup");	
  btnPopup.addEventListener('click', () => {
    modal_.toHTML()
    const wrapper = document.querySelector(".wrapper");
    addListeners(wrapper, modal_);
    setTimeout(() => wrapper.classList.add('active-popup'), 10);
  })
};