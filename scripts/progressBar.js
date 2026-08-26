export function progressBar(barData) {
  let progressBarValue = null;
  if (barData.progress != null) {
    progressBarValue = barData.value.slice(0, 2);
  }

  let max = 97;
  let min = 3;
  if (progressBarValue <= 3 && progressBarValue != null) {
    progressBarValue = min;
  } else if (progressBarValue >= 97 && progressBarValue != null) {
    progressBarValue = max;
  }

  const gradientClass = barData.gradient ? " custom-progress--gradient" : "";

  const progressBarNotNull = progressBarValue
    ? `<div class="custom-progress-wrap" style="--marker-pos: ${progressBarValue}%;">
         <div class="custom-progress${gradientClass}"></div>
         <svg class="marker" viewBox="0 0 6 6" aria-hidden="true" focusable="false">
           <circle cx="3" cy="3" r="3" fill="#fff"></circle>
         </svg>
      </div>`
    : "";

  return progressBarNotNull;
}
