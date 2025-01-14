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

async function sendMessage() {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("user-input").value;

    if (!userInput.trim()) {
        alert("Please type a message.");
        return;
    }

    // Display user message
    chatbox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Call the OpenAI API
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "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" // Replace with your OpenAI API key
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: userInput,
                max_tokens: 150
            })
        });

        const data = await response.json();
        const botResponse = data.choices[0].text.trim();

        // Display bot response
        chatbox.innerHTML += `<div><strong>AI:</strong> ${botResponse}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    } catch (error) {
        console.error("Error:", error);
        chatbox.innerHTML += `<div style="color: red;"><strong>Error:</strong> Unable to connect to the AI server.</div>`;
    }
}


