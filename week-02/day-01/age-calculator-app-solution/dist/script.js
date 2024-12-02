function handleSubmit(event) {
  event.preventDefault();

  if (validateFields()) {
    console.log("Form submitted: all values are valid");
  }
}

function showError(input, error, label, message) {
  input.classList.add("border-primary-lightRed");
  error.classList.remove("hidden");
  error.classList.add("block");
  error.innerHTML = message;
  label.classList.add("text-primary-lightRed");
}

function clearError(input, error, label) {
  input.classList.remove("border-primary-lightRed");
  error.classList.add("hidden");
  label.classList.remove("text-primary-lightRed");
}

function validateFields() {
  const fields = [
    {
      id: "day",
      label: "labelDay",
      error: "errorDay",
      min: 1,
      max: 31,
      message: "Must be a valid date",
    },
    {
      id: "month",
      label: "labelMonth",
      error: "errorMonth",
      min: 1,
      max: 12,
      message: "Must be a valid month",
    },
    {
      id: "year",
      label: "labelYear",
      error: "errorYear",
      min: 1,
      max: new Date().getFullYear(),
      message: "Must be in the past",
    },
  ];

  let isValid = true;
  let day, month, year;

  fields.forEach(({ id, label, error, min, max, message }) => {
    const input = document.getElementById(id);
    const errorElement = document.getElementById(error);
    const labelElement = document.getElementById(label);

    if (!input.value) {
      showError(input, errorElement, labelElement, "This field is required");
      isValid = false;
    } else if (input.value < min || input.value > max) {
      showError(input, errorElement, labelElement, message);
      isValid = false;
    } else {
      clearError(input, errorElement, labelElement);

      if (id === "day") day = input.value;
      if (id === "month") month = input.value;
      if (id === "year") year = input.value;
    }
  });

  if (day && month && year && !isValidDate(day, month, year)) {
    showError(
      document.getElementById("day"),
      document.getElementById("errorDay"),
      document.getElementById("labelDay"),
      "Invalid date"
    );
    isValid = false;
  }

  return isValid;
}

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === parseInt(day) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getFullYear() === parseInt(year)
  );
}
