const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active");
});
loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", ()=>{
    wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup");
});
loginBox = document.querySelector(".login");
registerBox = document.querySelector(".register");
const loginSubmitBtn = document.getElementById("login-submit");
const registerSubmitBtn = document.getElementById("register-submit");
loginSubmitBtn.addEventListener("click", ()=>{
    loginInfo = {
        email: loginBox.querySelector(".email").value,
        password: loginBox.querySelector(".password").value,
        remember: loginBox.querySelector(".remember-me").checked
    };
    console.log(loginInfo);
});
registerSubmitBtn.addEventListener("click", ()=>{
    registerInfo = {
        email: registerBox.querySelector(".email").value,
        password: registerBox.querySelector(".password").value,
        username: registerBox.querySelector(".username").value,
        agreement: registerBox.querySelector(".agreement").checked
    };
    console.log(registerInfo);
});

//# sourceMappingURL=index.44983732.js.map
