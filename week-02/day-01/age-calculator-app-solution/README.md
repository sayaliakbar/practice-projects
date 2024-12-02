# Frontend Mentor - Age Calculator App Solution

This is my solution to the [Age Calculator App Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges provide an excellent opportunity to improve coding skills by working on realistic projects.

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

Users should be able to:

- View their age in years, months, and days after submitting a valid date through the form.
- Receive validation feedback if:
  - Any field is empty when the form is submitted.
  - The day number is not between 1-31.
  - The month number is not between 1-12.
  - The year is in the future.
  - The entered date is invalid (e.g., 31/04/1991, as April has 30 days).
- Experience an optimal layout depending on their device's screen size.
- Interact with hover and focus states for all interactive elements.

#### Desktop View:

![Desktop View](https://github.com/user-attachments/assets/ad561dae-a39d-4440-9354-19c5093803a3)

#### Mobile View:

![Mobile View](https://github.com/user-attachments/assets/d2431e00-0f37-47c4-b7d3-2329b6348a51)

### Links

- [View Solution](https://github.com/sayakbarali/netixsol-internship/blob/main/week-02/day-01/age-calculator-app-solution/index.html)
- [Live Demo](http://safe-able.surge.sh/)

---

## My Process

### Built With

- **HTML5** for semantic markup.
- **CSS3** with custom properties and a mobile-first workflow.
- **Tailwind CSS** for utility-first styling.
- **JavaScript (Vanilla)** for form validation and DOM manipulation.
- Responsive design for seamless viewing across devices.

### What I Learned

This project offered several learning opportunities:

1. **Form Validation with JavaScript**

   - Understanding how to validate form inputs effectively, including checks for required fields, range validation, and logical validations (e.g., verifying if a date is valid).
   - Providing meaningful feedback to users for errors, improving overall user experience.

2. **Date and Time Calculations**

   - Using the JavaScript `Date` object to handle dates and perform calculations for age in years, months, and days.
   - Accounting for edge cases like leap years and months with varying days.
     **_Dynamic Age Calculation:_**

```js
function calculateAge(day, month, year) {
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}
```

3. **Date Validation in JavaScript:**

```js
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === parseInt(day) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getFullYear() === parseInt(year)
  );
}
```

4. **DOM Manipulation**

   - Dynamically adding and removing CSS classes to provide visual cues for errors or valid input states.
   - Displaying real-time updates for calculated values directly in the UI.

5. **Responsive Design Principles**

   - Applying a mobile-first design approach to ensure the app looks great on devices of all sizes.
   - Utilizing CSS properties and media queries to adjust layouts and styling for optimal usability.

6. **Error Handling and UX Enhancement**

   - Highlighting input fields with issues using error messages and color cues, making the validation process intuitive for users.
   - Handling edge cases such as future dates and invalid combinations like `31/04/2022`.

7. **Animation Techniques** (Bonus Feature)

   - Animating numeric values to smoothly transition to the final calculated age for a better user experience.
   - Understanding the use of JavaScript and CSS animations to create visually appealing interactions.

8. **Utility-First Styling with Tailwind CSS**

   - Leveraging Tailwind's utility classes to speed up styling, ensuring a consistent design across the app.
   - Customizing Tailwind configurations for brand-specific colors and typography.

9. **Accessibility Considerations**

   - Learning how to enhance accessibility by labeling form elements properly and considering keyboard navigation.
   - Using semantic HTML to ensure compatibility with screen readers.

10. **Problem-Solving and Debugging**

- Troubleshooting issues like incorrect age calculations or validation logic errors.
- Learning how to debug using browser developer tools.

11. **Improved Project Structuring**
    - Organizing code into reusable functions for better readability and maintainability.
    - Separating concerns like validation, UI updates, and calculations for scalability.

These insights not only strengthened my JavaScript skills but also improved my ability to create user-friendly and accessible web applications.

### Continued Development

Future improvements include:

- Adding animations for better UX, particularly for the bonus feature.
- Implementing accessibility enhancements like ARIA labels for screen readers.
- Optimizing the JavaScript for larger, more complex projects.

### Useful Resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

## Author

- GitHub - [@sayakbarali](https://github.com/sayakbarali)
- LinkedIn - [@sayaliakbar](https://linkedin.com/in/sayaliakbar)

---

## Acknowledgments

Thanks to Frontend Mentor for this engaging challenge and the supportive developer community for their resources and guidance.
