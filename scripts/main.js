import cardsData from "./data/cards.js";
import directionAngles from "./data/windDirection.js";

// Создаем константы-шаблоны с помощью которых будем находить значения (HH:MM и H:MM) в (cards.js) для формирования тега <time> там где он нужен
const pattern1 = /^\d{2}:\d{2}$/;
const pattern2 = /^\d{1}:\d{2}$/;

// Проходим по массиву объектов в (cards.js)
export function renderCards() {
  const container = document.getElementById("weatherCards");
  cardsData.forEach((card) => {
    // Проверяем требуется ли повернуть изображение в карточке по направлению ветра
    const directionKey = card.text2 ? `${card.text1}${card.text2}` : card.text1;
    const angle = directionAngles[directionKey] ?? 0;

    // Создаем переменную для использования в теге <time>, которая будет добавлять "ноль" в начало datetime если в данных для заполнения карточек (cards.js) время записанно в формате H:MM
    let zero1 = "";
    if (pattern2.test(card.value)) {
      zero1 = "0";
    }

    // Если в данных для заполнения карточек (cards.js) в ключе (value) значение (HH:MM или H:MM) - оборачиваем в семантический тег <time>
    let tagTimeOrSpan1 = "";
    if (pattern1.test(card.value) || pattern2.test(card.value)) {
      tagTimeOrSpan1 = `<time class="cards__item-value" datetime="${zero1}${card.value}">${card.value}</time>`;
    } else {
      tagTimeOrSpan1 = `<span class="cards__item-value">${card.value}</span>`;
    }

    // Проверяем нужен ли градиент прогресс бара
    let progressBarStyle = "";
    if (card.gradient) {
      progressBarStyle =
        "background: radial-gradient(50% 9453.13% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%);";
    }

    // Проверяем нужен ли прогресс бар и верстаем его вместе с маской пустой области вокруг белого маркера
    const progressBarNotNull = card.progressBar
      ? `<div class="custom-progress" style="${progressBarStyle};
          mask-image: radial-gradient(
            circle at ${card.progressBar}%,
            black 4px,
            transparent 4.5%,
            transparent 6%,
            black 6px);"
          );
          -webkit-mask-image: radial-gradient(
            circle at ${card.progressBar}%,
            black 4px,
            transparent 4.5%,
            transparent 6%,
            black 6px);"
          );>
          <div class="marker" style="left: ${card.progressBar}%;"></div>
        </div>`
      : "";

    // Проверяем какие данные выводить после прогресс бара (или того что идет вместо него) и формируем их
    const text1NotNull = card.text1 ? `${card.text1}` : "";
    const text2NotNull = card.text2 ? `${card.text2}` : "";
    const textMinNotNull = card.textMin ? `${card.textMin}` : "";
    const textMaxNotNull = card.textMax ? `${card.textMax}` : "";

    // Создаем переменную для использования в теге <time>, которая будет добавлять "ноль" в начало datetime если в данных для заполнения карточек (cards.js) время записанно в формате H:MM. Также "ноль" при необходимости добавится в текстовое содержимое тега <time>
    let zero2 = "";
    if (pattern2.test(card.text2)) {
      zero2 = "0";
    }

    // Если в данных для заполнения есть время (card.text2) согласно шаблону (pattern) - оборачиваем в семантический тег <time>
    let tagTimeOrSpan2 = "";
    if (pattern1.test(card.text2) || pattern2.test(card.text2)) {
      tagTimeOrSpan2 = `<time class="cards__item-descriptions" datetime="${zero2}${card.text2}">${text1NotNull}${zero2}${text2NotNull}</time>`;
    } else {
      tagTimeOrSpan2 = `<span class="cards__item-descriptions">${text1NotNull}${text2NotNull}</span>`;
    }

    // Верстаем карточки
    const cardHTML = `
<li class="cards__item">
  <h3 class="cards__item-title">${card.title}</h3>
  <img class="cards__item-icon" style="transform: rotate(${angle}deg)" src="${card.icon}">
  ${tagTimeOrSpan1}
  <div class="cards__item-bar">${progressBarNotNull}
    ${tagTimeOrSpan2}
    <div class="two-text">
      <span> ${textMinNotNull}</span>
      <span> ${textMaxNotNull}</span>
    </div>
  </div>
</li>
`;

    // Команда вставки сгенерированных строк в HTML документ
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Экспортируем. Используется в (index.js)
export default renderCards;
