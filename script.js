//your JS code here. If required.
function updateClock() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros if necessary
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${day}, ${date}/${month}/${year}`;
  const dateTimeString = `${timeString} ${dateString}`;

  document.getElementById("timer").textContent = dateTimeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
