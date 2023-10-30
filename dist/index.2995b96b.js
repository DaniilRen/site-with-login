class e{toHTML(){let e=document.querySelector(".login-hidden-box");e.innerHTML=`
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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}function o(e,o){e.classList.remove("active-popup"),setTimeout(o.deleteFromDOM,1e3)}!function(){let i=new e,n=document.querySelector(".btnLogin-popup");n.addEventListener("click",()=>{i.toHTML();let e=document.querySelector(".wrapper");(function(e){let o=e.querySelector(".register-link");o.addEventListener("click",()=>{e.classList.add("active")})})(e),function(e){let o=e.querySelector(".login-link");o.addEventListener("click",()=>{e.classList.remove("active")})}(e),function(e,i){let n=e.querySelector(".icon-close");n.addEventListener("click",()=>{o(e,i)})}(e,i),function(e,i){let n=document.querySelector(".login"),s=document.querySelector("#login-submit");s.addEventListener("click",()=>{loginInfo=JSON.stringify({email:n.querySelector(".email").value,password:n.querySelector(".password").value,remember:n.querySelector(".remember-me").checked}),localStorage.setItem("loginInfo",loginInfo),console.log(loginInfo),o(e,i)})}(e,i),function(e,i){let n=document.querySelector(".register"),s=document.querySelector("#register-submit");s.addEventListener("click",()=>{registerInfo=JSON.stringify({email:n.querySelector(".email").value,password:n.querySelector(".password").value,username:n.querySelector(".username").value,agreement:n.querySelector(".agreement").checked}),localStorage.setItem("registerInfo",registerInfo),console.log(registerInfo),o(e,i)})}(e,i),setTimeout(()=>e.classList.add("active-popup"),10)})}();