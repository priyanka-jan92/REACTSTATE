# React Stateful Application

## Project Description

React Stateful Application is a simple interactive web application developed using React.js. This project demonstrates the use of React functional components and the `useState` Hook to manage and update application data dynamically.

The application consists of two main components: a Counter Application and a Password Validation Application. It provides practical examples of state management, event handling, and conditional rendering in React.

## Features

### 1. Counter Application
- Displays the current counter value.
- Increment button to increase the count.
- Decrement button to decrease the count.
- Reset button to set the count back to zero.
- Uses React's `useState` Hook to manage the counter value.

### 2. Password Validation
- Accepts password input from the user.
- Checks whether the password contains a minimum of 6 characters.
- Checks for at least one uppercase letter.
- Checks for at least one lowercase letter.
- Checks for at least one numeric digit.
- Displays validation messages dynamically.
- Displays a success message when all validation conditions are satisfied.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- npm
- Git and GitHub

## Project Structure

```text
REACTSTATE/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── Counter.jsx
│   ├── Password.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation and Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/priyanka-jan92/REACTSTATE.git
```

**2. Navigate to the project directory**

```bash
cd REACTSTATE
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the localhost URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

## Build for Production

To create a production build, execute:

```bash
npm run build
```

## Live Demo

The application is deployed using GitHub Pages.

**Live Website:** https://priyanka-jan92.github.io/REACTSTATE/

## GitHub Repository

**Source Code:** https://github.com/priyanka-jan92/REACTSTATE

## Learning Outcomes

- Understanding React functional components.
- Working with the React `useState` Hook.
- Managing component state.
- Handling user events using event handlers.
- Implementing conditional rendering.
- Performing basic form input validation.
- Building and deploying a React application using Vite and GitHub Pages.

---

Developed as a React.js practice project.