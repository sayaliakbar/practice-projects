# Frontend Mentor - Intro Section with Dropdown Navigation Solution

This is my solution to the [Intro Section with Dropdown Navigation Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). It was a great opportunity to apply responsive design principles and practice interactive navigation using **HTML**, **Tailwind CSS**, and **JavaScript**.

---

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built With](#built-with)
  - [Key Learnings](#key-learnings)
  - [Areas for Improvement](#areas-for-improvement)
  - [Resources](#resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

The goal was to create a responsive landing page where users can:

- View dropdown menus when interacting with navigation links on both desktop and mobile.
- Experience an optimal layout tailored to their device's screen size.
- See hover states for all interactive elements.

### Screenshot

#### Desktop View

![intro-section-with-dropdown-navigation-desktop](https://github.com/user-attachments/assets/72a9a9d8-f185-40c6-bf9f-3c0718a975ba)

#### Active States

![intro-section-with-dropdown-navigation-desktop-active-states](https://github.com/user-attachments/assets/66c87071-b4aa-41ec-aa2d-7f7a16b79661)

#### Tablet View

![intro-section-with-dropdown-navigation-tablet](https://github.com/user-attachments/assets/fb02a45a-5330-4cec-b8a2-c8037508b98b)

#### Mobile View

![intro-section-with-dropdown-navigation-mobile-collapsed](https://github.com/user-attachments/assets/7dfb3f72-e19b-4822-98e1-92f4ce23cdae)

#### Mobile View (Expanded)

![intro-section-with-dropdown-navigation-mobile-expanded](https://github.com/user-attachments/assets/25a2b33a-8058-45ca-a83c-cd3fc1cf554a)

### Links

- **Solution URL**: [View the solution here](https://your-solution-url.com)
- **Live Site URL**: [Visit the live demo](https://your-live-site-url.com)

---

## Process

### Built With

- **Semantic HTML5**: For clean, structured content.
- **Tailwind CSS**: To create a responsive, utility-first design.
- **Vanilla JavaScript**: For toggling dropdown menus and managing interactivity.
- **Mobile-First Workflow**: Ensured smooth responsiveness.

### Key Learnings

Here are a few things I learned while building this project:

1. **Dropdown Menu Interactions**:  
   Implementing dropdowns using `classList` manipulation for showing and hiding elements dynamically.
   ```js
   function toggleSubMenu(state, subMenu, downArrow, upArrow) {
     if (!state) {
       subMenu.classList.remove("hidden");
       subMenu.classList.add("flex");
       downArrow.classList.add("hidden");
       upArrow.classList.remove("hidden");
     } else {
       subMenu.classList.remove("flex");
       subMenu.classList.add("hidden");
       downArrow.classList.remove("hidden");
       upArrow.classList.add("hidden");
     }
     return !state;
   }
   ```
2. **Responsive Design with Tailwind**:  
   Utilizing utility classes like `flex`, `hidden`, and responsive breakpoints (`sm:`, `md:`, `lg:`) made styling easier and faster.

### Areas for Improvement

- **Animation**: Add smooth transitions for opening and closing dropdowns for better user experience.
- **Accessibility**: Enhance focus states and improve keyboard navigation.
- **Reusable Code**: Refactor JavaScript to reduce duplication and improve readability.

### Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Essential for creating a responsive layout.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - General reference for HTML, CSS, and JavaScript.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - For inspiration and feedback.

---

## Author

- **Portfolio**: [Your Portfolio](https://www.your-portfolio.com)
- **Frontend Mentor Profile**: [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- **GitHub**: [@yourgithub](https://github.com/yourgithub)

---

## Acknowledgments

Thanks to the [Frontend Mentor community](https://www.frontendmentor.io/) for their helpful resources and encouragement. Special shoutout to anyone who reviewed or provided feedback on this project.

---

Feel free to replace the placeholders with your actual content or additional sections as necessary! 😊
