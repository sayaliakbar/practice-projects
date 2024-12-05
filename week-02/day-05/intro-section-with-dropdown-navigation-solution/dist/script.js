const openSideMenu = document.getElementById("openMenu");
const closeSideMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const darkBackground = document.getElementById("darkBackground");
const features = document.getElementById("features");
const company = document.getElementById("company");
const featuresSubMenu = document.getElementById("featuresSubMenu");
const companySubMenu = document.getElementById("companySubMenu");
const featureDownArrow = document.getElementById("featureDownArrow");
const featureUpArrow = document.getElementById("featureUpArrow");
const companyDownArrow = document.getElementById("companyDownArrow");
const companyUpArrow = document.getElementById("companyUpArrow");

openSideMenu.addEventListener("click", open);
let opened = false;
features.addEventListener("click", () => {
  if (!opened) {
    featuresSubMenu.classList.add("flex");
    featuresSubMenu.classList.remove("hidden");
    featureDownArrow.classList.add("hidden");
    featureUpArrow.classList.remove("hidden");
    opened = true;
  } else {
    featuresSubMenu.classList.add("hidden");
    featureDownArrow.classList.remove("hidden");
    featureUpArrow.classList.add("hidden");
    opened = false;
  }
});

company.addEventListener("click", () => {
  if (!opened) {
    companySubMenu.classList.add("flex");
    companySubMenu.classList.remove("hidden");
    companyDownArrow.classList.add("hidden");
    companyUpArrow.classList.remove("hidden");

    opened = true;
  } else {
    companySubMenu.classList.add("hidden");
    companyDownArrow.classList.remove("hidden");
    companyUpArrow.classList.add("hidden");
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
