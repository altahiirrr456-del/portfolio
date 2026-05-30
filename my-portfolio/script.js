const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

const hoverItems = document.querySelectorAll("a, button, h1, h3");

hoverItems.forEach(el => {
  el.addEventListener("mouseenter", () => {
    ring.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  el.addEventListener("mouseleave", () => {
    ring.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
