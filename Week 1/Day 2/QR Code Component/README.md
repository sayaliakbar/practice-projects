# Frontend Mentor - QR Code Component Solution

This is a solution to the [QR Code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of Contents

- [Overview](#overview)
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

### Screenshot

![QR Code Component](./assets/QR%20Code%20Screenshot.jpg)

---

### Links

- **Solution URL**: [QRCode Card Solution](https://github.com/sayakbarali/NetixsolCode/blob/main/Week%201/Day%202/QR%20Code%20Component/QR%20Code.html)

---

## My Process

### Built With

- **HTML5** for semantic markup
- **CSS3** custom properties
- **Flexbox** for layout
- **Mobile-first workflow**

---

### What I Learned

Here are some key concepts and techniques I learned while working on this project:

1. **Using Semantic HTML**: I structured the card with semantic tags for better accessibility.

   ```html
   <section id="card" aria-label="QR Code Card"></section>
   ```

2. **Flexbox for Centering**:

   - I used `flexbox` to align the card and QR code image both horizontally and vertically:

   ```css
   display: flex;
   justify-content: center;
   align-items: center;
   ```

3. **Customizing Styles with Variables**:

   - Organized color schemes using HSL for reusability and consistency:

   ```css
   background-color: hsl(212, 45%, 89%);
   ```

4. **Responsive Design**:
   - Implemented a mobile-first workflow using media queries:
   ```css
   @media (max-width: 375px) {
     #card {
       width: 73%;
       height: 70%;
     }
   }
   ```

---

### Continued Development

In future projects, I aim to:

- Deepen my understanding of **CSS Grid** for more complex layouts.
- Practice **accessibility improvements** to make websites more inclusive.
- Improve performance by optimizing images using modern formats like `webp`.

---

### Useful Resources

- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This resource helped me understand how to align elements with Flexbox.
- [Frontend Mentor Documentation](https://www.frontendmentor.io/resources) - A great starting point for this challenge.
- [MDN Web Docs - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) - This helped me implement responsive design.

---

## Author

- GitHub - [@sayakbarali](https://github.com/sayakbarali)
- LinkedIn - [@sayaliakbar](https://www.linkedin.com/in/sayaliakbar/)

---

## Acknowledgments

A special thanks to Frontend Mentor for providing this challenge! It helped me practice my front-end development skills, including responsive design and CSS best practices.

---
