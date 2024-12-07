window.onload = function () {
  const searchBtn = document.getElementById("search-bar");
  const themeBtn = document.getElementById("toggle-btn");
  const noResultMsg = document.getElementById("no-result");

  setUpDarkMode();
  getUserData("octocat").then(function (userData) {
    renderData(userData);
  });

  searchBtn.addEventListener("submit", function searchUser(e) {
    e.preventDefault();
    noResultMsg.classList.add("hidden");
    searchValue = e.target.querySelector("input").value;
    getUserData(searchValue)
      .then(function (userData) {
        if (userData.message == "Not Found") {
          noResultMsg.classList.remove("hidden");
        }
        renderData(userData);
      })
      .catch(function (error) {
        console.log("error:", error);
      });
  });

  function setUpDarkMode() {
    function toggleThemeBtn() {
      document.getElementById("toggle-light").classList.toggle("hidden");
      document.getElementById("toggle-dark").classList.toggle("hidden");
    }

    function toggleDarkMode(state) {
      document.documentElement.classList.toggle("dark", state);
    }

    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    useDark.addEventListener("change", function listenToThemeChange(e) {
      toggleDarkMode(e.matches);
      toggleThemeBtn();
    });

    // Initialize dark mode if matches with OS settings
    toggleDarkMode(useDark.matches);

    // Adds event listener to toggle dark mode with btn
    themeBtn.addEventListener("click", function toggleTheme(e) {
      document.documentElement.classList.toggle("dark");
      toggleThemeBtn();
    });
  }

  async function getUserData(user) {
    const URL = "https://api.github.com/users/" + user;
    const response = await fetch(URL);
    return await response.json();
  }

  function renderData(userObj) {
    Object.keys(userObj).forEach(function loopKeys(key) {
      let element = document.getElementById(key);
      if (element) {
        if (userObj[key]) {
          element.parentElement.classList.remove("opaque");
          element.classList.remove("opaque");
          switch (key) {
            case "avatar_url":
              element.setAttribute("src", userObj[key]);
              break;
            case "created_at":
              let date = new Date(userObj[key]);
              let options = { day: "numeric", month: "long", year: "numeric" };
              let parsedDate = new Intl.DateTimeFormat("en-GB", options).format(
                date
              );
              element.innerHTML = parsedDate;
              break;
            case "login":
              element.innerHTML = "@" + userObj[key];
              break;
            case "twitter_username":
              let twitterUrl = "https://www.twitter.com/" + userObj[key];
              element.innerHTML = "@" + userObj[key];
              element.setAttribute("href", twitterUrl);
              break;
            case "blog":
              element.setAttribute("href", userObj[key]);
            default:
              element.innerHTML = userObj[key];
          }
        } else {
          element.innerHTML = "Not Available";
          if (element.parentElement.nodeName == "LI") {
            element.parentElement.classList.add("opaque");
          } else {
            element.classList.add("opaque");
          }
        }
      }
    });
  }
};
