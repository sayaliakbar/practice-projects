function handleSubmit(event) {
  event.preventDefault();

  if (validateFields()) {
    console.log("Form submitted: all values are valid");
  }
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
      input.focus();
      showError(input, errorElement, labelElement, "This field is required");
      isValid = false;
      return;
    } else if (input.value < min || input.value > max) {
      input.focus();
      showError(input, errorElement, labelElement, message);
      isValid = false;
      return;
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

  let calculatedAge = caculateAge(day, month, year);

  if (isValid) {
    const outputDays = document.getElementById("outputDays");
    const outputMonths = document.getElementById("outputMonths");
    const outputYears = document.getElementById("outputYears");

    outputDays.innerHTML = calculatedAge.days;
    outputMonths.innerHTML = calculatedAge.months;
    outputYears.innerHTML = calculatedAge.years;
  }

  return isValid;
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

function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === parseInt(day) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getFullYear() === parseInt(year)
  );
}

function caculateAge(day, month, year) {
  const birthDate = new Date(year, month - 1, day); // Adjust month (0-indexed)
  const today = new Date(); // Get today's date

  // Initialize age calculations
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust for incomplete months and years
  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of the previous month
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
}
