const beanCount = 10; // Number of beans
const body = document.body;

// Remove existing beans if any
document.querySelectorAll(".coffee-bean").forEach((e) => e.remove());

for (let i = 0; i < beanCount; i++) {
  const img = document.createElement("img");
  img.src = "images/coffee-bean.png";
  img.className = "coffee-bean";
  img.alt = "Coffee Bean";

  // Random horizontal position (5% to 90%)
  img.style.left = Math.random() * 85 + 5 + "%";
  // Random direction: up or down
  const isDown = Math.random() < 0.5;
  if (isDown) {
    img.classList.add("down");
    img.style.top = -10 - Math.random() * 10 + "%"; // Start above the screen
  } else {
    img.style.top = 105 + Math.random() * 15 + "%"; // Start below the screen
  }
  // Random animation duration (6s to 14s)
  img.style.animationDuration = 6 + Math.random() * 8 + "s";
  // Random animation delay (0s to 8s)
  img.style.animationDelay = Math.random() * 8 + "s";
  // Random size (30px to 60px)
  const size = 30 + Math.random() * 30;
  img.style.width = size + "px";

  body.appendChild(img);
}
