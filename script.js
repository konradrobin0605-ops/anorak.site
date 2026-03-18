const video = document.getElementById("bg-video");
const soundToggle = document.getElementById("sound-toggle");
const cursor = document.querySelector(".cursor");

let soundEnabled = false;

soundToggle.addEventListener("click", () => {
  if (!soundEnabled) {
    video.muted = false;
    video.volume = 0.35;
    soundToggle.textContent = "Video Sound: On";
    soundEnabled = true;
  } else {
    video.muted = true;
    soundToggle.textContent = "Video Sound: Off";
    soundEnabled = false;
  }
});

/* Custom Cursor */
window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

/* Cursor grows over buttons/links */
const hoverTargets = document.querySelectorAll("a, button, .project-card");

hoverTargets.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});