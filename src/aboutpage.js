import "./aboutpage.css";

export const renderAboutPage = function () {
    const p1Text = "Welcome to The Ice Cream Emporium, where every scoop is an experience! Located in the heart of town, we've been serving up joy, one cone at a time, for over a decade. Our mission is simple: to create the most delicious, handcrafted ice cream using only the finest ingredients. Whether you're indulging in a classic favorite or trying one of our innovative seasonal flavors, you're in for a treat like no other.";
    const p2Text = "We believe that ice cream is more than just a dessert - it's a way to bring people together, celebrate special moments, and add a little sweetness to your day. That's why we pride ourselves on offering a wide variety of flavors, from creamy classics like vanilla and chocolate to unique combinations that push the boundaries of taste."
    //Query content card and add class for about page
    const contentCard = document.getElementById("content-card");
    contentCard.classList.add("about-page");
    //Create header text
    const headerText = document.createElement("h1");
    headerText.textContent = "About Us!";
    //Create contianer div
    const containerDiv = document.createElement("div");
    //Create 1st p
    const p1 = document.createElement("p");
    p1.textContent = p1Text;
    //Create 2nd p
    const p2 = document.createElement("p");
    p2.textContent = p2Text;
    //Create why us list
    const whyUsList = document.createElement("ul");
    const list1 = document.createElement("li");
    const list1Bold = document.createElement("strong");
    list1Bold.textContent = "Fresh Ingredients:";
    list1.append(list1Bold);
    list1.append(" Only the best, locally-sourced produce and dairy");
    const list2 = document.createElement("li");
    const list2Bold = document.createElement("strong");
    list2Bold.textContent = "Handcrafted Flavors:";
    list2.append(list2Bold);
    list2.append(" Each batch is made with love and attention to detail");
    const list3 = document.createElement("li");
    const list3Bold = document.createElement("strong");
    list3Bold.textContent = "Family-Friendly Atmosphere:";
    list3.append(list3Bold);
    list3.append(" A welcoming space for ice cream lovers of all ages");
    const list4 = document.createElement("li");
    const list4Bold = document.createElement("strong");
    list4Bold.textContent = "Unbeatable Customer Service:";
    list4.append(list4Bold);
    list4.append(" We're here to make every visit special and memorable");
    whyUsList.append(list1, list2, list3, list4);
    //Create 3rd p
    const p3 = document.createElement("p");
    p3.textContent = "Come in today and discover why we're more than just an ice cream shop - we're a local institution at The Ice Cream Emporium!"
    //Append text to container div
    containerDiv.append(p1, p2, whyUsList, p3);
    //Append header & container div to content card
    contentCard.append(headerText, containerDiv);
}