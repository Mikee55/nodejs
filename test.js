const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { contenttype: "text/html" });
    let html = fs.readFileSync(__dirname + "/index.html");
    res.end(html);
  })

  .listen(1337, "127.0.0.1");
