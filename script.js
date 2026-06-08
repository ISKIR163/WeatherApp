const input = document.getElementById("input");
const loupe = document.getElementById("loupe");
const cross = document.getElementById("cross");

function loupeORcross() {
  const hasText = input.value.length > 0;
  loupe.style.display = hasText ? "none" : "block";
  cross.style.display = hasText ? "block" : "none";
  cross.style.color = "var(--search-btn-cross)";
}

input.addEventListener("input", function () {
  loupeORcross();
  console.log(input.value);
});

cross.addEventListener("click", function () {
  input.value = "";
  loupeORcross();
});
