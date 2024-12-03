# **Frontend Mentor - Interactive Rating Component**

This is a solution to the [Interactive Rating Component Challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) on Frontend Mentor. This project focuses on building a responsive and interactive component for collecting user feedback.

## **Table of Contents**

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Desktop View](#desktop-view)
  - [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Lessons Learned](#lessons-learned)
- [Setup Instructions](#setup-instructions)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## **Overview**

### **The Challenge**

The task was to build a fully functional rating component where users can:

- View an optimal layout for different screen sizes.
- Hover over interactive elements for visual feedback.
- Select a numeric rating and submit it.
- View a thank-you state displaying their selected rating.

#### **Desktop View**

![Desktop View](https://github.com/user-attachments/assets/107edf33-66c1-412c-b063-493b223ee0a5)

#### **Mobile View:**

![Mobile View](https://github.com/user-attachments/assets/116f1dbd-f6c6-4c5c-a3ce-2f11ac8dba69)

#### **Desktop View (Active States):**

![Desktop View (Active States):](https://github.com/user-attachments/assets/77c27f45-96a3-4406-9259-54148bf1a402)

#### **Desktop View (Thank You State):**

![Desktop View (Thank You State):](https://github.com/user-attachments/assets/658d8c24-cb11-4484-921c-55b1580cb2f5)

### **Live Demo**

Check out the live demo: [Interactive Rating Component](https://uptight-chance.surge.sh/)

---

## **Features**

1. **Responsive Design**: Adapts to different screen sizes seamlessly.
2. **Interactive Elements**: Button hover and active states enhance usability.
3. **Dynamic Updates**: Selected ratings and transitions between screens are handled dynamically.
4. **Error Handling**: Alerts users if no rating is selected before submission.
5. **Tailwind CSS Integration**: Simplifies styling with utility-first classes.

---

## **Technologies Used**

- **HTML5**: For semantic and accessible structure.
- **Tailwind CSS**: For responsive, utility-first styling.
- **Vanilla JavaScript**: For dynamic functionality and interactivity.
- **Google Fonts**: Used the "Overpass" font for a modern and clean look.

---

## **How It Works**

1. **Rating Selection**:

   - Users can select a rating between 1 and 5.
   - The selected rating button changes visually with distinct styles.

2. **Submission**:

   - Users submit their rating via the "Submit" button.
   - An error message is displayed if no rating is selected.

3. **Thank-You Screen**:
   - Upon successful submission, users see a thank-you message along with their selected rating.

### **Core JavaScript Logic**

- **Event Listeners**:
  - Handle click events on rating buttons and the submit button.
- **Dynamic Updates**:
  - Class toggling changes styles dynamically based on user interaction.
- **Error Handling**:
  - Ensures users provide a valid input before proceeding.

---

## **Lessons Learned**

- **Tailwind CSS**: Using utility classes allowed rapid prototyping and cleaner CSS.
- **Event Handling**: Improved understanding of event delegation and dynamic DOM manipulation.
- **Accessibility**: Implemented accessible design principles by focusing on responsive layouts and screen-reader-friendly elements.

---

## **Setup Instructions**

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/interactive-rating-component.git
   ```
2. Navigate to the project directory:
   ```bash
   cd interactive-rating-component
   ```
3. Open `index.html` in your preferred browser:
   ```bash
   open index.html
   ```

_Alternatively, you can serve the project using a local development server like Live Server or Vite._

---

## **Acknowledgments**

This project was inspired by Frontend Mentor's challenges, which provide a fantastic way to learn and improve coding skills. Special thanks to the Frontend Mentor community for their support and feedback.
