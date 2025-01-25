import "./styles.css";
import {renderHomepage} from "./homepage";
import {renderMenuPage} from "./menupage";
import {renderAboutPage} from "./aboutpage";

const card = document.getElementById("content-card");
const homeButton = document.getElementById("nav-home");
const menuButton = document.getElementById("nav-menu");
const aboutButton = document.getElementById("nav-about");

window.addEventListener("load", () => {
    renderHomepage();
    homeButton.classList.add("underline");
});

homeButton.addEventListener("click", (e) => {
        card.classList.remove("home-page", "menu-page", "about-page", "contact-page");
        underlineNav();
        e.target.classList.add("underline");
        clearCard();
        renderHomepage();
});

menuButton.addEventListener("click", (e) => {
    card.classList.remove("home-page", "menu-page", "about-page", "contact-page");
    underlineNav();
    e.target.classList.add("underline");
    clearCard();
    renderMenuPage();
});

aboutButton.addEventListener("click", (e) => {
    card.classList.remove("home-page", "menu-page", "about-page", "contact-page");
    underlineNav();
    e.target.classList.add("underline");
    clearCard();
    renderAboutPage();
});

const clearCard = () => {
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    };
};

const underlineNav = () => {
    const navButtons = Array.from(document.getElementsByClassName("nav"));
    navButtons.forEach(button => {
        button.classList.remove("underline");
    });
};