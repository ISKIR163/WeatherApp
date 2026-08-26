const form = document.getElementById("myForm");
const input = document.getElementById("searchInput");
const cross = document.getElementById("cross");

let isInputFocused = false;

function loupeORcross() {
  const hasText = input.value.length > 0;
  form.classList.toggle("search-form--clear", hasText || isInputFocused);
}

function onInputFocus() {
  isInputFocused = true;
  loupeORcross();
}

function onInputBlur() {
  isInputFocused = false;
  loupeORcross();
}

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

export function initSearch() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  input.addEventListener("focus", onInputFocus);
  input.addEventListener("blur", onInputBlur);

  const debouncedLog = debounce(function (value) {
    console.log(value);
  }, 500);

  input.addEventListener("input", function () {
    loupeORcross();
    debouncedLog(input.value);
  });

  cross.addEventListener("click", function () {
    input.value = "";
    loupeORcross();
  });
}
