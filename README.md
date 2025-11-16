# Frontend Mentor – Conference Ticket Generator Solution

This is my solution to the **Conference Ticket Generator** challenge on [Frontend Mentor](https://www.frontendmentor.io/).  
The challenge helped me improve my HTML, CSS and JavaScript skills by building an interactive form that generates a personalized event ticket based on user inputs.

## Table of Contents
- [Overview](#overview)  
- [The Challenge](#the-challenge)  
- [Design](#design)  
- [Links](#links)  
- [My Process](#my-process)  
- [Built With](#built-with)  
- [What I Learned](#what-i-learned)

## Overview
This project is an **interactive ticket generator** for a fictional tech conference.  
Users can fill out a form with their name, email address and GitHub username, upload a profile picture, and receive a **personalized conference ticket** with their details — including a randomly generated ticket number.

The interface features:
- A clean and responsive UI  
- Drag-and-drop image upload  
- Live input validation  
- Accessible focus and hover states  
- Automatic ticket rendering after successful submission  

## The Challenge
Users should be able to:

- Upload a profile picture via **drag & drop** or by selecting a file manually.  
- Validate input fields in real time (name, email and GitHub username).  
- See error messages when inputs are invalid or missing.  
- View a preview of the uploaded profile image.  
- Remove the uploaded image and insert a new one if desired.  
- Receive a **conference ticket generated automatically** with their uploaded image and information.  
- Experience hover and focus states across the UI.  
- View the layout clearly on all screen sizes.

## Design
### Desktop Design Form
![Desktop Design Form](./design/desktop-design-form.jpg)

### Desktop Design Ticket 
![Desktop Design Ticket](./design/desktop-design-ticket.jpg)

### Mobile Design form  
<img src="./design/mobile-design-form.jpg" width="200px" alt="Mobile design layout">

### Mobile Design ticket  
<img src="./design/mobile-design-ticket.jpg" width="200px" alt="Mobile design layout">

### State Hover 
![State Hover](./design/state-hover.jpg)

### State Error  
![State Error](./design/state-error.jpg)

### State Focus  
![State Focus](./design/state-focus.jpg)

### State Form Complete Desktop  
![State Form Complete Desktop](./design/state-form-complete-desktop.jpg)

### State Form Complete Mobile  
<img src="./design/state-form-complete-mobile.jpg" width="200px" alt="Mobile design layout">



## Links
- **Solution URL:** [GitHub Repository](https://github.com/mlopezl/My-version-of-conference-ticket-generator-challenge)  
- **Live Site URL:** [Live Demo](https://mlopezl.github.io/My-version-of-conference-ticket-generator-challenge/)

## My Process
1. Started by structuring the form and ticket section using **semantic HTML**.  
2. Designed a scalable layout using **CSS Grid** for general structure and **Flexbox** for alignment inside components.  
3. Implemented a full responsive design with fluid units and breakpoint adjustments.  
4. Created styles for hover, focus and active states to reinforce accessibility and feedback.  
5. Developed an interactive profile image uploader supporting drag-and-drop and manual selection.  
6. Added client-side validations for every input, including regex validation and image-size limits.  
7. Generated a random ticket number using JavaScript and replaced placeholders dynamically.  
8. Removed the form after a successful submission and displayed the personalized ticket.

## Built With
- HTML5  
- CSS3  
- Flexbox  
- CSS Grid  
- JavaScript

## What I Learned
- How to build **drag-and-drop upload functionality** using the `dragover` and `drop` events.  
- How to validate form inputs with custom regex and show conditional error messages.  
- How to generate dynamic DOM updates using JavaScript to create a personalized visual result.  
- How to manage UX states (focus, hover and disabled) for cleaner interaction and accessibility.  
- How to structure a responsive layout combining **CSS Grid + Flexbox** efficiently.  
- How to restrict image uploads by file size and create instant preview using `URL.createObjectURL`.  
