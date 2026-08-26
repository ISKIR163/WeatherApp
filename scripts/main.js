import { cardsData } from "./data.js";
import { createCardHTML } from "./createCardHTML.js";

export function renderCardsMain() {
  const container = document.getElementById("weatherCards");

  cardsData.forEach((card) => {
    container.insertAdjacentHTML("beforeend", createCardHTML(card));
  });
}
