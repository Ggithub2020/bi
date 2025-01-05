const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  const userMessage = input.value.trim();
  if (userMessage) {
    addMessage("You", userMessage);
    getBotResponse(userMessage);
    input.value = "";
  }
});

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.textContent = `${sender}: ${message}`;
  chat.appendChild(messageElement);
  chat.scrollTop = chat.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
  const responses = [
    "Hello! How can I help you today?",
    "I'm here to assist you.",
    "What can I do for you?",
    "Feel free to ask me anything.",
    "I'm here to chat with you."
  ];

  let botMessage = "I'm not sure how to respond to that.";
  if (userMessage.toLowerCase().includes("hello")) {
    botMessage = "Hi there! How can I help you?";
  } else if (userMessage.toLowerCase().includes("weather")) {
    botMessage = "The weather is sunny today!";
  } else {
    botMessage = responses[Math.floor(Math.random() * responses.length)];
  }

  setTimeout(() => {
    addMessage("Bot", botMessage);
  }, 1000); // Simulate a delay
}