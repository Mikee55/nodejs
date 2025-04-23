const EventEmitter = require("events");

class Emitter extends EventEmitter {
  constructor() {
    super();
    this.on(type, listener);
    this.emit(type);
  }
}

const myEmitter = new Emitter();

myEmitter.on("data", function () {
  console.log("Hello");
});

myEmitter.emit("data");
