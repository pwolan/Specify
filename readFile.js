const fs = require("fs");

module.exports = function readFile(req, res) {
  switch (req.url) {
    case "/":
      fs.readFile("static/index.html", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.write(data);
        res.end();
      });
      break;
    case "/style.css":
      fs.readFile("static/style.css", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "text/css"
        });
        res.write(data);
        res.end();
      });
      break;
    case "/jQuery.js":
      fs.readFile("static/jQuery.js", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "application/javascript"
        });
        res.write(data);
        res.end();
      });
      break;
    case "/Net.js":
      fs.readFile("static/Net.js", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "application/javascript"
        });
        res.write(data);
        res.end();
      });
      break;
    case "/Ui.js":
      fs.readFile("static/Ui.js", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "application/javascript"
        });
        res.write(data);
        res.end();
      });
      break;
    case "/Main.js":
      fs.readFile("static/Main.js", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "application/javascript"
        });
        res.write(data);
        res.end();
      });
      break;
    case "/gfx/spec.ico":
      fs.readFile("static/gfx/spec.ico", (error, data) => {
        res.writeHead(200, {
          "Content-Type": "image/x-icon"
        });
        res.write(data);
        res.end();
      });
    default:
      break;
  }
};
