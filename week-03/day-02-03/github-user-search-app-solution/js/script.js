function searchUser() {
  const searchUser = document.querySelector(".searchUser").value;
  console.log(searchUser);
  const userFullName = document.querySelector(".userFullName");
  const userProfile = document.querySelector(".userProfile");
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

  const url = `https://api.github.com/users/${searchUser}`;
  async function getUrl() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      userFullName.innerHTML = data.name;
      username.innerHTML = data.login;
      userProfile.src = data.avatar_url;
      joinedDate.innerHTML = `Joined ${formatDate(data.created_at)}`;
      for (const bio of bios) {
        bio.innerHTML = data.bio;
      }
      repos.innerHTML = data.public_repos;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;
      location.innerHTML = data.location;
      twitter.innerHTML = data.twitter_username;
      company.innerHTML = data.company;
      website.innerHTML = data.html_url;

      console.log(data);
      console.log(data.html_url);
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
