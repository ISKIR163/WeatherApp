// Получаем ссылки на элементы DOM по их идентификаторам
var input = document.getElementById("search__input");
var loupe = document.getElementById("loupe");
var cross = document.getElementById("cross");

var isInputFocused = false;
function loupeORcross() {
  var currentText = input.value;
  var hasText = currentText.length > 0;
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

// Функция debounce ограничивает частоту вызовов переданной функции.
function debounce(fn, delay) {
  var timer;
  return function () {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

//  Основная экспортируемая функция, которая инициализирует поведение.
export function chichi() {
  cross.style.color = "var(--search-btn-cross)";

  // Добавляем обработчики событий фокуса и потери фокуса (ОДИН РАЗ)
  input.addEventListener("focus", onInputFocus);
  input.addEventListener("blur", onInputBlur);

  // Вызываем функцию обновления иконок, чтобы сразу установить правильное состояние
  loupeORcross();

  // Создаём дебаунс-функцию для логирования значения поля ввода
  var debouncedLog = debounce(function (value) {
    console.log(value);
  }, 1500);

  // Добавляем обработчик события ввода текста
  input.addEventListener("input", function () {
    // Обновляем иконки при каждом вводе
    loupeORcross();
    // Вызываем дебаунс-функцию с текущим значением поля
    debouncedLog(input.value);
  });

  // Добавляем обработчик клика на крестик для очистки поля
  cross.addEventListener("click", function () {
    // Сначала обновляем иконки (на случай, если они не синхронизированы)
    loupeORcross();
    // Очищаем поле ввода
    input.value = "";
    // После очистки снова обновляем иконки, чтобы лупа появилась, а крестик исчез
    loupeORcross();
  });
}

export default chichi;
