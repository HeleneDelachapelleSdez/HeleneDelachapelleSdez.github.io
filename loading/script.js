// $(document).ready(function () {
//   var colors = ["#6699cc", "#02394a", "#ff4b3e", "#fcd3de", "#ffe66d", "#d00000"];
//   var new_color = colors[Math.floor(Math.random() * colors.length)];
//   $("#color-div").css("background-color", new_color);
// });

window.onload = () => {
  const palette = [["#6699cc"], ["#02394a"], ["#ff4b3e"], ["#fcd3de"], ["#ffe66d"], ["#d00000"]];
  const randomPalette = palette[Math.floor(Math.random() * palette.length)];
  let bgColor = randomPalette[0];

  const main = document.getElementById("color-div").style;
  main.backgroundColor = bgColor;
};
