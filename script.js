const slider = document.querySelector(".slider");
const handle = document.querySelector(".handle");
let isDragging = false;

handle.addEventListener("mousedown", () => {
  isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  const containerRect = slider.parentElement.getBoundingClientRect();
  let offsetX = event.clientX - containerRect.left;

  if (offsetX < 0) offsetX = 0;
  if (offsetX > containerRect.width) offsetX = containerRect.width;

  slider.style.width = `${offsetX}px`;
  handle.style.left = `${offsetX}px`;
});
