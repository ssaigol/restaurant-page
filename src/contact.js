import "./contact.css";

export const renderContactForm = function () {
    const dialog = document.createElement("dialog");
    dialog.id = "contact";
    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    //Name input
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.id = "name";
    nameLabel.append(nameInput);
    //Email input
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.id = "email";
    emailLabel.append(emailInput);
    //Phone input
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone: ";
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.id = "phone";
    phoneLabel.append(phoneInput);
    //Message input
    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message: ";
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("rows", "5");
    messageInput.id = "message";
    messageLabel.append(messageInput);
    //Submit button input
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.setAttribute("type", "submit");
    //Append elements to form
    form.append(nameLabel, emailLabel, phoneLabel, messageLabel, submit)
    //Append form to dialog
    dialog.append(form);

    submit.addEventListener("click", () => dialog.close());
}