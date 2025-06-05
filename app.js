// server.js
const WebSocket = require("ws");

// Create a WebSocket server instance on port 8080
// This is your main WebSocket server "listener"
const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server started on ws://localhost:8080");
console.log("Open index.html in your browser to connect!");

// --- Event: 'connection' ---
// This event fires every time a new client successfully connects to the WebSocket server.
// The 'ws' parameter in the callback represents the *individual* WebSocket connection
// for that specific client (their "handset" for this conversation).
wss.on("connection", (ws) => {
  console.log("A new client connected!");

  // Send a welcome message just to this new client
  ws.send("Welcome to the chat! Type your message and press Enter.");

  // --- Event: 'message' ---
  // This event fires when this specific client sends a message to the server.
  ws.on("message", (message) => {
    // We received a message from ONE client.
    const receivedText = message.toString(); // Convert the message (Buffer) to a string
    console.log(`Received from client: ${receivedText}`);

    // --- BROADCASTING THE MESSAGE ---
    // Now, we want to send this message to ALL currently connected clients.
    // `wss.clients` is a Set containing all connected WebSocket clients.
    wss.clients.forEach((client) => {
      // Check if the client is still open and ready to receive messages
      if (client.readyState === WebSocket.OPEN) {
        // Send the received message to this individual client
        client.send(`[${new Date().toLocaleTimeString()}] ${receivedText}`);
      }
    });
  });

  // --- Event: 'close' ---
  // This event fires when a client disconnects.
  ws.on("close", () => {
    console.log("A client disconnected.");
    // Optionally, broadcast a "user left" message
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("A user has left the chat.");
      }
    });
  });

  // --- Event: 'error' ---
  // Handle any errors that occur on this specific client connection.
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});
