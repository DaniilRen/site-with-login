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
	`}deleteFromDOM(){let e=document.querySelector(".login-hidden-box");e.innerHTML=""}}!function(){model=new e;let o=document.querySelector(".btnLogin-popup");o.addEventListener("click",()=>{model.toHTML(),function(e){let o=document.querySelector(".register-link");o.addEventListener("click",()=>{e.classList.add("active")});let i=document.querySelector(".login-link");i.addEventListener("click",()=>{e.classList.remove("active")});let s=document.querySelector(".icon-close");s.addEventListener("click",()=>{e.classList.remove("active-popup"),setTimeout(model.deleteFromDOM,1e3)});let l=document.querySelector(".login"),n=document.querySelector("#login-submit");n.addEventListener("click",()=>{console.log(loginInfo={email:l.querySelector(".email").value,password:l.querySelector(".password").value,remember:l.querySelector(".remember-me").checked})});let t=document.querySelector(".register"),a=document.querySelector("#register-submit");a.addEventListener("click",()=>{console.log(registerInfo={email:t.querySelector(".email").value,password:t.querySelector(".password").value,username:t.querySelector(".username").value,agreement:t.querySelector(".agreement").checked})})}(wrapper=document.querySelector(".wrapper")),setTimeout(()=>wrapper.classList.add("active-popup"),10)})}();