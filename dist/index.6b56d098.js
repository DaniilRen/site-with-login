var e=globalThis,o={},i={},n=e.parcelRequire06a4;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){i[e]=o},e.parcelRequire06a4=n),(0,n.register)("2QJli",function(e,o){Object.defineProperty(e.exports,"addLoginForm",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});class i{toHTML(){let e=document.querySelector(".login-hidden-box");e.innerHTML=`
    <div class="wrapper">

			<span class="icon-close">
				<span class="icon-close-cross">+</span>
			</span>

			<div class="form-box login">
				<h2>Login</h2>
				<form action="#">
					<div class="input-box">
						<span class="icon"><ion-icon name="mail"></ion-icon></span>
						<input class="email" type="email" required>
						<label>Email</label>
					</div>
					<div class="input-box">
						<span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
						<input class="password" type="password" autocomplete="on" required>
						<label>Password</label>
					</div>
					<div class="remember-forgot">
						<label><input class="remember-me" type="checkbox">Remember me</label>
						<a href="#">Forgot Password?</a>
					</div>
					<button type="submit" id="login-submit" class="btn">Login</button>
					<div class="login-register">
						<p>Don't have an account?<a href="#" class="register-link">Register</a></p>
					</div>
				</form>
			</div>

			<div class="form-box register">
				<h2>Registration</h2>
				<form action="#">
					<div class="input-box">
						<span class="icon">
							<ion-icon name="person"></ion-icon>
						</span>
						<input class="username" type="text" required>
						<label>Username</label>
					</div>
					<div class="input-box">
						<span class="icon">
							<ion-icon name="mail"></ion-icon>
						</span>
						<input class="email" type="email" required>
						<label>Email</label>
					</div>
					<div class="input-box">
						<span class="icon">
							<ion-icon name="lock-closed"></ion-icon>
						</span>
						<input class="password type="password" autocomplete="on" required>
						<label>Password</label>
					</div>
					<div class="remember-forgot">
						<label><input class="agreement" type="checkbox">I agree to the terms & conditions</label>
					</div>
					<button type="submit" id="register-submit" class="btn">Register</button>
					<div class="login-register">
						<p>Already have an account?<a href="#" class="login-link">Login</a></p>
					</div>
				</form>
			</div>

		</div> 
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}function n(){let e=new i,o=document.querySelector(".btnLogin-popup");o.addEventListener("click",()=>{e.toHTML();let o=document.querySelector(".wrapper");(function(e){let o=e.querySelector(".register-link");o.addEventListener("click",()=>{e.classList.add("active")})})(o),function(e){let o=e.querySelector(".login-link");o.addEventListener("click",()=>{e.classList.remove("active")})}(o),function(e,o){let i=e.querySelector(".icon-close");i.addEventListener("click",()=>{t(e,o)})}(o,e),function(e,o){let i=document.querySelector(".login"),n=document.querySelector("#login-submit");n.addEventListener("click",()=>{loginInfo=JSON.stringify({email:i.querySelector(".email").value,password:i.querySelector(".password").value,remember:i.querySelector(".remember-me").checked}),localStorage.setItem("loginInfo",loginInfo),console.log(loginInfo),t(e,o)})}(o,e),function(e,o){let i=document.querySelector(".register"),n=document.querySelector("#register-submit");n.addEventListener("click",()=>{registerInfo=JSON.stringify({email:i.querySelector(".email").value,password:i.querySelector(".password").value,username:i.querySelector(".username").value,agreement:i.querySelector(".agreement").checked}),localStorage.setItem("registerInfo",registerInfo),console.log(registerInfo),t(e,o)})}(o,e),setTimeout(()=>o.classList.add("active-popup"),10)})}function t(e,o){e.classList.remove("active-popup"),setTimeout(o.deleteFromDOM,1e3)}}),n("2QJli");