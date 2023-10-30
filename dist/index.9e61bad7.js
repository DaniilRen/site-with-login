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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}!function(){let o=new e,i=document.querySelector(".btnLogin-popup");i.addEventListener("click",()=>{o.toHTML();let e=document.querySelector(".wrapper");(function(e){let o=document.querySelector(".register-link");o.addEventListener("click",()=>{e.classList.add("active")})})(e),function(e){let o=document.querySelector(".login-link");o.addEventListener("click",()=>{e.classList.remove("active")})}(e),function(e){let o=document.querySelector(".icon-close");o.addEventListener("click",()=>{e.classList.remove("active-popup"),setTimeout(model.deleteFromDOM,1e3)})}(e),function(){let e=document.querySelector(".login"),o=document.querySelector("#login-submit");o.addEventListener("click",()=>{loginInfo=JSON.stringify({email:e.querySelector(".email").value,password:e.querySelector(".password").value,remember:e.querySelector(".remember-me").checked}),localStorage.setItem("loginInfo",loginInfo),console.log(loginInfo)})}(),function(){let e=document.querySelector(".register"),o=document.querySelector("#register-submit");o.addEventListener("click",()=>{registerInfo=JSON.stringify({email:e.querySelector(".email").value,password:e.querySelector(".password").value,username:e.querySelector(".username").value,agreement:e.querySelector(".agreement").checked}),localStorage.setItem("registerInfo",registerInfo),console.log(registerInfo)})}(),setTimeout(()=>e.classList.add("active-popup"),10)})}();