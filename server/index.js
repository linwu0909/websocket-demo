const Ws = require("ws");
((Ws) => {
  const server = new Ws.Server({ port: 8000 });
  const init = () => {
    bindEvent();
  };
  function bindEvent() {
    server.on("open", handleOpen);
    server.on("close", handleClose);
    server.on("error", handleError);
    server.on("connection", handleConnection);
  }
  function handleOpen() {
    console.log("Back:websocket open");
  }
  function handleClose() {
    console.log("Back:websocket close");
  }
  function handleError() {
    console.log("Back:websocket error");
  }
  function handleConnection(ws) {
    console.log("Back:websocket connection");
    ws.on("message", handleMsg);
  }
  function handleMsg(msg) {
    // 广播给所有客户端
    server.clients.forEach((c) => {
      // 将buffer转成string
      //   c.send(msg + "");
      c.send(msg.toString());
    });
  }
  init();
})(Ws);
