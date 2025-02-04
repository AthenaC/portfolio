document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle");
    const htmlElement = document.documentElement;

    // Check for theme in localStorage or fallback to system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    const currentTheme = savedTheme || (prefersDarkScheme ? "dark" : "light");

    // Apply the saved or default theme
    htmlElement.setAttribute("data-theme", currentTheme);
    toggleSwitch.checked = currentTheme === "dark";

    // Theme toggle logic
    toggleSwitch.addEventListener("change", () => {
        const newTheme = toggleSwitch.checked ? "dark" : "light";
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

    });
});
