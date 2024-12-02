// Handles form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevents default form submission

  if (validateFields()) {
    console.log("Form submitted successfully!");
  }
}

// Validates input fields for required, range, and logical checks
function validateFields() {
  const fields = [
    {
      id: "day",
      label: "labelDay",
      error: "errorDay",
      min: 1,
      max: 31,
      message: "Must be a valid day",
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

  // Loop through each field to validate
  fields.forEach(({ id, label, error, min, max, message }) => {
    const input = document.getElementById(id);
    const errorElement = document.getElementById(error);
    const labelElement = document.getElementById(label);

    // Check if input is empty
    if (!input.value) {
      showError(input, errorElement, labelElement, "This field is required");
      isValid = false;
      return;
    }

    // Check if input is out of range
    if (input.value < min || input.value > max) {
      showError(input, errorElement, labelElement, message);
      isValid = false;
      return;
    }

    // Clear error if input is valid
    clearError(input, errorElement, labelElement);

    // Store valid input values for further checks
    if (id === "day") day = input.value;
    if (id === "month") month = input.value;
    if (id === "year") year = input.value;
  });

  // Validate date logically
  if (day && month && year && !isValidDate(day, month, year)) {
    showError(
      document.getElementById("day"),
      document.getElementById("errorDay"),
      document.getElementById("labelDay"),
      "Invalid date"
    );
    isValid = false;
  }

  // Calculate and display age if all fields are valid
  if (isValid) {
    displayAge(calculateAge(day, month, year));
  }

  return isValid;
}

// Displays the calculated age
function displayAge({ years, months, days }) {
  const yearsOutput = document.getElementById("outputYears");
  const monthsOutput = document.getElementById("outputMonths");
  const daysOutput = document.getElementById("outputDays");

  // Function to generate random numbers
  function generateRandomNumbers() {
    yearsOutput.innerHTML = Math.floor(Math.random() * 100); // Random years
    monthsOutput.innerHTML = Math.floor(Math.random() * 12) + 1; // Random months
    daysOutput.innerHTML = Math.floor(Math.random() * 31) + 1; // Random days
  }

  // Start mixing numbers for 2 seconds
  const interval = setInterval(generateRandomNumbers, 100);

  // Stop animation after 2 seconds and show actual output
  setTimeout(() => {
    clearInterval(interval); // Stop random number generation
    yearsOutput.innerHTML = years;
    monthsOutput.innerHTML = months;
    daysOutput.innerHTML = days;
  }, 1000);
}

// Shows an error message for an invalid field
function showError(input, error, label, message) {
  input.classList.add("border-primary-lightRed");
  error.classList.remove("hidden");
  error.classList.add("block");
  error.innerHTML = message; // Sets the error message
  label.classList.add("text-primary-lightRed");
}

// Clears the error message for a valid field
function clearError(input, error, label) {
  input.classList.remove("border-primary-lightRed");
  error.classList.add("hidden");
  label.classList.remove("text-primary-lightRed");
}

// Checks if the date is valid
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day); // Month is zero-based
  return (
    date.getDate() === parseInt(day) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getFullYear() === parseInt(year)
  );
}

// Calculates age based on the provided date
function calculateAge(day, month, year) {
  const birthDate = new Date(year, month - 1, day); // Adjust for zero-based month
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust for incomplete months
  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of the previous month
    ageDays += prevMonth.getDate();
  }

  // Adjust for incomplete years
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}
