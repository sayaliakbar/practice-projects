# Data Insights - Stats Preview Card Component

This project is a solution to the [Stats Preview Card Component challenge](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62) on Frontend Mentor. It demonstrates the use of modern frontend technologies to create a visually appealing and responsive card component.

## Table of Contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Learnings](#learnings)
- [Future Enhancements](#future-enhancements)
- [Resources](#resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### Project Description

**Data Insights** is a modern, responsive stats preview card that showcases business data analytics in a clean and engaging design. It highlights the power of data-driven decision-making, targeting business professionals and data enthusiasts.

### Features

- **Responsive Design**: Optimized layout for different screen sizes using Tailwind CSS.
- **Custom Styling**: Dynamic and modern styling with custom color schemes and typography.
- **Accessible Content**: Clear and easy-to-read content for a seamless user experience.
- **Data Highlights**: Quick statistics on companies, templates, and queries for better engagement.

### Screenshots

#### Desktop View:

![Desktop View](https://github.com/user-attachments/assets/ccc52c2a-6bc4-4bb8-9545-8caf8a4be5c4)

#### Mobile View:

![Mobile View](https://github.com/user-attachments/assets/84dd61ab-bcb6-41d1-be02-7b8c84051779)

<p align="center">
  <img src="./stats-preview-card-component-mobile.png" alt="Description of Image" width="600"/>
</p>

### Live Demo

- Check out the live project: [View Live Demo](https://sore-airplane.surge.sh/)
- Check out the solution of the project: [View Solution](https://github.com/sayakbarali/netixsol-internship/blob/main/week-01/day-05/stats-preview-card-component-solution/index.html)

---

## Technologies Used

- **HTML5**: Semantic markup for accessibility and structure.
- **Tailwind CSS**: Utility-first CSS framework for rapid and custom styling.
- **Google Fonts**: Elegant typography using Inter and Lexend Deca.
- **Responsive Images**: Adaptive image loading for optimal performance.

---

## Learnings

Working on the **Stats Preview Card Component** project provided valuable insights into modern web development practices, particularly in the following areas:

### 1. **Utility-First CSS with Tailwind CSS**

- **Efficiency in Styling**: Tailwind CSS allowed for rapid prototyping by using pre-built utility classes directly in the HTML markup. This minimized the need for writing custom CSS and streamlined the development process.
- **Custom Themes**: I learned how to configure a custom color palette in Tailwind CSS, enhancing the visual identity of the project. For example:
  ```css
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: {
            veryDarkBlue: "#1f2937",
            darkDesaturatedBlue: "#2c3e50",
            softViolet: "#8e44ad",
          },
        },
      },
    },
  };
  ```
- **Responsive Design**: The ability to use responsive classes like `lg:flex`, `sm:w-4/6`, and `lg:items-center` made it straightforward to create adaptive layouts for multiple screen sizes.

---

### 2. **Responsive Design Techniques**

- **Mobile-First Approach**: Starting with a mobile-friendly layout and progressively enhancing the design for larger screens helped me create a robust and scalable design.
- **Adaptive Images**: Using `<picture>` elements and media queries, I learned to deliver optimized images for different devices:
  ```html
  <picture>
    <source
      srcset="./dist/assets/image-header-desktop.jpg"
      media="(min-width: 1024px)"
    />
    <img
      src="./dist/assets/image-header-mobile.jpg"
      alt="Dashboard showing data analytics insights"
    />
  </picture>
  ```
  This approach improves performance and ensures the best user experience.

---

### 3. **Typography and Readability**

- **Google Fonts Integration**: Selecting and implementing fonts like **Inter** and **Lexend Deca** to create a clean and professional look.
- **Hierarchy in Text Styling**: Understanding the importance of text hierarchy for readability, I used utility classes like `font-bold`, `text-2xl`, and `uppercase` to distinguish headings, subheadings, and body text.

---

### 4. **Overlay and Blend Modes**

- I applied background overlays to the header image to enhance text readability while preserving the visual appeal of the image:
  ```html
  <div class="absolute inset-0 bg-violet-900/70 rounded-t-lg"></div>
  ```
  This technique was achieved using Tailwind's utility classes like `absolute`, `inset-0`, and `bg-opacity`.

---

### 5. **Improved Accessibility**

- **Semantic HTML**: Using proper elements like `<header>`, `<main>`, and `<section>` to ensure the structure is clear and accessible to screen readers.
- **Alt Text for Images**: Providing descriptive alt text for all images ensures users with visual impairments can understand the content.
- **Responsive Font Sizes**: Using Tailwind's typography utilities (`lg:text-4xl`, `leading-6`) ensures text remains legible across devices.

---

### 6. **Code Organization and Readability**

- **Component-Based Structure**: Dividing the project into logical sections like header, statistics, and image container improved maintainability.
- **Commenting Code**: Adding meaningful comments in the HTML made the codebase easier to understand and revisit in the future.

---

### 7. **Cross-Browser Compatibility**

- Testing the project across multiple browsers (Chrome, Firefox, Edge) provided insights into ensuring consistent rendering and performance.

---

This project allowed me to strengthen my skills in **responsive design**, **CSS utility frameworks**, and **creating visually engaging components**, preparing me for more advanced challenges in the future.

---

## Resources

- [Frontend Mentor](https://www.frontendmentor.io/) - Source of the challenge.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Framework guide.
- [Google Fonts](https://fonts.google.com/) - Typography inspiration.

---

## Author

- GitHub - [@sayakbarali](https://github.com/sayakbarali)
- LinkedIn - [@sayaliakbar](https://linkedin.com/in/sayaliakbar)

---

## Acknowledgments

A big thanks to the Frontend Mentor community for providing such a great platform to practice and improve coding skills.

---
