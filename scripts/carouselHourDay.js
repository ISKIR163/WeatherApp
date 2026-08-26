import { carouselDataHour, carouselDataDay } from "./data.js";

export function carousel() {
  renderCardsCarouselHour();
  renderCardsCarouselDay();
  initCarouselSwitch();
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сен.",
    "окт.",
    "ноя.",
    "дек.",
  ];
  const dayOfWeek = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  return `${dayOfWeek}, ${day} ${month}`;
}

function renderCardsCarouselHour() {
  const container = document.getElementById("carouselCardsH");

  carouselDataHour.forEach((card) => {
    const cardHTML = `
      <li class="carousel__item">
        <time class="carousel__item-datetime" datetime="${card.time}">${card.time}</time>
        <img class="carousel__item-img" src="./images/weather-conditions/${card.condition}.png" width="32" height="32" alt="Облачно">
        <span class="carousel__item-degress">${card.temperature_celsius}°</span>
      </li>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function renderCardsCarouselDay() {
  const container = document.getElementById("carouselCardsD");

  carouselDataDay.forEach((card) => {
    const formattedDate = formatDate(card.date);
    const cardHTML = `
      <li class="carousel__item">
        <time class="carousel__item-datetime" datetime="${card.date}">${formattedDate}</time>
        <img class="carousel__item-img" src="./images/weather-conditions/${card.condition}.png" width="32" height="32" alt="Облачно">
        <span class="carousel__item-degress">от ${card.day_temperature}° до ${card.night_temperature}°</span>
      </li>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function initCarouselSwitch() {
  const btnHour = document.getElementById("btnHour");
  const btnDay = document.getElementById("btnDay");
  const carouselHour = document.getElementById("carouselCardsH");
  const carouselDay = document.getElementById("carouselCardsD");

  btnHour.addEventListener("click", function () {
    btnHour.classList.add("interval__switch-btn--active");
    btnDay.classList.remove("interval__switch-btn--active");
    carouselDay.classList.add("carousel__cards--hidden");
    carouselHour.classList.remove("carousel__cards--hidden");
  });

  btnDay.addEventListener("click", function () {
    btnDay.classList.add("interval__switch-btn--active");
    btnHour.classList.remove("interval__switch-btn--active");
    carouselHour.classList.add("carousel__cards--hidden");
    carouselDay.classList.remove("carousel__cards--hidden");
  });
}
