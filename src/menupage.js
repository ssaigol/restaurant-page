import "./menupage.css";

export const renderMenuPage = function () {
    const flavors = [
        "Vanilla",
        "Chocolate",
        "Strawberry",
        "Mint Chocolate Chip",
        "Cookies and Cream",
        "Rocky Road",
        "Butter Pecan",
        "Coffee",
        "Chocolate Chip Cookie Dough",
        "Pistachio",
        "Neapolitan",
        "Cotton Candy",
        "Mango",
        "Peach",
        "Pumpkin",
        "Birthday Cake",
        "Cookie Dough",
        "Salted Caramel",
        "Chocolate Fudge Brownie",
        "Tiramisu"
      ];
      
    const toppingsArr = [
        "Chocolate Chips",
        "Sprinkles",
        "Chopped Nuts",
        "Hot Fudge",
        "Caramel Sauce",
        "Marshmallow Fluff",
        "Crushed Oreos",
        "Gummy Bears",
        "Cookie Crumbles",
        "Whipped Cream",
        "Cherries",
        "Brownie Pieces",
        "Peanut Butter Cups",
        "M&Ms",
        "Reese's Pieces",
        "Mini Chocolate Bars",
        "Toffee Bits",
        "Coconut Flakes",
        "Granola",
        "Fruit (Banana, Strawberry, etc.)",
        "Mint Leaves",
        "Candy Corn",
        "Peach Slices",
        "Pineapple Chunks",
        "Fruity Pebbles",
        "Bacon Bits",
        "Cinnamon Sugar",
        "Shaved Chocolate"
      ];
    //Query content card and add class for menu page
    const contentCard = document.getElementById("content-card");
    contentCard.classList.add("menu-page");
    contentCard.style.visibility = "visible";
    //Create header text
    const headerText = document.createElement("h1");
    headerText.textContent = "Flavors";
    //Create container div
    const container = document.createElement("div");
    container.id = "container";
    //Create left column div
    const flavorsLeft = document.createElement("div");
    flavorsLeft.id = "flavors-left";
    //Create left list
    const leftList = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
        const flavor = document.createElement("li");
        flavor.textContent = flavors[i];
        leftList.append(flavor);
    };
    //Append left ul list to left container div
    flavorsLeft.append(leftList);
    //Create right column flavors div
    const flavorsRight = document.createElement("div");
    flavorsRight.id = "flavors-right";
    //Create right flavors list
    const rightList = document.createElement("ul");
    for (let i = 10; i < 20; i++) {
        const flavor = document.createElement("li");
        flavor.textContent = flavors[i];
        rightList.append(flavor);
    }
    //Append right ul list to right container div
    flavorsRight.append(rightList);
    //Create toppings div
    const toppings = document.createElement("div");
    toppings.id = "toppings";
    //Create toppings header
    const toppingsHeader = document.createElement("p");
    toppingsHeader.textContent = "Toppings";
    //Create toppings content
    const toppingsContent = document.createElement("div");
    toppingsContent.id = "toppings-content";
    for (let i = 0; i < 28; i++) {
        const topping = document.createElement("div");
        topping.textContent = toppingsArr[i];
        toppingsContent.append(topping);
    };
    //Append toppings header and toppings content to toppings
    toppings.append(toppingsHeader, toppingsContent);
    //Append left list, right list, and toppings to container div
    container.append(flavorsLeft, flavorsRight, toppings);
    //Append header & container to content card
    contentCard.append(headerText, container);
}