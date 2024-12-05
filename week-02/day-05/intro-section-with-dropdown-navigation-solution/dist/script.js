const openSideMenu = document.getElementById("openMenu");
const closeSideMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const darkBackground = document.getElementById("darkBackground");
const features = document.getElementById("features");
const company = document.getElementById("company");
const featuresSubMenu = document.getElementById("featuresSubMenu");
const companySubMenu = document.getElementById("companySubMenu");

openSideMenu.addEventListener("click", open);
let opened = false;
features.addEventListener("click", () => {
  if (!opened) {
    featuresSubMenu.classList.add("flex");
    featuresSubMenu.classList.remove("hidden");
    opened = true;
  } else {
    featuresSubMenu.classList.add("hidden");
    opened = false;
  }
});

company.addEventListener("click", () => {
  if (!opened) {
    companySubMenu.classList.add("flex");
    companySubMenu.classList.remove("hidden");

    opened = true;
  } else {
    companySubMenu.classList.add("hidden");
    opened = false;
  }
});

function open() {
  sideMenu.classList.remove("hidden");
  sideMenu.classList.add("flex");
  darkBackground.classList.remove("hidden");
}

closeSideMenu.addEventListener("click", () => {
  sideMenu.classList.add("hidden");
  darkBackground.classList.add("hidden");
});
