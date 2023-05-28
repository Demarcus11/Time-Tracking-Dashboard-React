# Frontend Mentor - Time tracking dashboard

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## The challenge

Your challenge is to build out this dashboard and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

If you would like to practice working with JSON data, we provide a local `data.json` file for the activities. This means you'll be able to pull the data from there instead of using the content in the `.html` file.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Desktop](./screenshot.jpg)
![Mobile](./screenshot.jpg)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Time-Tracking-Dashboard-React.git)
- Live Site URL: [Live](https://demarcus11.github.io/Time-Tracking-Dashboard-React/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Grid template areas with media queries to make a responsive grid

```css
.dashboard-grid {
  display: grid;
  gap: var(--size-500);
  grid-template-areas:
    "profile"
    "work"
    "play"
    "study"
    "exercise"
    "social"
    "self-care";
}

@media (min-width: 700px) {
  .dashboard-grid {
    grid-template-areas:
      "profile work play"
      "profile study exercise"
      "profile social self-care";
  }
}

@media (min-width: 900px) {
  .dashboard-grid {
    outline: none;
    grid-template-areas:
      "profile work play study"
      "profile exercise social self-care";
  }
}
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/yourusername)
