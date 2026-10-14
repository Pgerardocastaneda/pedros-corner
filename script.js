// Keeps the footer copyright year current without editing the HTML each January
document.querySelector("#year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector("#theme-toggle");

if(localStorage.getItem("theme")){
    document.documentElement.dataset.theme = localStorage.getItem("theme");
} 

themeToggle.addEventListener("click", function () {
    let current = localStorage.getItem("theme")

    if (!current){
        const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        current = systemIsDark ? "dark" : "light";
    } 

    const next = current === "light" ? "dark" : "light";
    localStorage.setItem("theme",next);
    document.documentElement.dataset.theme = next;
})