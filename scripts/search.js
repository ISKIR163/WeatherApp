// Получаем ссылки на элементы DOM по их идентификаторам
const input = document.getElementById("searchInput");
const loupe = document.getElementById("loupe");
const cross = document.getElementById("cross");

// Выбор видимости между лупой и крестиком
let isInputFocused = false;
function loupeORcross() {
  const currentText = input.value;
  const hasText = currentText.length > 0;
  if (hasText) {
    loupe.style.display = "none";
    cross.style.display = "block";
  } else {
    if (isInputFocused) {
      loupe.style.display = "none";
      cross.style.display = "block";
    } else {
      loupe.style.display = "block";
      cross.style.display = "none";
    }
  }
}

// Обработчик получения фокуса
function onInputFocus() {
  isInputFocused = true;
  loupeORcross();
}

//  Обработчик потери фокуса
function onInputBlur() {
  isInputFocused = false;
  loupeORcross();
}

// Функция debounce ограничивает частоту вызовов переданной функции в консоль
function debounce(fn, delay) {
  let timer;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

//  Основная экспортируемая функция, которая инициализирует поведение строки поиска
export function initSearch() {
  cross.style.color = "var(--search-btn-cross)";

  // Добавляем обработчики событий фокуса и потери фокуса (ОДИН РАЗ)
  input.addEventListener("focus", onInputFocus);
  input.addEventListener("blur", onInputBlur);

  // Вызываем функцию обновления иконок, чтобы сразу установить правильное состояние
  // loupeORcross();

  // Создаём дебаунс-функцию для логирования значения поля ввода
  const debouncedLog = debounce(function (value) {
    console.log(value);
  }, 500);

  // Добавляем обработчик события ввода текста
  input.addEventListener("input", function () {
    // Вызываем дебаунс-функцию с текущим значением поля
    debouncedLog(input.value);
  });

  // Добавляем обработчик клика на крестик для очистки поля
  cross.addEventListener("click", function () {
    // Очищаем поле ввода
    input.value = "";
    // После очистки снова обновляем иконки, чтобы лупа появилась, а крестик исчез
    loupeORcross();
  });
}
