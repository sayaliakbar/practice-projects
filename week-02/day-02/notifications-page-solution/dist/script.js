function handleSubmit(event) {
  event.preventDefault();
  markRead();
}

function markRead() {
  const notificationNumber = document.querySelector("#notificationNumber");
  const notificationIcons = document.querySelectorAll(".notificationIcon");
  const profiles = document.querySelectorAll(".profiles");

  if (notificationNumber) {
    notificationNumber.textContent = 0;
  }

  notificationIcons.forEach((icon) => {
    icon.classList.add("hidden");
    icon.classList.remove("inline-block");
  });

  profiles.forEach((profile) => {
    profile.classList.remove("bg-neutral-light-blue-1");
  });
}
