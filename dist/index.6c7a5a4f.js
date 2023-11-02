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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}function t(e,t){e.classList.remove("active-popup"),setTimeout(t.deleteFromDOM,1e3)}async function i(e){let t=await fetch("./utils/registration.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),i=await t.json();console.log(i)}async function o(e){let t=await fetch("./utils/login.php",{mode:"no-cors",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),i=await t;window.location.href=i.url}!function(){let n=new e,s=document.querySelector(".btnLogin-popup");s.addEventListener("click",()=>{n.toHTML();let e=document.querySelector(".wrapper");(function(e){let t=e.querySelector(".register-link");t.addEventListener("click",()=>{e.classList.add("active")})})(e),function(e){let t=e.querySelector(".login-link");t.addEventListener("click",()=>{e.classList.remove("active")})}(e),function(e,i){let o=e.querySelector(".icon-close");o.addEventListener("click",()=>{t(e,i)})}(e,n),function(e,i){let n=document.getElementById("login-form"),s=document.querySelector(".login");n.addEventListener("submit",n=>{n.preventDefault();let a={mail:s.querySelector(".email").value,password:s.querySelector(".password").value,remember:s.querySelector(".remember-me").checked.toString()};o(a),t(e,i)})}(e,n),function(e,o){let n=document.getElementById("reg-form"),s=document.querySelector(".register");n.addEventListener("submit",n=>{n.preventDefault();let a={name:s.querySelector(".username").value,mail:s.querySelector(".email").value,password:s.querySelector(".password").value,agreement:s.querySelector(".agreement").checked.toString()};i(a),t(e,o)})}(e,n),setTimeout(()=>e.classList.add("active-popup"),10)})}();