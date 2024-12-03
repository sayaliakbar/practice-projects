// Handles the form submission event
function handleSubmit(event) {
  // Prevents the default form submission behavior to avoid page refresh
  event.preventDefault();
  // Calls the function to mark notifications as read
  markRead();
}

// Marks all notifications as read
function markRead() {
  // Selects the element displaying the number of unread notifications
  const notificationNumber = document.querySelector("#notificationNumber");

  // Selects all notification icon elements indicating unread notifications
  const notificationIcons = document.querySelectorAll(".notificationIcon");

  // Selects all profile elements containing individual notification cards
  const profiles = document.querySelectorAll(".profiles");

  // Updates the notification count to 0 if the element exists
  if (notificationNumber) {
    notificationNumber.textContent = 0;
  }

  // Loops through each notification icon and hides it
  notificationIcons.forEach((icon) => {
    // Adds a 'hidden' class to visually hide the notification icon
    icon.classList.add("hidden");
    // Removes the 'inline-block' class if present
    icon.classList.remove("inline-block");
  });

  // Loops through each profile card and removes the background highlight
  profiles.forEach((profile) => {
    // Removes the class responsible for the background highlight
    profile.classList.remove("bg-neutral-light-blue-1");
  });
}
