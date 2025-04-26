// Creating a buffer from a string
const textBuffer = Buffer.from("Hello, Node.js!", "utf8");
console.log("Text Buffer:", textBuffer);
console.log("Text Buffer as String:", textBuffer.toString("utf8"));
console.log("Text Buffer in Hex:", textBuffer.toString("hex"));

// Creating a buffer from an array of byte values
const byteBuffer = Buffer.from([72, 101, 108, 108, 111]); // ASCII for 'Hello'
console.log("Byte Buffer:", byteBuffer);
console.log("Byte Buffer as String (ASCII):", byteBuffer.toString("ascii"));

// Creating an empty buffer of a specific size
const emptyBuffer = Buffer.alloc(10);
console.log("Empty Buffer:", emptyBuffer);
emptyBuffer.write("World", 0, "utf8");
console.log("Empty Buffer after writing:", emptyBuffer);
console.log("Empty Buffer as String:", emptyBuffer.toString("utf8"));
