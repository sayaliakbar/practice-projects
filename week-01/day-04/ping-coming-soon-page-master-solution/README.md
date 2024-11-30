# Frontend Mentor - Ping Coming Soon Page Solution

This is my solution to the [Ping Coming Soon Page Challenge](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da) on Frontend Mentor. This challenge helps improve coding skills by building realistic and responsive projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users can:

- View the optimal layout for the page across different device sizes.
- See hover states for interactive elements.
- Submit their email address using the input field.
- Receive error messages if:
  - The `input` field is empty. (_"Whoops! It looks like you forgot to add your email"_)
  - The email address is incorrectly formatted. (_"Please provide a valid email address"_)

### Screenshot

![Coming Soon Page Screenshot](./dist/assets/screenshot.jpg)

> _Replace the above path with an actual screenshot of your project._

### Links

- **Solution URL**: [Add solution URL here](#)
- **Live Site URL**: [Add live site URL here](#)

---

## My Process

### Built With

- **Semantic HTML5 Markup**
- **CSS with TailwindCSS**
- **Flexbox**
- **Mobile-First Workflow**
- **JavaScript for Form Validation**
- **SweetAlert2 for Notification Popups**

Here’s an expanded **What I Learned** section, reflecting all the potential learning opportunities from the provided HTML code:

---

### What I Learned

This project provided a great opportunity to strengthen my understanding of modern frontend development practices. Here are the key concepts and techniques I learned:

#### **1. Structuring Semantic HTML**

I improved my ability to write semantic HTML by using meaningful tags like `<header>`, `<main>`, and `<footer>` for better accessibility and structure. I also learned the importance of attributes like `aria-label` for screen readers to enhance the user experience.

#### **2. Responsive Design with TailwindCSS**

- Using **utility-first CSS** classes in TailwindCSS allowed me to focus on functionality without writing custom CSS from scratch.
- I learned to implement responsive designs by leveraging Tailwind’s `sm`, `md`, `lg`, and `xl` breakpoints, ensuring the layout adapts seamlessly to different screen sizes.

Example:

```html
<main
  class="container flex flex-col w-[90%] md:w-[55%] lg:w-1/2 xl:w-2/5"
></main>
```

#### **3. Form Handling and Validation**

- Gained experience in building functional forms with proper validation using HTML attributes like `pattern` and `required`.
- Learned to display dynamic error messages using JavaScript and the importance of user-friendly feedback mechanisms.
- Used **SweetAlert2** for enhanced feedback with stylish alert popups.

Example:

```js
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

#### **4. Interactive Features and Enhancements**

- Explored the use of `:hover` states to improve the user experience, such as changing button colors or social media icons on hover.
- Used JavaScript to dynamically toggle CSS classes for interactive behavior like showing/hiding error messages.

#### **5. Accessibility Best Practices**

- Ensured accessibility by including `alt` attributes for images and `aria-label` for links.
- Tested the site for keyboard navigation and compatibility with screen readers.

#### **6. Lazy Loading for Performance Optimization**

- Implemented `loading="lazy"` for images, which helps defer the loading of images until they’re needed, improving the page’s performance on slower networks.

Example:

```html
<img loading="lazy" src="./dist/assets/logo.svg" alt="PING Logo" />
```

#### **7. Social Media Integration**

- Integrated social media links effectively using accessible `<a>` tags and icons from Font Awesome.
- Learned to enhance interactivity with hover states for a visually appealing design.

Example:

```html
<a
  aria-label="Facebook Profile"
  href="https://www.facebook.com/sayaliakbar"
  class="border border-solid flex items-center justify-center rounded-full w-12 h-12 hover:bg-[#748ece] group"
>
  <i
    class="fa-brands fa-facebook-f fa-lg text-[#748ece] group-hover:text-white"
  ></i>
</a>
```

#### **8. Visual Hierarchy and Typography**

- Experimented with different fonts using Google Fonts and explored how font weight and color can be used to create a visual hierarchy.

Example:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
  rel="stylesheet"
/>
```

#### **9. TailwindCSS Design Utilities**

- Explored a variety of TailwindCSS utilities, including `flex`, `rounded-full`, `hover`, `gap`, and more, to quickly prototype and refine designs.
- Used **drop shadows** and **color utilities** for polished and modern UI elements.

Example:

```html
<button
  class="w-full lg:w-2/5 py-4 bg-primary-blue hover:bg-neutral-veryDarkBlue text-white rounded-full drop-shadow-xl"
>
  Notify Me
</button>
```

#### **10. Mobile-First Workflow**

- Designed with a mobile-first approach to ensure the site performs well on smaller devices before scaling up to larger screens.
- Employed media queries effectively to adjust layout and styles for tablets and desktops.

---

These learnings have significantly improved my ability to design, style, and enhance web pages while focusing on user experience, performance, and maintainability. This project was an excellent opportunity to practice combining design and functionality in a modern development environment.

### Continued Development

In future projects, I aim to:

- Dive deeper into TailwindCSS utility classes for creating reusable components.
- Experiment with advanced form handling techniques, such as integrating backend services for storing submissions.
- Incorporate accessibility improvements to enhance user experience.

### Useful Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs) - Comprehensive guide for utility-first CSS.
- [SweetAlert2 Documentation](https://sweetalert2.github.io/) - Easy-to-use popup library for alerts and notifications.

---

## Author

- **GitHub**: [Your GitHub Profile](#)
- **Frontend Mentor**: [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- **LinkedIn**: [Your LinkedIn Profile](#)

---

## Acknowledgments

Special thanks to [Frontend Mentor](https://www.frontendmentor.io/) for providing a challenging yet enjoyable project. Inspiration was drawn from community solutions.

---
