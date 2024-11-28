function handleSubmit() {
  if (validateForm()) {
    alert("Submitted");
  }
}

function validateForm() {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    if (!firstName.value) {
      console.log(firstName.classList);
      //   firstName.classList.remove("border-solid");
      //   firstName.classList.add("border-primary-red");
    }
  }
  return false;
}
