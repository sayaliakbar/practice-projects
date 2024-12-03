// Select all elements with the class "rating"
let ratings = document.querySelectorAll(".rating");

// Attach a click event listener to each rating button
for (const rating of ratings) {
  rating.addEventListener("click", select);
}

// Variables to track whether a rating is selected and the currently selected rating
let selected = true; // Indicates if a rating has been chosen for the first time
let grip; // Stores the currently selected rating button

/**
 * Handles the "Submit" button click event
 * @param {Event} event - The event object
 */
function handleSubmit(event) {
  // Check if a rating has been selected
  if (!grip) {
    // Display an error message if no rating is selected
    let error = document.getElementById("error");
    error.classList.remove("hidden"); // Make the error message visible
    error.classList.add("flex"); // Use flexbox layout for the error message
  } else {
    // Hide the rating page and display the thank-you page
    let rateDisp = document.getElementById("ratingPage");
    let thankDisp = document.getElementById("thankYouPage");
    rateDisp.classList.add("hidden"); // Hide the rating page
    thankDisp.classList.add("flex"); // Show the thank-you page with flexbox layout
    thankDisp.classList.remove("hidden"); // Ensure thank-you page is visible

    // Update the thank-you page with the selected rating
    let ratingText = document.getElementById("ratingText");
    ratingText.innerHTML = `You selected ${grip.innerHTML} out of 5`;
  }
}

/**
 * Handles the selection of a rating button
 * @param {Event} event - The event object
 */
function select(event) {
  if (!selected) {
    // If a rating was previously selected, reset its styles
    grip.classList.remove("bg-white");
    grip.classList.remove("text-black");
  }

  // Update the currently selected rating
  grip = document.getElementById(event.target.id);
  // Apply styles to indicate the selected rating
  grip.classList.add("bg-white");
  grip.classList.add("text-black");

  // Mark that a rating has been selected
  selected = false;
}
