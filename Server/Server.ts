import * as Http from "http";   //Http empfängt die importierten Daten von "http"

namespace L06_SendData {       //Objekte werden in einer Hierarchie angeordnet und können über verschiedene Pfadnamen angesprochen werden
    console.log("Starting server");  //Starting server wird in Browser Konsole angezeigt
    let port: number = process.env.PORT; //port vom typ number 
    if (port == undefined)              //Wenn port undefiniert ist.....
        port = 8100;                   //..dann ist port 8100!

    let server: Http.Server = Http.createServer();  //verwandelt Computer in einen HTTP-Server und erstellt ein HTTP-Server-Objekt
    server.addListener("request", handleRequest);  //Erstellt ein Listener auf dem Server. Verweist auf die Funktion handleRequest
    server.addListener("listening", handleListen); //Erstellt ein Listener auf dem Server. Verweist auf Funktion handleListen
    server.listen(port);                            //Ein Listener auf port wird erstellt

    function handleListen(): void {           //Führt Funktion handleListen aus. Sie ist vom Typ void
        console.log("Listening");            //Auf der Konsole wird das wort Listening angezeigt
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion handleRequest wird ausgeführt. Daten von _request werden von dem Http Element Incoming Message genommen. Daten von _response werden von dem Http Element ServerResponse genommen.
        console.log("I hear voices!");    //Auf der Konsole wird "I hear voices" angezeigt
        

        _response.setHeader("content-type", "text/html; charset=utf-8");  //erstellt einen Header
        _response.setHeader("Access-Control-Allow-Origin", "*"); //erstellt weitere Header Elemente

        _response.write(_request.url); 
        
        console.log(_request.url); 
        
         
        _response.end(); //_response wird beendet
    }
}

