import { initSearch } from "./scripts/search.js";
import { renderCardsMain } from "./scripts/main.js";
import { renderCardsCarouselHour } from "./scripts/main.js";
import { renderCardsCarouselDay } from "./scripts/main.js";

initSearch();
renderCardsMain();
renderCardsCarouselHour();
renderCardsCarouselDay();

const btn1 = document.getElementById("btnHour");
const btn2 = document.getElementById("btnDay");
const carH = document.getElementById("carouselCardsH");
const carD = document.getElementById("carouselCardsD");

btn1.addEventListener("click", function () {
  btn1.classList.add("interval__switch-btn--active");
  btn2.classList.remove("interval__switch-btn--active");
  carD.style.display = "none";
  carH.style.display = "flex";
});

btn2.addEventListener("click", function () {
  btn2.classList.add("interval__switch-btn--active");
  btn1.classList.remove("interval__switch-btn--active");
  carD.style.display = "flex";
  carH.style.display = "none";
});
