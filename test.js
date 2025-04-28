// Creating a Buffer
const buffer1 = Buffer.alloc(10); // Allocate 10 bytes (filled with zeros)
console.log("Buffer.alloc(10):", buffer1);

const buffer2 = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]); // From a byte array (ASCII for "Hello")
console.log("Buffer.from([0x48...]):", buffer2);
console.log("buffer2.toString():", buffer2.toString()); // Convert Buffer to string

const buffer3 = Buffer.from("World", "utf8"); // From a string with encoding
console.log('Buffer.from("World", "utf8"):', buffer3);

// Reading and Writing to a Buffer
buffer1.write("Hi", 0, "utf8");
console.log("buffer1 after write:", buffer1);
console.log("buffer1.readUInt8(0):", buffer1.readUInt8(0)); // Read unsigned 8-bit integer at index 0

// Concatenating Buffers
const bufferA = Buffer.from("Hello, ");
const bufferB = Buffer.from("World!");
const combinedBuffer = Buffer.concat([bufferA, bufferB]);
console.log("Buffer.concat():", combinedBuffer.toString());
