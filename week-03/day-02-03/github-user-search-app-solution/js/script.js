function searchUser() {
  const searchUser = document.querySelector(".searchUser").value;

  const userFullName = document.querySelector(".userFullName");
  const userProfiles = document.querySelectorAll(".userProfile");
  const username = document.querySelector(".username");
  const joinedDate = document.querySelector(".joinedDate");
  const bios = document.querySelectorAll(".bio");
  const repos = document.querySelector(".repos");
  const followers = document.querySelector(".followers");
  const following = document.querySelector(".following");
  const twitter = document.querySelector(".twitter");
  const location = document.querySelector(".location");
  const company = document.querySelector(".company");
  const website = document.querySelector(".website");
  const notFound = document.querySelector(".notFound");

  const url = `https://api.github.com/users/${searchUser}`;
  async function getUrl() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          notFound.classList.remove("hidden");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      notFound.classList.add("hidden");
      const data = await response.json();
      userFullName.innerHTML = data.name;
      username.innerHTML = data.login;

      for (let userProfile of userProfiles) {
        userProfile.src = data.avatar_url;
      }
      joinedDate.innerHTML = `Joined ${formatDate(data.created_at)}`;
      for (const bio of bios) {
        if (data.bio) {
          bio.innerHTML = data.bio;
        } else {
          bio.innerHTML = "Not Available";
        }
      }
      repos.innerHTML = data.public_repos;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;

      if (data.location) {
        location.innerHTML = data.location;
      } else {
        location.innerHTML = "Not Available";
      }

      if (data.twitter_username) {
        twitter.innerHTML = data.twitter_username;
      } else {
        twitter.innerHTML = "Not Available";
      }
      if (data.company) {
        company.innerHTML = data.company;
      } else {
        company.innerHTML = "Not Available";
      }
      if (data.html_url) {
        website.innerHTML = data.html_url;
        website.href = data.html_url;
      } else {
        website.innerHTML = "Not Available";
      }
    } catch (error) {
      console.log(`Error:`, error);
    }
  }
  getUrl();
  function formatDate(dateCreated) {
    // Parse the date string into a Date object
    const date = new Date(dateCreated);

    // Extract day, month, and year
    const day = date.getDate().toString().padStart(2, "0"); // Add leading zero if needed
    const month = date.toLocaleString("default", { month: "long" }); // Get full month name
    const year = date.getFullYear();

    // Return formatted string
    return `${day} ${month} ${year}`;
  }
}
