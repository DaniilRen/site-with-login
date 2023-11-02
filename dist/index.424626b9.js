class e{toHTML(){let e=document.querySelector(".login-hidden-box");e.innerHTML=`
    <div class="wrapper">

			<span class="icon-close">
				<span class="icon-close-cross">+</span>
			</span>

			<div class="form-box login">
				<h2>Login</h2>
				<form id="login-form">
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
				<form id="reg-form">
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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}function t(e,t){e.classList.remove("active-popup"),setTimeout(t.deleteFromDOM,1e3)}async function i(e){let t=await fetch("../database/registration.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),i=await t.json();console.log(i)}async function n(e){let t=await fetch("../database/login.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),i=await t;window.location.href=i.url}!function(){let o=new e,a=document.querySelector(".btnLogin-popup");a.addEventListener("click",()=>{o.toHTML();let e=document.querySelector(".wrapper");!function(e){let t=e.querySelector(".register-link");t.addEventListener("click",()=>{e.classList.add("active")})}(e),function(e){let t=e.querySelector(".login-link");t.addEventListener("click",()=>{e.classList.remove("active")})}(e),function(e,i){let n=e.querySelector(".icon-close");n.addEventListener("click",()=>{t(e,i)})}(e,o),function(e,i){let o=document.getElementById("login-form"),a=document.querySelector(".login");o.addEventListener("submit",o=>{o.preventDefault();let s={mail:a.querySelector(".email").value,password:a.querySelector(".password").value,remember:a.querySelector(".remember-me").checked.toString()};n(s),t(e,i)})}(e,o),function(e,n){let o=document.getElementById("reg-form"),a=document.querySelector(".register");o.addEventListener("submit",o=>{o.preventDefault();let s={name:a.querySelector(".username").value,mail:a.querySelector(".email").value,password:a.querySelector(".password").value,agreement:a.querySelector(".agreement").checked.toString()};i(s),t(e,n)})}(e,o),setTimeout(()=>e.classList.add("active-popup"),10)})}();