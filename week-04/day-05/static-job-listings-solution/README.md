# Frontend Mentor - Job Listings with Filtering Solution

This is a solution to the [Job Listings with Filtering Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). The project showcases dynamic filtering of job listings and is designed to be responsive and user-friendly.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Live Demo](#live-demo)
- [Built With](#built-with)
- [Features](#features)
- [What I Learned](#what-i-learned)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

The main objective of this project was to build a responsive job listings page where users can filter listings based on selected categories like roles, levels, tools, or languages.

### Screenshots

#### Desktop View

![jobListingsSolutionDesktop](https://github.com/user-attachments/assets/f2dc9b77-ca9b-46e3-94d9-d864d2ecfcb5)

#### Desktop View (Active States)

![jobListingsSolutionDesktopActiveStates](https://github.com/user-attachments/assets/0a607849-b3c1-4028-a3ac-9bf2a3a99b1a)

#### Mobile View

![jobListingsSolutionMobile](https://github.com/user-attachments/assets/c9ce467f-ca95-415a-ad4f-398750196b83)

#### Mobile View (Active States)

![jobListingsSolutionMobileActiveStates](https://github.com/user-attachments/assets/e6794306-3401-4375-bc6d-26223282e15c)

### Live Demo

- Live Site URL: [https://shimmering-duckanoo-55f8bb.netlify.app/](https://shimmering-duckanoo-55f8bb.netlify.app/)

---

## Built With

- **React.js**: A JavaScript library for building interactive UIs.
- **Tailwind CSS**: A utility-first CSS framework for modern designs.
- **Vite**: A fast front-end build tool for modern web development.
- **Zustand**: A state management library used for managing filters.
- Semantic HTML5 and CSS3 for markup and styling.

---

## Features

- Dynamic filtering of job listings based on selected criteria.
- Responsive design with optimal layouts for mobile and desktop.
- Clean and modern UI built with Tailwind CSS.
- Persistently displayed active filters with an option to remove or clear them.
- Engaging hover states for interactive elements.

---

## What I Learned

This project was a great opportunity to apply advanced React concepts like component composition, state management with **Zustand**, and building reusable components like the `FilterBar` and `Job` components. Additionally, integrating Tailwind CSS streamlined the styling process and allowed for rapid prototyping.

Here’s an example of the reusable `Card` component for job listings:

```jsx
<div className="bg-white rounded-sm sm:border-l-2 drop-shadow-lg border-primary-cyan flex py-4 px-5 gap-4">
  <img src={job.logo} alt={job.company} />
  <div>
    <h1>{job.position}</h1>
    <span>{job.contract}</span>
  </div>
</div>
```

---

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sayakbarali/netixsol-internship/tree/main/week-04/day-05/static-job-listings-solution
   cd job-listings-filter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```plaintext
   http://localhost:5173
   ```

---

## Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html): Helped in understanding and building reusable components.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Simplified styling for this project.
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt): The challenge details and requirements.

---

## Author

- GitHub: [@sayakbarali](https://github.com/sayakbarali)
- LinkedIn: [@sayakbarali](https://linkedin.com/in/sayaliakbar)

---

## Acknowledgments

A special thanks to the Frontend Mentor community for providing inspiration and resources for this project. The challenge helped me refine my React and Tailwind CSS skills!
