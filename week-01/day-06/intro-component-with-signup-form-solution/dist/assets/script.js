function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  if (validateForm()) {
    Swal.fire({
      icon: "success", // Alert type
      title: "Success!",
      text: "Your email has been saved!",
      confirmButtonText: "OK",
      timer: 3000, // Auto-dismiss after 3 seconds
      timerProgressBar: true,
    }).then(() => {
      // Submit the form programmatically after SweetAlert is closed
      document.querySelector("form").submit();
    });
  }
}

function validateForm() {
  // Get form fields
  const fields = [
    {
      id: "firstName",
      errorId: "firstNameError",
      errorIconId: "firstNameErrorIcon",
    },
    {
      id: "lastName",
      errorId: "lastNameError",
      errorIconId: "lastNameErrorIcon",
    },
    {
      id: "email",
      errorId: "emailError",
      validate: validateEmail,
      errorIconId: "emailErrorIcon",
    },
    {
      id: "password",
      errorId: "passwordError",
      errorIconId: "passwordErrorIcon",
    },
  ];

  let isValid = true;

  fields.forEach(({ id, errorId, validate, errorIconId }) => {
    const field = document.getElementById(id);
    const error = document.getElementById(errorId);
    const errorIcon = document.getElementById(errorIconId);

    if (!field.value || (validate && !validate(field.value))) {
      field.classList.remove("border-solid");
      field.classList.add("border-primary-red");
      error.classList.remove("hidden");
      errorIcon.classList.remove("hidden");
      isValid = false;
    } else {
      field.classList.remove("border-primary-red");
      field.classList.add("border-solid");
      error.classList.add("hidden");
      errorIcon.classList.add("hidden");
    }
  });

  return isValid;
}

function validateEmail(email) {
  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
