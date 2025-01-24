import "./homepage.css";

export const renderHomepage = function () {
    //Query content card and add class for homepage
    const contentCard = document.getElementById("content-card");
    contentCard.classList.add("home-page");
    contentCard.style.visibility = "visible";
    //Create header text
    const headerText = document.createElement("h1");
    headerText.textContent = "Welcome to the Ice Cream Emporium!";
    //Create contianer div
    const containerDiv = document.createElement("div");
    //Create 1st p
    const p1 = document.createElement("p");
    p1.textContent = "Here at the I.C.E., we use only the freshest ingredients!";
    //Create ingredients list
    const ingredientsList = document.createElement("ul");
    const ingredients1 = document.createElement("li");
    ingredients1.textContent = "Locally sourced pasteurized milk";
    const ingredients2 = document.createElement("li");
    ingredients2.textContent = "Farm-fresh free range eggs";
    const ingredients3 = document.createElement("li");
    ingredients3.textContent = "Ethically sourced cane sugar";
    ingredientsList.append(ingredients1, ingredients2, ingredients3);
    //Create 2nd p
    const p2 = document.createElement("p");
    p2.textContent = "Come in today for your favorite scoop (or three!), in a cone or cup, with over 25 different toppings to choose from!";
    //Create 3rd p
    const p3 = document.createElement("p");
    p3.textContent = "Hand-packed pints available too! Just ask one of our friendly staff-members."
    //Append text to container div
    containerDiv.append(p1, ingredientsList, p2, p3);
    //Append header & container div to content card
    contentCard.append(headerText, containerDiv);
}