const chatbox = document.getElementById("chat");
const userInputField = document.getElementById("userInput"); // note we get the element, not value yet
const botName = "GirAI"; // or AskGirum

// Send button click
document.getElementById("send").addEventListener("click", sendMessage);

// Enter key
userInputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const userInput = userInputField.value.trim();
    if (!userInput) {
        alert("Please type a message...");
        return;
    }

    // Display user message
    chatbox.innerHTML += `<div><strong style="color:#007bff;">You:</strong> ${userInput}</div>`;
    // Clear input
    userInputField.value = "";

    // Bot response logic (simplified example)
    let botResponse = "Sorry, I didn't understand that.";

    if (/hello|hi/i.test(userInput)) botResponse = "Hi! How can I help you today?";
    else if (/power bi/i.test(userInput)) botResponse = "Power BI is a Microsoft BI tool.";
    else if (/power platform/i.test(userInput)) botResponse = "Power Platform includes Power BI, Power Apps, Power Automate.";
    else if (/fabric/i.test(userInput)) botResponse = "Microsoft Fabric is a unified data platform.";

    // Display bot response
    chatbox.innerHTML += `<div><strong style="color:#007bff;">${botName}:</strong> ${botResponse}</div>`;

    // Scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}
