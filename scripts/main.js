// Импорт данных для генерации основных карточек
import { cardsData, directionAngles } from "./data.js";

// Создаем константы-шаблоны с помощью которых будем находить значения (HH:MM и H:MM) в (cards.js) для формирования тега <time> там где он нужен
const pattern1 = /^\d{2}:\d{2}$/;
const pattern2 = /^\d{1}:\d{2}$/;
const pattern3 = /^\d+%$/;

// Проходим по массиву объектов cardsData в (data.js)
export function renderCardsMain() {
  const container = document.getElementById("weatherCards");
  cardsData.forEach((card) => {
    // Проверяем требуется ли повернуть изображение в карточке по направлению ветра
    const directionKey = card.text2 ? `${card.text1}${card.text2}` : card.text1;
    const angle = directionAngles[directionKey] ?? 0;

    // Если в данных для заполнения есть время (card.value) согласно шаблонам (pattern1-2) - оборачиваем в семантический тег <time>. Добавляем padStart если card.value записан в формате H:HH
    let tagTimeOrSpan1 = "";
    if (pattern1.test(card.value) || pattern2.test(card.value)) {
      tagTimeOrSpan1 = `<time class="cards__item-value" datetime="${card.value.padStart(5, "0")}">${card.value}</time>`;
    } else {
      tagTimeOrSpan1 = `<span class="cards__item-value">${card.value}</span>`;
    }

    // Проверяем нужен ли градиент прогресс бара
    let progressBarStyle = "";
    if (card.gradient) {
      progressBarStyle =
        "background: radial-gradient(50% 9453.13% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%);";
    }

    // Создаем переменную содержащую первые два символа из card.value, для позиционарования маркера прогресса
    let progressBarValue = null;
    if (card.progressBar != null) {
      progressBarValue = card.value.slice(0, 2);
    }

    // Проверяем не выходят ли значения card.progressBar за диапазон (например -1000 или +1000) и корректируем крайнее положения маркера в крайних точках чтобы он не обрезался
    let max = 97;
    let min = 3;
    if (progressBarValue <= 3 && progressBarValue != null) {
      progressBarValue = min;
    } else if (progressBarValue >= 97 && progressBarValue != null) {
      progressBarValue = max;
    }

    // Проверяем нужен ли прогресс бар и верстаем его вместе с маской пустой области вокруг белого маркера
    const progressBarNotNull = progressBarValue
      ? `<div class="custom-progress" style="${progressBarStyle};
          mask-image: radial-gradient(
            circle at ${progressBarValue}%,
            black 4px,
            transparent 4.5%,
            transparent 6%,
            black 6px);"
          );
          -webkit-mask-image: radial-gradient(
            circle at ${progressBarValue}%,
            black 4px,
            transparent 4.5%,
            transparent 6%,
            black 6px);"
          );>
          <div class="marker" style="left: ${progressBarValue}%;"></div>
        </div>`
      : "";

    // Проверяем какие данные выводить после прогресс бара (или того что идет вместо него) и формируем их
    const text1NotNull = card.text1 ? `${card.text1}` : "";
    const text2NotNull = card.text2 ? `${card.text2}` : "";
    // const textMinNotNull = card.textMin ? `${card.textMin}` : "";
    // const textMaxNotNull = card.textMax ? `${card.textMax}` : "";

    // Если в данных для заполнения есть время (card.text2) согласно шаблонам (pattern1-2) - оборачиваем в семантический тег <time>. Добавляем padStart если card.text2 записан в формате H:HH
    let tagTimeOrSpan2 = "";
    if (pattern1.test(card.text2) || pattern2.test(card.text2)) {
      tagTimeOrSpan2 = `<time class="cards__item-descriptions" datetime="${card.text2.padStart(5, "0")}">${text1NotNull}${text2NotNull.padStart(5, "0")}</time>`;
    } else if (pattern3.test(card.text1) && pattern3.test(card.text2)) {
      tagTimeOrSpan2 = `<div class="cards__item-minMax"> <span class="cards__item-descriptions">${text1NotNull}</span>
      <span class="cards__item-descriptions">${text2NotNull}</span>
      </div>`;
    } else {
      tagTimeOrSpan2 = `<span class="cards__item-descriptions">${text1NotNull}${text2NotNull}</span>`;
    }

    // Верстаем карточки

    const cardHTML = `
    <li class="cards__item">
      <div class="cards__item-container">
        <h3 class="cards__item-title">${card.title}</h3>
        <img class="cards__item-icon" style="transform: rotate(${angle}deg)" src="${card.icon}">
        ${tagTimeOrSpan1}
      </div>
      <div class="cards__item-bar">${progressBarNotNull}
        ${tagTimeOrSpan2}
      </div>
    </li>
    `;

    // Команда вставки сгенерированных строк в HTML документ
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Функция преобразования стандартной даты получаемой с сервера в нужный по макету (используется в function renderCardsCarouselDay())
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

// Импорт данных для генерации карточек в карусели
import { carouselDataHour, carouselDataDay } from "./data.js";

// Проходим по массиву объектов carouselDataHour в (data.js)
export function renderCardsCarouselHour() {
  const container = document.getElementById("carouselCardsH");
  carouselDataHour.forEach((card) => {
    // Верстаем карточки в карусели
    const cardHTML = `
<li class="carousel__item">
  <time class="carousel__item-datetime" datetime="${card.time}">${card.time}</time> 
  <img class="carousel__item-img" src="./images/weather-conditions/${card.condition}.png" width="32" height="32" alt="Облачно">
  <span class="carousel__item-degress">${card.temperature_celsius}°</span>
</li>
`;
    // Команда вставки сгенерированных строк в HTML документ
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Проходим по массиву объектов carouselDataDay в (data.js)
export function renderCardsCarouselDay() {
  const container = document.getElementById("carouselCardsD");
  carouselDataDay.forEach((card) => {
    const dateСhange = formatDate(card.date);
    // Верстаем карточки в карусели
    const cardHTML = `
<li class="carousel__item">
  <time class="carousel__item-datetime" datetime="${card.date}">${dateСhange}</time> 
  <img class="carousel__item-img" src="./images/weather-conditions/${card.condition}.png" width="32" height="32" alt="Облачно">
  <span class="carousel__item-degress">от ${card.day_temperature}° до ${card.night_temperature}°</span>
</li>
`;
    // Команда вставки сгенерированных строк в HTML документ
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}
