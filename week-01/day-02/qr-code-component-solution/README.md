# Frontend Mentor - QR Code Component Solution

This is my solution to the [QR Code Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). This challenge helped me improve my HTML and CSS skills by creating a visually appealing and responsive QR code component.

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

## Overview

### Screenshot

![Screenshot of the QR Code Component](./qrCodeComponentScreenshot.jpg)

### Links

- **Solution URL**: [View my solution](https://github.com/sayakbarali/netixsol-internship/blob/main/week-01/day-02/qr-code-component-solution/index.html)
- **Live Site URL**: [View live site](https://cute-position.surge.sh/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS Flexbox for layout
- Mobile-first responsive design
- Google Fonts for typography

---

### What I Learned

This project was a great opportunity to strengthen my front-end development skills. Here are the key takeaways from working on this challenge:

1. **Semantic HTML Structure**  
   I focused on writing clean and semantic HTML5 code, ensuring that the page is well-structured and accessible. For example, I used the `<section>` tag with an `aria-label` attribute to enhance accessibility for screen readers.

   ```html
   <section class="card" aria-label="QR Code Card"></section>
   ```

2. **Responsive Design with Flexbox**  
   This project allowed me to practice using Flexbox for layout alignment. I applied `display: flex` with properties like `justify-content` and `align-items` to center the card within the viewport.

   ```css
   body {
     display: flex;
     justify-content: center;
     align-items: center;
     min-height: 100vh;
   }
   ```

3. **Consistent Styling with Custom Properties**  
   I applied consistent styling across the page by using CSS properties like `font-family` and `box-shadow`, which helped maintain a unified look. Using Google Fonts was particularly useful for enhancing the visual appeal.

4. **Responsive Units**  
   I learned the importance of using responsive units like percentages (`%`) and `rem` to ensure the layout adapts to different screen sizes. This makes the design scalable and better suited for mobile-first development.

5. **Optimizing Image Use**  
   I used the `loading="lazy"` attribute for the QR code image, which is a modern best practice to optimize page loading performance.

   ```html
   <img
     src="./assets/image-qr-code.png"
     alt="Profile QR Code"
     class="qr-image"
     loading="lazy"
   />
   ```

6. **Typography and Color Contrast**  
   By using the Google Fonts API and maintaining strong color contrast between the text and the background, I created a visually appealing and accessible design. I also experimented with font weights to establish a clear visual hierarchy.

   ```css
   .card-title {
     font-weight: 700;
     font-size: 1.4rem;
   }
   ```

This project reinforced the importance of building small, focused components that are reusable and visually polished. It also highlighted areas where I can further improve, such as advanced responsiveness techniques and accessibility best practices.

---

### Continued Development

I plan to focus on the following areas in future projects:

- Improving accessibility for screen readers.
- Enhancing responsiveness for different screen sizes.
- Experimenting with CSS Grid for more complex layouts.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive guides on HTML and CSS.
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Helped with understanding Flexbox layouts.
- [Google Fonts](https://fonts.google.com/) - To find and use beautiful fonts.

## Author

- GitHub - [@sayakbarali](https://github.com/sayakbarali/)
- LinkedIn - [@sayaliakbar](https://www.linkedin.com/in/sayaliakbar)

## Acknowledgments

Big thanks to the Frontend Mentor community for providing challenges like this to help developers grow. This project was a fun way to practice my skills!

---
