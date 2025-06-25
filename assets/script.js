// let fn = console.log; //for fast debugging

// ----------------------------------for user view-------------------------------------
// hide show password toggle
let eyeIcon = document.getElementById("eyeIcon");
// eyeIcon adaptation height
let eyeICustomerSideHeight = eyeIcon.clientHeight;
eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    eyeIcon.src = "./assets/images/eye-off-svgrepo-com - Copie.png";
    password.type = "text";
  } else {
    eyeIcon.src = "./assets/images/eye-svgrepo-com - Copie.png";
    password.type = "password";
  }
});


//--------------------------------for validation---------------------------------------
//recuperation des objets:inputs et champs d'erreurs du DOM
let loginForm = document.getElementById("loginForm");
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let inputForm = document.getElementsByTagName("input");

//fonctions de validation pour chaque champs
function validatedEmail() {
  const regex = /^[a-zA-Z-%_]+@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/i;
  let emailTrim = email.value.trim();

  if (email.value.trim() === "") {
    emailError.textContent = "Field Email required";
    return false;
  } else if (!regex.test(emailTrim)) {
    emailError.textContent = "Email format is incorrect";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatedPassword() {
  if (password.value.trim() === "") {
    passwordError.textContent = "Field password required";
    eyeIcon.style.top = "45%"; // eyeIcon adaptation height
    return false;
  } else if (password.value.trim().length < 8) {
    passwordError.textContent = "Field password must be at least 8 characters";
    return false;
  } else if (password.value.trim().length > 35) {
    passwordError.textContent = "Field password Can't exceed 35 characters";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}


//modification position eye show hide
password.addEventListener("input", () => {
  eyeIcon.style.top = "45%"; // eyeIcon adaptation height
});

//validation dynamique des inputs et modification dynamique des bordure
email.addEventListener("input", () => {
  validatedEmail();
  validatedEmail()
  ? (email.style.borderColor = "#00ff00")
  : (email.style.borderColor = "#ff0000");
});

password.addEventListener("input", () => {
  validatedPassword();
  validatedPassword()
    ? (password.style.borderColor = "#00ff00")
    : (password.style.borderColor = "#ff0000");
});

// verifier et autoriser la soumission en cas de validation
loginForm.addEventListener("submit", (event) => {
  const isValidEmail = validatedEmail();
  const isValidPassword = validatedPassword();
  if (!isValidEmail || !isValidPassword) {
    event.preventDefault();
    if(!isValidEmail){
      email.style.borderColor ="#ff0000";
    }
    if(!isValidPassword){
      password.style.borderColor = "#ff0000";
    }
  }
});

//effacer les messages d'erreurs en cas de reset
loginForm.addEventListener("reset", (event) => {
  passwordError.textContent = "";
  emailError.textContent = "";
  email.style.borderColor = "rgba(230, 135, 18, 0.5)";
  password.style.borderColor = "rgba(230, 135, 18, 0.5)";
  eyeIcon.style.top = "60%"; // eyeIcon adaptation height
});
