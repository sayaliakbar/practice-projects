function toggleTheme() {
  const htmlElement = document.documentElement;

  htmlElement.classList.toggle("light"); // Toggles the 'light' class
  htmlElement.classList.toggle("dark"); // Toggles the 'dark' class
  if (htmlElement.classList.value === "dark") {
    lightText.classList.remove("hidden");
    lightImage.classList.remove("hidden");
  } else {
    lightText.classList.add("hidden");
    lightImage.classList.add("hidden");
  }
}
