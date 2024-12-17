// Twitch Extension Initialization
Twitch.ext.onAuthorized((auth) => {
    console.log("Extension Authorized!");
    console.log("User ID:", auth.userId);
    console.log("Channel ID:", auth.channelId);
  });
  
  // Button Interaction Example
  const actionButton = document.getElementById("action-button");
  const responseMessage = document.getElementById("response-message");
  
  actionButton.addEventListener("click", () => {
    console.log("Button Clicked!");
    responseMessage.classList.remove("hidden");
    responseMessage.textContent = "🎉 You clicked the button!";
    
    // Example: Send a message (requires backend setup)
    // Twitch.ext.send("broadcast", "application/json", { action: "buttonClicked" });
  });
  
  // Optional: Handle incoming messages (if backend is connected)
  Twitch.ext.onMessage((channel, sender, message) => {
    console.log("Message Received:", message);
    // You can update the UI based on received messages
  });
  