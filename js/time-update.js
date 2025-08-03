// Function to update Buenos Aires time
function updateBATime() {
  const timeElements = document.querySelectorAll(".time-text");
  if (timeElements) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/Argentina/Buenos_Aires",
    };
    
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const BATime = formatter.format(new Date());

    timeElements.forEach((element) => {
      element.textContent = BATime;
    });
  }
}

// Initialize time update
updateBATime();
setInterval(updateBATime, 1000); 