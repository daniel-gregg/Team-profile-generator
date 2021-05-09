const cardTemplates = require("./cardTemplates")
const cardsContainer = document.getElementById("cards-container")

//loop through answers to render each one using this command:
cardsContainer.insertAdjacentHTML("beforeend", cardTemplates.card(role, email, github))
cardsContainer.insertAdjacentHTML("beforeend", cardTemplates.studentCard(email, school))