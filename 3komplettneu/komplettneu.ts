/*Aufgabe: Aufgabe 3 NEU
Name: Luisa Neininger
Matrikel: 259314
Datum: 12.11.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe3NEU {

    document.addEventListener("DOMContentLoaded", mainFunction);
    document.addEventListener("keydown", drawWithSpace);

    interface unoCards {
        color: string;
        value: string;
    }

    let color: string[] = ["yellow", "red", "blue", "green"];
    let cardName: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "time out", "retour"];
    let allCards: unoCards[] = [{ color: "yellow", value: "0" }, { color: "red", value: "0" }, { color: "blue", value: "green" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    let cardTray: unoCards[] = [];
    let playerCards: unoCards[] = [];

    for (let cardNum: number = 0; cardNum < color.length; cardNum++) {                               //Wenn Nummer kleiner als die Länge des Arrays color ist, addiere +1 und gehe weiter im Array
        for (let nameNum: number = 0; nameNum < cardName.length; nameNum++) {                        //Wenn Nummer kleiner als die Länge des Arrays cardName ist, addiere +1 und gehe weiter im Array
            for (let arrayAllCards: number = 0; arrayAllCards < 2; arrayAllCards++) {                //Wenn die Anzahl von Werten kleiner ist als 2, addiere +1 und gehe weiter im Array
                let card: unoCards = { color: color[cardNum], value: cardName[nameNum] };            //Es gibt color und value einen Wert, fasst es als Karte zusammen und gibt es zurück (push) in das AllCards array
                allCards.push(card);
            }
        }
    }
    console.log(allCards);

    

    function mainFunction(): void {
        
     //Zufällige Auswahl von Karten   
        let numberOfCards: number;
        let promptText: string = prompt("Please type in with how many cards you would like to play! (maximum of 7)");
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
        let button: HTMLElement = document.getElementById("buttonhtml");
        button.addEventListener("click", sortCards);

        let drawCard: HTMLElement = document.getElementById("pilehtml");
        drawCard.addEventListener("click", drawFromPile);

    }

     //Funktion zur zufälligen Auswahl von Karten
    function chooseRandomCards(_displayCard: number): void {
        for (let displayCard: number = _displayCard; displayCard > 0; displayCard--) {           //Löscht eine Karte wenn displayCard größer als 0 ist, bei jedem Durchlauf.
            let randomCards: number = Math.floor(Math.random() * (allCards.length - 1));         //Karte wird zufällig ausgewählt und aus AllCards entfernt
            playerCards.push(allCards[randomCards]);                                             //Karte wird zu Spielerkarten hinzufügt
            allCards.splice(randomCards, 1);                                                      //Karte von AllCards Array löschen
        }
    }

    //Funktion zum ziehen von Karten
    function drawFromPile(): void {
        chooseRandomCards(1);                        //nimmt immer nur eine Karte auf einmal
        showMyCards();

    }

    //Funktion Karte ziehen mit Leertaste
    function drawWithSpace(event: KeyboardEvent): void {
        if (event.keyCode == 32) {
            drawFromPile();
        }
    }

    //Funktion Karten anzeigen lassen mit Hilfe von CSS
    function showMyCards(): void {

        document.getElementById("playerCardshtml").innerHTML = "";                        //Nimmt die Info aus dem HTML Element um Karte an der richtigen Position anzeigen zu lassen
        for (let showCard: number = 0; showCard < playerCards.length; showCard++) {  //zeigt eine Karte nach der anderen an, bis alle Karten im Player Cards array sichtlch vorhanden sind
            let div: HTMLElement = document.createElement("div");                    //Erstellt ein div 
            document.getElementById("playerCardshtml").appendChild(div);                  //Verbindet div mit dem Eltern div. Div ist also ein Kind von Handkarten(div)
            div.innerHTML = playerCards[showCard].value;                             //fügt value zur Karte hinzu
            let id: string = showCard.toString();                                    //erstellt eine ID zu showCard
            div.setAttribute("id", id);                                              //Ausführung mit Hilfe von einem Attribut                 
            div.classList.add("playerCardshtml");                                        //Erstellt Klasse zu div Spielerkarten
            div.classList.add(playerCards[showCard].color);                         //Erstellt Klasse zu angezeigten Spielerkarten  
            div.addEventListener("click", layDownCard);                            //fügt Event Listener zum Karte ablegen hinzu, Funktion kommt unten

        }
    }

    //Funktion Karte auf Ablage ablegen
    function layDownCard(_event: MouseEvent): void {
        document.getElementById("cardTrayhtml").innerHTML = "";
        let chosenCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(chosenCard.id);
        cardTray.push(playerCards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("cardTrayhtml").appendChild(div);
        div.innerHTML = playerCards[index].value;
        div.classList.add(playerCards[index].color);
        playerCards.splice(index, 1);
         showMyCards();
    }


  //Funktion Karten nach Farbe sortieren
    function sortCards(): void {
        console.log(playerCards);
        document.getElementById("playerCardshtml").innerHTML = "";
       playerCards.sort(function(one: unoCards, two: unoCards): number {
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

}
