const container = document.getElementById("weatherCards");

weatherData.forEach((card) => {
  const imgNotNull = card.progressBar
    ? `<img src="${card.progressBar}" alt="">`
    : "";
  const text1NotNull = card.text1 ? `${card.text1}` : "";
  const text2NotNull = card.text2 ? `${card.text2}` : "";
  const textMinNotNull = card.textMin ? `${card.textMin}` : "";
  const textMaxNotNull = card.textMax ? `${card.textMax}` : "";
  const cardHTML = `
<li class="cards__item">
  <h2 class="cards__item-title">${card.title}</h2>
  <img class="cards__item-icon" src="${card.icon}">
  <span class="cards__item-value">${card.value}</span>
  <div class="cards__item-bar">${imgNotNull}
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
