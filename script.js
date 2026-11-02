import { randomColorsBack } from "./Resources/Modules/ChangeColor.js";

const aboutMe = document.getElementById("titleRed");
const tabButtons = document.querySelectorAll(".tabButton");
const tabSections = document.querySelectorAll(".tabSection");
const title = "Biz3l Portfolio Site";
let randomColorsInterval;
let titlesInterval;

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.tabTarget;
        const targetSection = document.getElementById(targetId);

        tabButtons.forEach((tabButton) => {
            tabButton.classList.remove("active");
            tabButton.setAttribute("aria-selected", "false");
        });
        tabSections.forEach((section) => section.classList.remove("active"));

        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
        targetSection.classList.add("active");
    });
});

if (aboutMe) {
    aboutMe.addEventListener("mouseenter", () => {
        document.title = "An EASTER EGG :))";
        randomColorsInterval = setInterval(() => {
            randomColorsBack(aboutMe);
            aboutMe.style.transition = "background-color 0.3s";
        }, 375);
    });

    aboutMe.addEventListener("mouseleave", () => {
        clearInterval(randomColorsInterval);
        document.title = title;
        aboutMe.style.backgroundColor = "";
    });
}


document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        document.title = title;
        clearInterval(titlesInterval);
    } else {
        const phrases = ["Pleaseee return :(", "I am heereeee", "Hellooooo?", "Hey, did you leave me?!"];
        titlesInterval = setInterval(() => {
            document.title = phrases[Math.floor(Math.random() * phrases.length)];
        }, 1500);
    }
});