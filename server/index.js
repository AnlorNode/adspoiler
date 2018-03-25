var static = require("node-static");
var file = new static.Server("./server/public");
const ccxt = require("../server/modules/ccxt/ccxt.js");
const port = process.env.PORT || 80;
var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");
app.listen(port);
function handler(req, res) {
  file.serve(req, res, function name(err, dt) {
    if (err) console.log(req.url, "err");
  });
}
io.on("connection", function (socket) {
  socket.on("shipped", function (data) {
    console.log("llll");
    ccxt.min(null, function (err, params) {
      if (err) {
        socket.emit("end_news_mes")       
      } else {
        socket.emit("news_mes", params)
      };
    });
  });
});


