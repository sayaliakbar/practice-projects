# Recipe Application

## Overview

A modern, responsive recipe application built with React and styled using Tailwind CSS or Material-UI. This app allows users to browse recipes, view detailed information, and manage their favorite recipes seamlessly.

## Features

### Frontend

1. **Homepage**

   - Display a list of recipes with:
     - Names
     - Images
     - Cooking times
     - Health Score
   - Search functionality to filter recipes by name.
   - Pagination to manage recipe listings.

2. **Recipe Detail Page**

   - Display full details of a recipe, including:
     - Name
     - Image
     - Ingredients
     - Steps
     - Cooking time
     - Difficulty level
   - Button to mark/unmark recipes as favorites.

3. **Favorite Recipes Page**

   - List all recipes marked as favorites.
   - Allow users to remove recipes from the favorites list.

4. **Responsive Design**
   - Ensure compatibility with mobile, tablet, and desktop devices.

### Backend API

The backend functionality is powered by a pre-provided API: [Spoonacular API](https://www.postman.com/spoonacular-api/spoonacular-api/collection/rqqne3j/spoonacular-api).

#### API Endpoints

- **Get Recipes**: `GET /recipes` - Fetch a list of recipes.
- **Get Recipe Details**: `GET /recipes/:id` - Fetch detailed information about a specific recipe.

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **Styling**:
  - Tailwind CSS for responsive and interactive designs.

### Backend API

- Consuming the [Spoonacular API](https://www.postman.com/spoonacular-api/spoonacular-api/collection/rqqne3j/spoonacular-api).

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sayakbarali/netixsol-internship/tree/main/hakathons/firstHakathon
   cd recipe-finder
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

## Folder Structure

```
.
├── src
│   ├── components
│   │   ├── homepage
│   │   │   ├── Home.jsx
│   │   │   └── Navbar.jsx
│   │    └── recipe-detail-page
│   │       └── RecipeDetail.jsx
│   ├── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── init.js
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Usage

1. Navigate to the homepage to browse available recipes.
2. Use the search bar to find recipes by name or ingredients.
3. Click on a recipe to view detailed information.
4. Mark recipes as favorites for quick access later.
5. View and manage your favorite recipes on the "Favorites" page.

## Future Improvements

- Add user authentication for personalized recipe management.
- Allow users to add and edit their own recipes.
- Implement advanced filters (e.g., by cuisine, dietary preferences).
- Enable offline access using service workers.

## Author

- GitHub - [@sayakbarali](https://github.com/sayakbarali)
- LinkedIn - [@sayaliakbar](https://linkedin.com/in/sayaliakbar)

  **Happy Cooking!** 🍳
