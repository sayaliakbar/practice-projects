function searchUser() {
  // Get the search input field
  const searchUser = document.querySelector(".searchUser");

  // If no username is entered, prompt the user with a placeholder
  if (!searchUser.value) {
    searchUser.placeholder = "Please enter a username!";
  }

  // If a username is entered, proceed to fetch and display user data
  if (searchUser.value) {
    // Select all elements that will display the user data
    const userFullName = document.querySelector(".userFullName");
    const userProfiles = document.querySelectorAll(".userProfile"); // User profile images
    const username = document.querySelector(".username");
    const joinedDate = document.querySelector(".joinedDate");
    const bios = document.querySelectorAll(".bio"); // User bio text (multiple instances)
    const repos = document.querySelector(".repos");
    const followers = document.querySelector(".followers");
    const following = document.querySelector(".following");
    const twitter = document.querySelector(".twitter");
    const location = document.querySelector(".location");
    const company = document.querySelector(".company");
    const website = document.querySelector(".website");
    const notFound = document.querySelector(".notFound"); // Error message display

    // API endpoint to fetch GitHub user data
    const url = `https://api.github.com/users/${searchUser.value}`;

    // Async function to fetch and handle the GitHub API data
    async function getUrl() {
      try {
        const response = await fetch(url);

        // Handle error if user is not found
        if (!response.ok) {
          if (response.status === 404) {
            notFound.classList.remove("hidden"); // Show "Not Found" message
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Hide "Not Found" message on successful fetch
        notFound.classList.add("hidden");

        // Parse the response JSON
        const data = await response.json();

        // Populate user data into the DOM elements
        userFullName.innerHTML = data.name || "Not Available";
        username.innerHTML = data.login || "Not Available";

        // Update all instances of the user profile image
        for (let userProfile of userProfiles) {
          userProfile.src = data.avatar_url;
        }

        // Format and display the joined date
        joinedDate.innerHTML = `Joined ${formatDate(data.created_at)}`;

        // Display user bio or show "Not Available"
        for (const bio of bios) {
          bio.innerHTML = data.bio || "Not Available";
        }

        // Populate user's repository, follower, and following count
        repos.innerHTML = data.public_repos || "0";
        followers.innerHTML = data.followers || "0";
        following.innerHTML = data.following || "0";

        // Display location or show "Not Available"
        location.innerHTML = data.location || "Not Available";

        // Display Twitter username or show "Not Available"
        twitter.innerHTML = data.twitter_username || "Not Available";

        // Display company name or show "Not Available"
        company.innerHTML = data.company || "Not Available";

        // Set the website URL or show "Not Available"
        if (data.html_url) {
          website.innerHTML = data.html_url;
          website.href = data.html_url;
        } else {
          website.innerHTML = "Not Available";
        }
      } catch (error) {
        // Log errors to the console for debugging
        console.log(`Error:`, error);
      }
    }

    // Call the function to fetch and display user data
    getUrl();

    // Helper function to format the date
    function formatDate(dateCreated) {
      // Convert the date string into a Date object
      const date = new Date(dateCreated);

      // Extract day, month, and year
      const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits
      const month = date.toLocaleString("default", { month: "long" }); // Full month name
      const year = date.getFullYear();

      // Return the formatted date string
      return `${day} ${month} ${year}`;
    }
  }
}
