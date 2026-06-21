import { randomColorsBack } from "./Resources/Modules/ChangeColor.js";

const aboutMe = document.getElementById("titleRed");
const title = "Biz3l Portfolio Site";
let randomColorsInterval;

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


document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "visible") {
        document.title = title
    } else {
        document.title = "Pleaseee return :("
    };
});