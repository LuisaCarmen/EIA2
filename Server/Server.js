"use strict";
const Http = require("http"); //Http empfängt die importierten Daten von "http"
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Starting server wird in Browser Konsole angezeigt
    let port = process.env.PORT; //port vom typ number 
    if (port == undefined)
        port = 8100; //..dann ist port 8100!
    let server = Http.createServer(); //verwandelt Computer in einen HTTP-Server und erstellt ein HTTP-Server-Objekt
    server.addListener("request", handleRequest); //Erstellt ein Listener auf dem Server. Verweist auf die Funktion handleRequest
    server.addListener("listening", handleListen); //Erstellt ein Listener auf dem Server. Verweist auf Funktion handleListen
    server.listen(port); //Ein Listener auf port wird erstellt
    function handleListen() {
        console.log("Listening"); //Auf der Konsole wird das wort Listening angezeigt
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Auf der Konsole wird "I hear voices" angezeigt
        _response.setHeader("content-type", "text/html; charset=utf-8"); //erstellt einen Header
        _response.setHeader("Access-Control-Allow-Origin", "*"); //erstellt weitere Header Elemente
        _response.write(_request.url); //  _response greift auf die URL von _request zu.
        _response.end(); //_response wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map