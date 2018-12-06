"use strict";
const Http = require("http");
const Url = require("url");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let chosenProducts = [];
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = _request.url;
        if (url != "/favicon.ico") {
            let section = Url.parse(url).search.substr(1);
            let HTML = "";
            for (let i = 0; i < section.length; i++) {
                if (section[i] == "&") {
                    chosenProducts.push(HTML);
                    HTML = "<br>";
                }
                else {
                    HTML += section[i];
                }
            }
            chosenProducts.push(HTML);
            for (let i = 0; i < chosenProducts.length; i++) {
                _response.write(chosenProducts[i]);
            }
            console.log(chosenProducts);
        }
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map