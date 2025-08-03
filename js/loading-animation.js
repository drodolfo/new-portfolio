// Loading animation functionality
document.addEventListener("DOMContentLoaded", function () {
  const loadTextElement = document.querySelector(".load-text");
  const transitionLoader = document.querySelector(".transition-loader");

  if (loadTextElement && transitionLoader) {
    let start = 0;
    const end = 100;
    const duration = 1400; // Duration in milliseconds

    const stepTime = duration / end;
    const interval = setInterval(() => {
      start++;
      loadTextElement.textContent = start + "%";
      if (start === end) {
        clearInterval(interval);
        // Hide the loader after animation completes
        setTimeout(() => {
          transitionLoader.style.display = "none";
        }, 500);
      }
    }, stepTime);
  }
}); 