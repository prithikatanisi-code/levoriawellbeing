const defaultMessages = [
  "You don’t have to explain yourself.",
  "Someone out there understands more than you think.",
  "It’s okay to pause.",
  "This feeling won’t stay forever.",
  "You are not weak for needing quiet."
];

let messages = JSON.parse(localStorage.getItem("gentleMessages")) || defaultMessages;

function newMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("gentleMessage").querySelector("p").innerText = msg;
}

function openWrite() {
  const text = prompt("Leave a sentence you wish someone had told you:");
  if (text && text.trim() !== "") {
    messages.push(text.trim());
    localStorage.setItem("gentleMessages", JSON.stringify(messages));
    newMessage();
  }
}

newMessage();
