// Select all elements with the class "rating"
const ratings = document.querySelectorAll(".rating");

// Attach a click event listener to each rating button
ratings.forEach((rating) => {
  rating.addEventListener("click", select);
});

// Variables to track the selected rating and whether it’s the first selection
let isFirstSelection = true;
let selectedRating;

/**
 * Handles the "Submit" button click event.
 * @param {Event} event - The event object.
 */
function handleSubmit(event) {
  const error = document.getElementById("error");

  if (!selectedRating) {
    // Display error if no rating is selected
    error.classList.remove("hidden");
    error.classList.add("flex");
  } else {
    // Hide the error message if previously visible
    error.classList.add("hidden");

    // Show thank-you page and hide rating page
    document.getElementById("ratingPage").classList.add("hidden");
    const thankYouPage = document.getElementById("thankYouPage");
    thankYouPage.classList.add("flex");
    thankYouPage.classList.remove("hidden");

    // Update thank-you page with selected rating
    document.getElementById(
      "ratingText"
    ).textContent = `You selected ${selectedRating.textContent} out of 5`;

    // Move focus to the thank-you message for better accessibility
    thankYouPage.focus();
  }
}

/**
 * Handles the selection of a rating button.
 * @param {Event} event - The event object.
 */
function select(event) {
  if (!isFirstSelection) {
    // Reset styles for previously selected rating
    selectedRating.classList.remove("bg-white", "text-black");
  }

  // Update selected rating and apply styles
  selectedRating = event.currentTarget;
  selectedRating.classList.add("bg-white", "text-black");

  // Mark as no longer the first selection
  isFirstSelection = false;
}
