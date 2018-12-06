import * as Http from "http";

import * as Url from "url";
namespace L06_SendData {

    console.log("Starting server");

    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let chosenProducts: string[] = [];
    let server: Http.Server = Http.createServer();

    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");

    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log(_request.url);


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");



        let url: string = _request.url;
        if (url != "/favicon.ico") {
            let section: string = Url.parse(url).search.substr(1);
            let HTML: string = "";
            for (let i: number = 0; i < section.length; i++) {
                if (section[i] == "&") {
                    chosenProducts.push(HTML);
                    HTML = "<br>";
                }
                else {
                    HTML += section[i];
                }
            }
            chosenProducts.push(HTML);

            for (let i: number = 0; i < chosenProducts.length; i++) {
                _response.write(chosenProducts[i]);
            }
            console.log(chosenProducts);
        }
        _response.end();
    }
}