const Emitter = require("./emitter");

const emtr = new Emitter();

emtr.on("greet", function () {
  console.log("Some one is greeting");
});

console.log("Hallo Alle");
emtr.emit("greet");
