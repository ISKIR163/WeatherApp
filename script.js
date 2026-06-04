const input = document.getElementById("input");

input.addEventListener("input", function (event) {
  const currenQuerry = event.target.value;
  console.log(currenQuerry);
});
