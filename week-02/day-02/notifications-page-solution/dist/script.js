function handleSubmit(event) {
  event.preventDefault();
  markRead();
}

function markRead() {
  let notificationNumber = document.getElementById("notificationNumber");
  notificationNumber.innerHTML = 0;
  let notificationIcons = document.getElementsByClassName("notificationIcon");
  for (let notificationIcon of notificationIcons) {
    notificationIcon.classList.add("hidden");
    notificationIcon.classList.remove("inline-block");
  }
  let profiles = document.getElementsByClassName("profiles");
  for (let profile of profiles) {
    profile.classList.remove("bg-neutral-light-blue-1");
  }
}
