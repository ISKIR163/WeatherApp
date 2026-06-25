import cardsData from "./data/cards.js";

export function gaga() {
  const container = document.getElementById("weatherCards");
  cardsData.forEach((card) => {
    let progressBarStyle = "";
    if (card.gradient) {
      progressBarStyle =
        "background: radial-gradient(50% 9453.13% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, #DADADA 100%, rgba(218, 218, 218, 0.4) 100%);";
    }
    const progressBarNotNull = card.progressBar
      ? `<div class="custom-progress" style="${progressBarStyle}">
         <div class="marker" style="left: ${card.progressBar}%;"></div>
       </div>`
      : "";
    const text1NotNull = card.text1 ? `${card.text1}` : "";
    const text2NotNull = card.text2 ? `${card.text2}` : "";
    const textMinNotNull = card.textMin ? `${card.textMin}` : "";
    const textMaxNotNull = card.textMax ? `${card.textMax}` : "";
    const cardHTML = `
<li class="cards__item">
  <h3 class="cards__item-title">${card.title}</h3>
  <img class="cards__item-icon" src="${card.icon}">
   <span class="cards__item-value">${card.value}</span>
  <div class="cards__item-bar">${progressBarNotNull}
    <span class="cards__item-descriptions">${text1NotNull}${text2NotNull}</span>
    <div class="two-text">
      <span> ${textMinNotNull}</span>
      <span> ${textMaxNotNull}</span>
    </div>
  </div>
</li>
`;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}
export default gaga;
