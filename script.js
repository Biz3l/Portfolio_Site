const aboutMe = document.getElementById("titleRed");

aboutMe.addEventListener("mouseenter", () => {
    document.title = "An EASTER EGG :))";
    aboutMe.style.backgroundColor = "4DFF93";
    aboutMe.style.transition = "background-color 0.5s"
});

aboutMe.addEventListener("mouseleave", () => {
    document.title = "Biz3l Portfolio Site";
    aboutMe.style.backgroundColor = "";
});
