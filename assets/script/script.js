const errorMessage = document.getElementById("errorMessage");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isValidEmail(email.value)) {
    errorMessage.style.display = "flex";
    email.classList.add("red");
  } else {
    // TODO
  }
})

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
