type Theme = "dark" | "light";
const themeToggle = document.querySelector("[data-theme-toggle]") as HTMLInputElement;

const setDarkMode = () => {
  document.body.dataset.theme = "dark";
  localStorage.setItem("theme", "dark");
};

const setLightMode = () => {
  document.body.dataset.theme = "light";
  localStorage.setItem("theme", "light");
};

const themeFromLocalStorage = (): Theme | null => {
  const mode = localStorage.getItem("theme");
  return mode === "dark" || mode === "light" ? mode : null;
};

const themeFromPreferences = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const color = themeFromLocalStorage() || themeFromPreferences();
themeToggle.checked = color === "dark";
color === "dark" ? setDarkMode() : setLightMode();

themeToggle.addEventListener("change", () => {
  themeToggle.checked ? setDarkMode() : setLightMode();
});
