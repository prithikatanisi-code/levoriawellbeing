const dailyLines = [
  "Nothing needs to be solved today.",
  "You’re allowed to move slowly.",
  "Rest is not a reward.",
  "Today doesn’t have to mean anything.",
  "Being here is enough.",

  "You don’t owe productivity to anyone.",
  "It’s okay to take up space quietly.",
  "Not everything needs a response.",
  "Some days are just for breathing.",
  "You can pause without falling behind.",

  "You are allowed to feel neutral.",
  "This moment doesn’t define you.",
  "Soft days count too.",
  "You don’t need permission to rest.",
  "Quiet progress is still progress.",

  "Nothing bad happens if you slow down.",
  "You can exist without explaining yourself.",
  "It’s okay if today is unremarkable.",
  "You don’t have to fix the day.",
  "Calm is enough for now.",

  "You’re allowed to log out emotionally.",
  "There is no rush to become anything.",
  "Some peace is better than none.",
  "You can stop trying for a moment.",
  "You’re not late to your life."
];

const today = new Date().toDateString();
const savedDay = localStorage.getItem("gentleDay");

if (savedDay !== today) {
  const line = dailyLines[Math.floor(Math.random() * dailyLines.length)];
  localStorage.setItem("gentleDay", today);
  localStorage.setItem("gentleLine", line);
}

document.getElementById("dailyText").innerText =
  localStorage.getItem("gentleLine");
