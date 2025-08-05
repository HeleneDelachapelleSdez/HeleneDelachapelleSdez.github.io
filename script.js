const palette = [["#6699cc"], ["#02394a"], ["#ff4b3e"], ["#fcd3de"], ["#ffe66d"], ["#d00000"]];
const randomPalette = palette[Math.floor(Math.random() * palette.length)];
let bgColor = randomPalette[0];

const main = document.getElementById("color-div").style;
main.backgroundColor = bgColor;

function toggleColorDiv() {
  const colorDiv = document.getElementById("color-div");
  const modalSeen = localStorage.getItem("modalSeen");

  if (modalSeen) {
    colorDiv.style.display = "none";
  } else {
    colorDiv.style.display = "flex";
    localStorage.setItem("modalSeen", true);
  }

  setTimeout(() => {
    colorDiv.classList.add("slide-up-out");

    // After animation, fully hide the element
    setTimeout(() => {
      colorDiv.style.display = "none";
      colorDiv.classList.remove("slide-up-out"); // Reset for future use
    }, 500);
  }, 5000);
}

toggleColorDiv();
