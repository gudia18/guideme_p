const inputs = document.querySelectorAll(".input");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");

document.getElementById("showSignUp").addEventListener("click", function() {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function() {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

document.getElementById("forgotPasswordLink").addEventListener("click", function() {
    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "block";
});

document.getElementById("backToLogin").addEventListener("click", function() {
    forgotPasswordForm.style.display = "none";
    loginForm.style.display = "block";
});

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
