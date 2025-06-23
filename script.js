// // second one
// document.addEventListener("DOMContentLoaded", () => {
//   const cursor = document.querySelector(".cursor");

//   let stuck = false;
//   let stuckCenter = { x: 0, y: 0 };
//   const STICK_DISTANCE = 80;

//   document.addEventListener("mousemove", (e) => {
//     const { clientX: x, clientY: y } = e;

//     // Always keep cursor centered on the mouse
//     cursor.style.transform = `translate(${x}px, ${y}px)`;

//     if (stuck) {
//       const dx = x - stuckCenter.x;
//       const dy = y - stuckCenter.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance > STICK_DISTANCE) {
//         stuck = false;
//         cursor.style.removeProperty("scale");
//         cursor.style.removeProperty("rotate");
//       } else {
//         const angle = Math.atan2(dy, dx) * (180 / Math.PI);
//         const stretchX = 1 + Math.min(Math.abs(dx) / 50, 0.6);
//         const stretchY = 1 + Math.min(Math.abs(dy) / 50, 0.6);
//         cursor.style.scale = `${stretchX} ${stretchY}`;
//         cursor.style.rotate = `${angle}deg`;
//       }
//     } else {
//       cursor.style.scale = `1 1`;
//       cursor.style.rotate = `0deg`;
//     }
//   });

//   document.addEventListener("mousedown", () => {
//     cursor.style.width = "45px";
//     cursor.style.height = "45px";
//   });

//   document.addEventListener("mouseup", () => {
//     cursor.style.width = "40px";
//     cursor.style.height = "40px";
//   });

//   document.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("mouseenter", (e) => {
//       const rect = e.target.getBoundingClientRect();
//       stuck = true;
//       stuckCenter = {
//         x: rect.left + rect.width / 2,
//         y: rect.top + rect.height / 2,
//       };
//     });

//     link.addEventListener("mouseleave", () => {
//       setTimeout(() => {
//         stuck = false;
//       }, 300);
//     });
//   });
// });

// first one
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.setProperty("--x", `${x}px`);
    cursor.style.setProperty("--y", `${y}px`);
  });
  // document.addEventListener("mousemove", (e) => {
  //   const { clientX: x, clientY: y } = e;
  //   // cursor.style.transform = `translate(${x - .cursor.offsetWidth / 2}px, ${y - .cursor.offsetHeight / 2}px)`;
  //   cursor.style.transform = `translate(${x}px, ${y}px)`;
  // });

  document.addEventListener("mousedown", () => {
    cursor.style.width = "45px";
    cursor.style.height = "45px";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
  });

  // Hover effect for <a> tags
  const addHoverListeners = () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("hovering");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovering");
      });
    });
  };

  addHoverListeners();
});
