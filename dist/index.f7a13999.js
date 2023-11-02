class e{toHTML(){let e=document.querySelector(".login-hidden-box");e.innerHTML=`
    <div class="wrapper">

			<span class="icon-close">
				<span class="icon-close-cross">+</span>
			</span>

			<div class="form-box login">
				<h2>Login</h2>
				<form action='#' id="login-form">
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
				<form action='#' id="reg-form">
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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}function i(e,i){e.classList.remove("active-popup"),setTimeout(i.deleteFromDOM,1e3)}async function o(e){let i=await fetch("./database/form.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),o=await i.json();console.log(o)}!function(){let t=new e,n=document.querySelector(".btnLogin-popup");n.addEventListener("click",()=>{t.toHTML();let e=document.querySelector(".wrapper");(function(e){let i=e.querySelector(".register-link");i.addEventListener("click",()=>{e.classList.add("active")})})(e),function(e){let i=e.querySelector(".login-link");i.addEventListener("click",()=>{e.classList.remove("active")})}(e),function(e,o){let t=e.querySelector(".icon-close");t.addEventListener("click",()=>{i(e,o)})}(e,t),function(e,t){let n=document.getElementById("login-form"),s=document.querySelector(".login");n.addEventListener("submit",n=>{n.preventDefault();let a={mail:s.querySelector(".email").value,password:s.querySelector(".password").value,remember:s.querySelector(".remember-me").checked.toString()};o(a),i(e,t)})}(e,t),function(e,t){let n=document.getElementById("reg-form"),s=document.querySelector(".register");n.addEventListener("submit",n=>{n.preventDefault();let a={name:s.querySelector(".username").value,mail:s.querySelector(".email").value,password:s.querySelector(".password").value,agreement:s.querySelector(".agreement").checked.toString()};o(a),i(e,t)})}(e,t),setTimeout(()=>e.classList.add("active-popup"),10)})}();