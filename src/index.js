import "./styles.css";
import {renderHomepage} from "./homepage";
import {renderMenuPage} from "./menupage";

const card = document.getElementById("content-card");
window.addEventListener("load", renderHomepage);

const homeButton = document.getElementById("nav-home");
homeButton.addEventListener("click", () => {
        card.classList.remove("home-page", "menu-page", "about-page", "contact-page");
        clearCard();
        renderHomepage();
        });

const menuButton = document.getElementById("nav-menu");
menuButton.addEventListener("click", () => {
    card.classList.remove("home-page", "menu-page", "about-page", "contact-page");
    clearCard();
    renderMenuPage();
    });

const clearCard = () => {
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    };
};


//Script that underlines nav button when that page is active