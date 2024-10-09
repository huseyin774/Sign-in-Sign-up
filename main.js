$ = document

const signInBtn = $.getElementById("signIn");
const signUpBtn = $.getElementById("signUp");
const fistForm = $.getElementById("form1");
const secondForm = $.getElementById("form2");
const container = $.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
