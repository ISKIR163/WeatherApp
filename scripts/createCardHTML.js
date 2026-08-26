import { progressBar } from "./progressBar.js";
import { windRotation } from "./windRotation.js";

const TIME_PATTERN = /^\d{1,2}:\d{2}$/;

export function createCardHTML(card) {
  const angle = windRotation(card);

  const valueHTML = createValueHTML(card.value);

  const progressBarHTML = progressBar(card);

  const descriptionHTML = createDescriptionHTML(card);

  const cardHTML = `
    <li class="cards__item">
      <div class="cards__item-container">
        <h3 class="cards__item-title">${card.title}</h3>
        <img class="cards__item-icon" style="--icon-rotate: ${angle}deg" src="${card.icon}">
        ${valueHTML}
      </div>
      <div class="cards__item-bar">
        ${progressBarHTML}
        ${descriptionHTML}
      </div>
    </li>
  `;

  return cardHTML;
}

function createValueHTML(value) {
  const isTimeValue = TIME_PATTERN.test(value);

  if (isTimeValue === true) {
    const datetimeValue = value.padStart(5, "0");

    const timeHTML = `
      <time class="cards__item-value" datetime="${datetimeValue}">${value}</time>
    `;

    return timeHTML;
  }

  const spanHTML = `
    <span class="cards__item-value">${value}</span>
  `;

  return spanHTML;
}

function createDescriptionHTML(card) {
  const cardType = card.type;

  if (cardType === "range") {
    const rangeHTML = `
      <div class="cards__item-minMax">
        <span class="cards__item-descriptions">${card.range.min}</span>
        <span class="cards__item-descriptions">${card.range.max}</span>
      </div>
    `;

    return rangeHTML;
  }

  if (cardType === "status") {
    const statusHTML = `
      <span class="cards__item-descriptions">${card.caption}</span>
    `;

    return statusHTML;
  }

  if (cardType === "time") {
    const timeDescriptionHTML = `
      <time class="cards__item-descriptions" datetime="${card.extraTime}">${card.caption}${card.extraTime}</time>
    `;

    return timeDescriptionHTML;
  }

  if (cardType === "wind") {
    const windHTML = `
      <span class="cards__item-descriptions">${card.direction}</span>
    `;

    return windHTML;
  }

  return "";
}
