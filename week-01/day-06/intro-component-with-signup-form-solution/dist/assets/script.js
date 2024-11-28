function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  if (validateForm()) {
    alert("Submitted");
  }
}

function validateForm() {
  // Get form fields
  const fields = [
    { id: "firstName", errorId: "firstNameError" },
    { id: "lastName", errorId: "lastNameError" },
    { id: "email", errorId: "emailError", validate: validateEmail },
    { id: "password", errorId: "passwordError" },
  ];

  let isValid = true;

  fields.forEach(({ id, errorId, validate }) => {
    const field = document.getElementById(id);
    const error = document.getElementById(errorId);

    if (!field.value || (validate && !validate(field.value))) {
      field.classList.remove("border-solid");
      field.classList.add("border-primary-red");
      error.classList.remove("hidden");
      isValid = false;
    } else {
      field.classList.remove("border-primary-red");
      field.classList.add("border-solid");
      error.classList.add("hidden");
    }
  });

  return isValid;
}

function validateEmail(email) {
  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
