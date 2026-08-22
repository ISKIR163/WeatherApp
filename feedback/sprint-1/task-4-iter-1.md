# Задача 4. Итерация 1 ❌

| Ср. оценка  | Проходной балл | Статус         |
|:-----------:|:--------------:|:--------------:|
| ⭐ 3 | ⭐ 3.5 | 🛠️ На доработке |

## AlexCAP (Alexey) – ⭐ 3

### ПЛЮСЫ 👍

Привет, Илья! 👋

#### Хорошая работа, что мне понравилось: 💪🔥

1. Сделан вырез в ползунке согласно макету 👍
2. HTML разметка выполнена корректно 👍
3. Странциа адаптивна и имеет резиновую верстку.

### БАГИ 🐞

#### Есть несколько моментов, на которые стоит обратить внимание: ☝️❌

1) Инпуту нужно задать бордер утсановить цвет transparent, чтобы при фокусе вся старница не дергалась. Видео [https://skrinshoter.ru/vd1iYkOu4xd](https://skrinshoter.ru/vd1iYkOu4xd)
2) Подчеркивание в ссылках можно стилизовать свойствами.  Скрин [https://skrinshoter.ru/sd1uXeLxZyi](https://skrinshoter.ru/sd1uXeLxZyi)
```css
  text-underline-offset: 3px;   /* смещение подчеркивания */
  text-decoration-thickness: 1px; /* толщина, если нужно */
```
3) Присутствую небольшие смещения по макету. Скрин [https://skrinshoter.ru/sd1qgDxkPKm](https://skrinshoter.ru/sd1qgDxkPKm)
4) На брекйпоинте 375пх нижние карточки не меняю форму. Скрин [https://skrinshoter.ru/sd1feeBnyOW](https://skrinshoter.ru/sd1feeBnyOW)
5) На брекйпоинте 768пх нужно поправить стилсь у ссылки пунк 2
6) На брекйпоинте 1280пх мелкие расхождения. Скрин [https://skrinshoter.ru/sd10ohAnSUQ](https://skrinshoter.ru/sd10ohAnSUQ)

### РЕКОМЕНДАЦИИ 💡

#### Есть несколько моментов, которые можно улучшить: 🤔😏

1) Я хотел предложить переместить все изображения в одно место, например, в папку `images`
2) Предлагаю изучить новый тег `<template>`, позволяющий делать шаблоны для JS. [https://doka.guide/html/template/](https://doka.guide/html/template/)
По сути, 6 карточек однотипные, и можно сделать шаблон и вставлять в разметку через JS.

Использование тега `<template>` поможет избежать дублирования кода при создании повторяющихся элементов. Можешь определить шаблон один раз в HTML, а затем клонировать его с помощью JavaScript для создания нужного количества элементов. Это улучшает читаемость кода и делает его более поддерживаемым.

> #### Хорошего дебага, увидимся в следующих задачах! 🤝

----

## Kolbasa00 (Владислав) – ⭐ 3

### ПЛЮСЫ 👍

- **Семантика и доступность (a11y):** HTML-структура на высшем уровне. Ты использовал семантические теги ``<header>``, ``<main>``, ``<section>``, ``<time>``, что делает страницу понятной для поисковых систем и скринридеров. Использование `aria-label` для иконочных кнопок и `visually-hidden` для скрытых заголовков и меток — это отличная практика.
- **Следование БЭМ:** Методология БЭМ применена практически идеально. Классы вида `block__element--modifier` (например, `interval__switch-btn--active`) используются последовательно и правильно. Это делает CSS-код очень читаемым и масштабируемым.
- **Организация кода:** Проект грамотно разделен на модули.
    - **CSS:** Разделение стилей по компонентам (`cards.css`, `weather.css`) с помощью `@import` — это чистое и поддерживаемое решение.
    - **JavaScript:** Разделение логики на `search.js`, `main.js` и `data.js` — это прекрасный пример разделения ответственности. `index.js` выступает как точка входа, что очень правильно.
- **Адаптивность:** Использование `@media`-запросов для разных разрешений экрана (mobile, tablet, desktop) выполнено в соответствии с заданием.
- **Прогрессивное улучшение:** Наличие тега ``<noscript>`` и `debounce` в `search.js` показывает продуманный подход к пользовательскому опыту и производительности.

### БАГИ 🐞

1. **Генерация инлайн-стилей в JS:** В файле `main.js` ты генерируешь большое количество инлайн-стилей, особенно для `progress-bar`.JavaScript

// main.js
const progressBarNotNull = progressBarValue
? `<div class="custom-progress" style="${progressBarStyle};
mask-image: radial-gradient(...);
-webkit-mask-image: radial-gradient(...);">
`<div class="marker" style="left: ${progressBarValue}%;">``</div>`
`</div>``
: "";Это смешивает логику и представление, что затрудняет поддержку. Если потребуется изменить стиль прогресс-бара, придется лезть в JavaScript, а не в CSS.**Как исправить:** Динамические значения (такие как позиция маркера) лучше передавать через CSS Custom Properties (переменные).То же самое касается `mask-image` — его можно задать в CSS, а через JS передавать только динамическую позицию.
- *В `main.js`:*JavaScript

// Вместо style="left:..." используем style="--progress-percent: ${progressBarValue}%"
const progressBarNotNull = progressBarValue
? ``<div class="custom-progress" style="--progress-percent: ${progressBarValue}%;">`
`<div class="marker">``</div>`
`</div>``
: "";
- *В `cards.css`:*CSS

.marker {
position: absolute;
top: 50%;
left: var(--progress-percent, 0%); /* Используем переменную, с запасным значением 0% */
transform: translate(-50%, -50%);
/* ... */
}
2. **Прямая манипуляция стилями:** В `index.js` для переключения карусели используется прямое изменение `style.display`.JavaScript

// index.js
carD.style.display = "none";
carH.style.display = "flex";Это плохая практика, так как инлайн-стили имеют наивысший приоритет и их сложно переопределить в CSS. У тебя уже есть отличный класс-модификатор `.carousel__cards--hidden`.**Как исправить:** Управляй видимостью через классы.JavaScript

// index.js
btn1.addEventListener("click", function () {
btn1.classList.add("interval__switch-btn--active");
btn2.classList.remove("interval__switch-btn--active");
carD.classList.add("carousel__cards--hidden");
carH.classList.remove("carousel__cards--hidden");
});

btn2.addEventListener("click", function () {
// ... аналогично
});
- *В `carousel.css`:*CSS

.carousel__cards {
display: flex; /* Базовое состояние */
/* ... */
}

.carousel__cards--hidden {
display: none; /* Состояние, когда скрыт */
}
3. **Дублирование стилей в БЭМ-модификаторе:** В `carousel.css` класс `.interval__switch-btn--active` полностью дублирует стили `.interval__switch-btn`, а затем добавляет новые. Модификатор должен содержать только изменяющиеся или добавляемые стили.**Как исправить:**HTML

`<!-- В HTML кнопка должна иметь оба класса -->`
`<button class="interval__switch-btn interval__switch-btn--active">`...`</button>`CSS

/* carousel.css */
/* Базовый класс со всеми общими стилями */
.interval__switch-btn {
border: none;
background: none;
font-weight: 700;
color: var(--forecastBtnDef);
/* ... */
}

/* Модификатор только с изменениями */
.interval__switch-btn--active {
color: var(--basic);
position: relative;
}

.interval__switch-btn--active::after {
/* ... */
}

### РЕКОМЕНДАЦИИ 💡

1. **Рефакторинг `main.js`:** Функция `renderCardsMain` стала очень большой и сложной. Она отвечает за парсинг данных, вычисление углов, генерацию HTML для разных типов карточек. Ее можно и нужно разбить на несколько маленьких, чистых функций. Например:
    - `createCardHTML(card)` — основная функция, которая вызывает другие.
    - `createValueHTML(card)` — генерирует HTML для значения (с тегом ``<time>`` или без).
    - `createProgressBarHTML(card)` — генерирует HTML для прогресс-бара.
Это сделает код гораздо более читаемым и легким для отладки.
2. **Структура данных в `data.js`:** Структура объекта в `cardsData` не очень гибкая. Имена ключей `text1`, `text2` не несут смысловой нагрузки. Это заставляет писать сложную логику в `main.js` для их интерпретации (`if (pattern3.test(card.text1) && pattern3.test(card.text2))`).
Можно было бы улучшить структуру данных:JavaScript

// Было
{
title: "Влажность",
value: "75 %",
text1: "0%",
text2: "100%",
}
// Стало
{
title: "Влажность",
value: "75 %",
type: 'range', // Добавляем тип для рендера
range: { min: "0%", max: "100%" }
}Это упростит рендеринг: `if (card.type === 'range') { renderRange(card.range) }`.
3. **Использование ``<picture>`` для логотипа:** В `index.html` ты используешь два SVG для лого и переключаешь их через `display: none`. Для таких задач (art direction) семантически правильнее использовать тег ``<picture>``.HTML

`<a class="logo" href="index.html">`
`<picture>`
`<source media="(min-width: 1024px)" srcset="./sprites.svg#logoBig">` `<!-- Не сработает с SVG-спрайтом, но сработает с файлами -->`
`<img class="logo__img" src="./sprites.svg#logoSmall" alt="Логотип WeatherApp">`
`</picture>`
`</a>`

----

## vov (Владимир) – ⭐ 3

### ПЛЮСЫ 👍

Привет, Илья!

Хорошая работа.

- Логически верная разбивка на компоненты, полностью соответствует ТЗ.
- Семантически грамотная верстка.
- Фавикон.
- Правильное применение БЭМ-технологии.
- Работа динамическая прогресс-баров.

### БАГИ 🐞

Скриншоты:

- ![скрин 1](https://filestore.preax.ru/file?id=5yJoVcGuxcYY&w=1920&h=1080)
- ![скрин 2](https://filestore.preax.ru/file?id=sO-STIkdoFMw&w=1920&h=1080)
- ![скрин 3](https://filestore.preax.ru/file?id=rjJqmrx_wx09&w=1920&h=1080)
- ![скрин 4](https://filestore.preax.ru/file?id=U6Edxnwp7FDk&w=1920&h=1080)
- ![скрин 5](https://filestore.preax.ru/file?id=sl-vevh-sjSO&w=1920&h=1080)
- ![скрин 6](https://filestore.preax.ru/file?id=qmFeNCfmcod8&w=1920&h=1080)

- При ширине экрана 375px, 640px - 767px, 887px - 1023px в карточках слайдера при переключении на пятидневный прогноз наблюдается смещение и накладка контента .
- При ширине экрана 768px и 886px наблюдаются множественные не совпадения с макетом.

### РЕКОМЕНДАЦИИ 💡

- Убрать все несоответствия с макетом.
- Доработать стили карточек слайдера, ошибка в том что задана фиксированная ширина **min-width** поэтому карточка не меняет свой размер согласно контенту.
- На мой взгляд стоит доработать поле поиска,  крестик появляется при появлении в поле курсора, а мне кажется должен появляться при появлении в поле хотя бы одного символа, логично будет удаление чего-то написанного, а не пустого поля.
- В остальном, баги хоть и есть, но небольшие и легко поправимые, хорошая работа, так держать! 💪
