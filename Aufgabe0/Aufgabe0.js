/**
Aufgabe: 0
Name: Luisa Neininger
Matrikel: 259314
Datum: 06.10.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/
var Aufgabe0;
(function (Aufgabe0) {
    var name = "";
    function box() {
        var name = prompt("Gebe deinen Namen ein:");
        var node = document.getElementById("Inhalt");
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += ", schoen dich zu sehen! ";
        console.log("Hallo", name, ", schoen dich zu sehen!");
    }
    document.addEventListener('DOMContentLoaded', box);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map