/*Aufgabe: Aufgabe 3 NEU
Name: Luisa Neininger
Matrikel: 259314
Datum: 12.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe3NEU;
(function (Aufgabe3NEU) {
    document.addEventListener("DOMContentLoaded", mainFunction);
    document.addEventListener("keydown", drawWithSpace);
    var color = ["yellow", "red", "blue", "green"];
    var cardName = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "time out", "retour"];
    var allCards = [{ color: "yellow", value: "0" }, { color: "red", value: "0" }, { color: "blue", value: "green" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    var cardTray = [];
    var playerCards = [];
    for (var cardNum = 0; cardNum < color.length; cardNum++) {
        for (var nameNum = 0; nameNum < cardName.length; nameNum++) {
            for (var arrayAllCards = 0; arrayAllCards < 2; arrayAllCards++) {
                var card = { color: color[cardNum], value: cardName[nameNum] }; //Es gibt color und value einen Wert, fasst es als Karte zusammen und gibt es zurück (push) in das AllCards array
                allCards.push(card);
            }
        }
    }
    console.log(allCards);
    function mainFunction() {
        //Zufällige Auswahl von Karten   
        var numberOfCards;
        var promptText = prompt("Please type in with how many cards you would like to play! (maximum of 7)");
        numberOfCards = Number(promptText);
        if (numberOfCards <= 0) {
            numberOfCards = 7;
        }
        else if (numberOfCards > 7) {
            numberOfCards = 7;
        }
        chooseRandomCards(numberOfCards);
        showMyCards();
        //Event Listener für sortieren und Karte vom Stapel ziehen
        var button = document.getElementById("buttonhtml");
        button.addEventListener("click", sortCards);
        var drawCard = document.getElementById("pilehtml");
        drawCard.addEventListener("click", drawFromPile);
    }
    //Funktion zur zufälligen Auswahl von Karten
    function chooseRandomCards(_displayCard) {
        for (var displayCard = _displayCard; displayCard > 0; displayCard--) {
            var randomCards = Math.floor(Math.random() * (allCards.length - 1)); //Karte wird zufällig ausgewählt und aus AllCards entfernt
            playerCards.push(allCards[randomCards]); //Karte wird zu Spielerkarten hinzufügt
            allCards.splice(randomCards, 1); //Karte von AllCards Array löschen
        }
    }
    //Funktion zum ziehen von Karten
    function drawFromPile() {
        chooseRandomCards(1); //nimmt immer nur eine Karte auf einmal
        showMyCards();
    }
    //Funktion Karte ziehen mit Leertaste
    function drawWithSpace(event) {
        if (event.keyCode == 32) {
            drawFromPile();
        }
    }
    //Funktion Karten anzeigen lassen mit Hilfe von CSS
    function showMyCards() {
        document.getElementById("playerCardshtml").innerHTML = ""; //Nimmt die Info aus dem HTML Element um Karte an der richtigen Position anzeigen zu lassen
        for (var showCard = 0; showCard < playerCards.length; showCard++) {
            var div = document.createElement("div"); //Erstellt ein div 
            document.getElementById("playerCardshtml").appendChild(div); //Verbindet div mit dem Eltern div. Div ist also ein Kind von Handkarten(div)
            div.innerHTML = playerCards[showCard].value; //fügt value zur Karte hinzu
            var id = showCard.toString(); //erstellt eine ID zu showCard
            div.setAttribute("id", id); //Ausführung mit Hilfe von einem Attribut                 
            div.classList.add("playerCardshtml"); //Erstellt Klasse zu div Spielerkarten
            div.classList.add(playerCards[showCard].color); //Erstellt Klasse zu angezeigten Spielerkarten  
            div.addEventListener("click", layDownCard); //fügt Event Listener zum Karte ablegen hinzu, Funktion kommt unten
        }
    }
    //Funktion Karte auf Ablage ablegen
    function layDownCard(_event) {
        document.getElementById("cardTrayhtml").innerHTML = "";
        var chosenCard = _event.target;
        var index = parseInt(chosenCard.id); //nimmt Zeichenkette und wandelt Sie in eine Ganzzahl um.
        cardTray.push(playerCards[index]);
        var div = document.createElement("div");
        document.getElementById("cardTrayhtml").appendChild(div);
        div.innerHTML = playerCards[index].value;
        div.classList.add(playerCards[index].color);
        playerCards.splice(index, 1);
        showMyCards();
    }
    //Funktion Karten nach Farbe sortieren
    function sortCards() {
        console.log(playerCards);
        document.getElementById("playerCardshtml").innerHTML = "";
        playerCards.sort(function (one, two) {
            if (one.color > two.color) {
                return 1;
            }
            if (one.color < two.color) {
                return -1;
            }
            if (one.value > two.value) {
                return 1;
            }
            if (one.value < two.value) {
                return -1;
            }
            return 0;
        });
        console.log(playerCards);
        showMyCards();
    }
})(Aufgabe3NEU || (Aufgabe3NEU = {}));
//# sourceMappingURL=komplettneu.js.map