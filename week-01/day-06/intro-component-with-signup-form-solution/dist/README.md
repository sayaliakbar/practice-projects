# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Receive an error message when the form is submitted if:
  - Any input field is empty, with the message: "_[Field Name] cannot be empty_".
  - The email address is not formatted correctly, with the message: "_Looks like this is not an email_".

### Screenshot

![Intro Component Sign Up Page Desktop](./images/intro-component-desktop.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/sayakbarali/netixsol-internship/blob/fb93ab423634a4cbf43af84b13ecabbc66c6ac85/week-01/day-06/intro-component-with-signup-form-solution/dist/index.html)
- Live Site URL: [Add live site URL here](https://superficial-vacation.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- JavaScript for form validation
- Mobile-first workflow

---

### What I learned

This project provided a comprehensive learning experience, allowing me to improve in the following areas:

1. **Form Validation with JavaScript**  
   I practiced validating forms dynamically using JavaScript. This included ensuring that fields are not empty, providing specific error messages, and visually highlighting errors. For example, dynamically toggling error icons and messages:

   ```js
   function validateForm() {
     const field = document.getElementById("firstName");
     const error = document.getElementById("firstNameError");
     const errorIcon = document.getElementById("firstNameErrorIcon");

     if (!field.value) {
       field.classList.add("border-primary-red");
       error.classList.remove("hidden");
       errorIcon.classList.remove("hidden");
     } else {
       field.classList.remove("border-primary-red");
       error.classList.add("hidden");
       errorIcon.classList.add("hidden");
     }
   }
   ```

2. **Regex for Email Validation**  
   Learned to use regular expressions to validate email formats. This was an opportunity to dive deeper into understanding regex syntax and its application in real-world scenarios.

   ```js
   function validateEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   }
   ```

3. **Tailwind CSS for Modern UI Design**  
   Tailwind's utility-first approach simplified styling. I explored responsive design features, hover states, and customizing the design system for error handling and hover effects:

   ```html
   <input
     class="border border-solid p-4 rounded-lg w-full hover:border-black/100"
     type="text"
     placeholder="First Name"
     name="firstName"
   />
   ```

   This taught me how to balance flexibility and readability in my styles.

4. **Mobile-First Workflow**  
   I structured my styles to cater primarily to smaller devices first and scaled up for larger devices using Tailwind's responsive classes. This approach ensures that the layout looks great across different devices.

   ```html
   <div
     class="container flex flex-col items-center lg:flex-row lg:gap-12 md:w-2/3"
   ></div>
   ```

5. **Responsive Backgrounds**  
   Using Tailwind’s responsive utilities, I set different background images for mobile and desktop views:

   ```html
   class="bg-[url('./bg-intro-mobile.png')]
   lg:bg-[url('./bg-intro-desktop.png')]"
   ```

   This eliminated the need for complex CSS media queries.

6. **Hover States and Interactivity**  
   Styled interactive elements like buttons to change appearance on hover, making the design more dynamic:

   ```html
   <button
     class="bg-primary-green hover:bg-white hover:text-primary-green border-primary-green border-2 rounded-lg"
   >
     Claim your free trial
   </button>
   ```

7. **Error Messaging and Feedback**  
   Improved user experience by providing clear, user-friendly error messages, emphasizing accessibility with color contrast and readable text.

   ```html
   <span class="italic text-primary-red text-[10px]">
     First Name cannot be empty
   </span>
   ```

This project was a great opportunity to apply theory in a hands-on project, reinforcing key skills in JavaScript and modern CSS frameworks like Tailwind.

---

### Continued development

Future focus areas:

- Enhancing accessibility by ensuring proper ARIA attributes.
- Exploring more advanced validation techniques, such as debouncing for real-time email validation.
- Adding animations for better user experience.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Helped me understand and utilize Tailwind classes effectively.
- [MDN Web Docs: Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Great resource for understanding form validation basics.

## Author

- GitHub - [@sayakbarali](https://github.com/sayakbarali/)
- LinkedIn - [@sayaliakbar](https://www.linkedin.com/in/sayaliakbar)

## Acknowledgments

Big thanks to [Frontend Mentor](https://www.frontendmentor.io/) for providing the challenge and structure.

---
