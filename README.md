
# Frontend Mentor - Social media dashboard with theme switcher solution

This is my solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).
It was a fun project to practice responsive layouts, CSS custom properties, and a fully functional theme switcher that remembers the user’s preference.

---

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

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Toggle color theme between light and dark.
- Keep theme preference stored and applied automatically on page reload.
- Respect the system’s preferred color scheme on first visit.

---

### Screenshot

![Social Media Dashboard Screenshot](./screenshot.jpg)

---

## My process

### Built with

- **Semantic HTML5 markup**
- **CSS custom properties** for easy theming
- **Flexbox** and **CSS Grid** for layout
- **Mobile-first workflow**
- **Vanilla TypeScript** for theme switcher logic
- **LocalStorage** and **matchMedia** for persistent theme handling

---

### What I learned

The main learning experience was implementing a **theme toggle** that works in three situations:

1. On first visit, it matches the user’s system preference.
2. When the toggle is switched, it updates the UI instantly.
3. The choice is stored in **localStorage**, so it’s preserved across sessions.

Here’s the core logic for my theme toggle:

```ts
const themeToggle = document.querySelector("[data-theme-toggle] input") as HTMLInputElement;

const setDarkMode = () => {
  document.body.dataset.theme = "dark";
  localStorage.setItem("theme", "dark");
};

const setLightMode = () => {
  document.body.dataset.theme = "light";
  localStorage.setItem("theme", "light");
};

themeToggle.addEventListener("change", () => {
  themeToggle.checked ? setDarkMode() : setLightMode();
});
```

---

### Continued development

In the future, I’d like to:

- Add **smooth theme transition animations** for a nicer user experience.
- Improve accessibility by making the theme toggle usable via keyboard navigation and with proper `aria` attributes.
- Store more UI preferences (e.g., font size) along with the theme.

---

### Useful resources

- [MDN Web Docs - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) – Great for learning how to structure light/dark theme variables.
- [CSS-Tricks - Dark Mode in CSS](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) – Helped me understand how to integrate `prefers-color-scheme`.
- [Frontend Mentor Community](https://www.frontendmentor.io) – Inspiration from other solutions.

---

## Author

- GitHub – [hosseinensafi](https://github.com/hosseinensafi)
- Frontend Mentor – [@hosseinensafi](https://www.frontendmentor.io/profile/hosseinensafi)

---
