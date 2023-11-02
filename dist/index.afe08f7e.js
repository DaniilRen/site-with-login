// import { addLoginForm } from "./utils/loginUtility.js";
class e{toHTML(){let e=document.querySelector(".login-hidden-box");e.innerHTML=`
    <div class="wrapper">

			<span class="icon-close">
				<span class="icon-close-cross">+</span>
			</span>

			<div class="form-box login">
				<h2>Login</h2>
				<form action='./utils/login.php' method="post" id="login-form">
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
				<form action='./utils/registration.php' method="post" id="reg-form">
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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}async function o(e){let o=await fetch("../utils/registration.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),t=await o.json();console.log(t)}async function t(e){let o=await fetch("../utils/login.php",{mode:"no-cors",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),t=await o;window.location.href=t.url}!function(){let i=new e,n=document.querySelector(".btnLogin-popup");n.addEventListener("click",()=>{i.toHTML();let e=document.querySelector(".wrapper");!function(e){let o=e.querySelector(".register-link");o.addEventListener("click",()=>{e.classList.add("active")})}(e),function(e){let o=e.querySelector(".login-link");o.addEventListener("click",()=>{e.classList.remove("active")})}(e),function(e,o){let t=e.querySelector(".icon-close");t.addEventListener("click",()=>{e.classList.remove("active-popup"),setTimeout(o.deleteFromDOM,1e3)})}(e,i),function(e,o){let i=document.getElementById("login-form"),n=document.querySelector(".login");i.addEventListener("submit",i=>{i.preventDefault();let s={mail:n.querySelector(".email").value,password:n.querySelector(".password").value,remember:n.querySelector(".remember-me").checked.toString()};t(s),close_model(e,o)})}(e,i),function(e,t){let i=document.getElementById("reg-form"),n=document.querySelector(".register");i.addEventListener("submit",i=>{i.preventDefault();let s={name:n.querySelector(".username").value,mail:n.querySelector(".email").value,password:n.querySelector(".password").value,agreement:n.querySelector(".agreement").checked.toString()};o(s),close_model(e,t)})}(e,i),setTimeout(()=>e.classList.add("active-popup"),10)})}();