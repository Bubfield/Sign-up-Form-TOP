const form = document.getElementById("form");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const errorText = document.querySelector(".error-text");
const error = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password.value !== confirm.value) {
    errorText.innerHTML = "The passwords don't match, buddy";
    error.forEach((i) => (i.style.outline = "1px solid rgb(221, 42, 42)"));
  }
});
