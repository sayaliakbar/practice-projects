// // Select DOM elements
const openSideMenu = document.getElementById("openMenu");
const closeSideMenu = document.getElementById("closeMenu");

// Open side menu
function openMenu() {
  sideMenu.classList.remove("hidden");
  sideMenu.classList.add("flex");
  darkBackground.classList.remove("hidden");
}

// Close side menu
function closeMenu() {
  sideMenu.classList.add("hidden");
  darkBackground.classList.add("hidden");
}

// Add event listeners
openSideMenu.addEventListener("click", openMenu);
closeSideMenu.addEventListener("click", closeMenu);

// Toggle submenus based on the context (Navbar or Sidebar)
function toggleSubMenu(context, state, subMenu, downArrow, upArrow) {
  if (!state) {
    subMenu.classList.add("flex");
    subMenu.classList.remove("hidden");
    downArrow.classList.add("hidden");
    upArrow.classList.remove("hidden");
  } else {
    subMenu.classList.add("hidden");
    subMenu.classList.remove("flex");
    downArrow.classList.remove("hidden");
    upArrow.classList.add("hidden");
  }
  return !state; // Return updated state
}

// Navbar states
let openedFeaturesNavbar = false;
let openedCompanyNavbar = false;

// Sidebar states
let openedFeaturesSidebar = false;
let openedCompanySidebar = false;

// Navbar event listeners
document.getElementById("featuresNavbar").addEventListener("click", () => {
  openedFeaturesNavbar = toggleSubMenu(
    "navbar",
    openedFeaturesNavbar,
    document.getElementById("featuresSubMenuNavbar"),
    document.getElementById("featureDownArrowNavbar"),
    document.getElementById("featureUpArrowNavbar")
  );
});

document.getElementById("companyNavbar").addEventListener("click", () => {
  openedCompanyNavbar = toggleSubMenu(
    "navbar",
    openedCompanyNavbar,
    document.getElementById("companySubMenuNavbar"),
    document.getElementById("companyDownArrowNavbar"),
    document.getElementById("companyUpArrowNavbar")
  );
});

// Sidebar event listeners
document.getElementById("featuresSidebar").addEventListener("click", () => {
  openedFeaturesSidebar = toggleSubMenu(
    "sidebar",
    openedFeaturesSidebar,
    document.getElementById("featuresSubMenuSidebar"),
    document.getElementById("featureDownArrowSidebar"),
    document.getElementById("featureUpArrowSidebar")
  );
});

document.getElementById("companySidebar").addEventListener("click", () => {
  openedCompanySidebar = toggleSubMenu(
    "sidebar",
    openedCompanySidebar,
    document.getElementById("companySubMenuSidebar"),
    document.getElementById("companyDownArrowSidebar"),
    document.getElementById("companyUpArrowSidebar")
  );
});
