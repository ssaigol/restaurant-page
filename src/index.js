import "./styles.css";
import {renderHomepage} from "./homepage";

const homeButton = document.getElementById("nav-home");
const card = document.getElementById("content-card");
homeButton.addEventListener("click", () => {
    if (checkCurrentPage()) {
        clearCard();
        renderHomepage();
    };

})


const checkCurrentPage = () => {
    if (!card.classList.contains("home-page") && !card.classList.contains("menu-page") && !card.classList.contains("about-page") && !card.classList.contains("contact-page")) {
        return true;
    } else return false;
};

const clearCard = () => {
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    };
};


//Script that underlines nav button when that page is active