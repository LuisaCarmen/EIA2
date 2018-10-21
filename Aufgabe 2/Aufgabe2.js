var Aufgabe2;
(function (Aufgabe2) {
    function game() {
        let cardzero = {
            card: "0",
            red: 1,
            green: 1,
            blue: 1,
            yellow: 1,
            black: 0
        };
        let cardone = {
            card: "1",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardtwo = {
            card: "2",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardthree = {
            card: "3",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardfour = {
            card: "4",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardfive = {
            card: "5",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardsix = {
            card: "6",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardseven = {
            card: "7",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardeight = {
            card: "8",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardnine = {
            card: "9",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardplustwo = {
            card: "+2",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardretour = {
            card: "retour",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardtimeout = {
            card: "timeout",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        };
        let cardwish = {
            card: "wish",
            red: 0,
            green: 0,
            blue: 0,
            yellow: 0,
            black: 4
        };
        let cardplusfour = {
            card: "+4",
            red: 0,
            green: 0,
            blue: 0,
            yellow: 0,
            black: 4
        };
        //Zusammenfügung von allen Karten in einem einzigen Array
        let AllCards = [cardzero, cardone, cardtwo, cardthree, cardfour, cardfive, cardsix, cardseven,
            cardnine, cardplustwo, cardretour, cardtimeout, cardwish, cardplusfour];
        //Deklaration der Zufalls(random) Funktion damit später zufällig aus den Karten gewählt werden kann.
        function Zufall(Nummer) { return Math.floor(Math.random() * Math.floor(Nummer)); }
        ;
        //function placeDiv, erstellt Dokument in HTML, div ist kind von body
        function placeDiv(_color, Karte, Eingabe) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + Eingabe);
            document.getElementById("a" + Eingabe).innerHTML += Karte;
            //CSS Style Deklaration
            let s = div.style;
            s.border = "solid black";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 150 + "px";
            s.height = 200 + "px";
            s.left = (Eingabe + 1) * 160 + "px"; //Abstand zwischen den Spielkarten nach jeder Wiederholung
            s.bottom = 50 + "px";
            s.textAlign = "center";
            s.borderRadius = 20 + "px";
            //Schriftfarbe wird festgelegt falls Hintergrund zu dunkel ist
            if (_color == "black") {
                s.color = "white";
            }
            if (_color == "#2E9AFE") {
                s.color = "white";
            }
            if (_color == "#DF0101") {
                s.color = "white";
            }
        }
        //Pop up, spieler gibt ein mit wie vielen Karten er spielen möchte
        let Anzahl;
        let Kartenauswahl = prompt("Gebe ein mit wie vielen Karten du spielen moechtest");
        Anzahl = Number(Kartenauswahl); //Kartenauswahl wird in Anzahl zurückgegeben damit man eine zahl eingeben kann
        let c = "";
        for (let i = 0; i < Anzahl; i++) {
            let Kartenzahl = Zufall(15); //Funktion oben wird aufgegriffen um zufällig aus den Karten zu wählen
            let Farben = Zufall(5);
            switch (Farben) {
                case 0:
                    c = "#DF0101";
                    if (AllCards[Kartenzahl].red > 0) {
                        placeDiv(c, AllCards[Kartenzahl].card, i);
                        AllCards[Kartenzahl].red--;
                        continue;
                    }
                case 1:
                    c = "#81F79F";
                    if (AllCards[Kartenzahl].green > 0) {
                        placeDiv(c, AllCards[Kartenzahl].card, i);
                        AllCards[Kartenzahl].green--;
                        continue;
                    }
                case 2:
                    c = "#2E9AFE";
                    if (AllCards[Kartenzahl].blue > 0) {
                        placeDiv(c, AllCards[Kartenzahl].card, i);
                        AllCards[Kartenzahl].blue--;
                        continue;
                    }
                case 3:
                    c = "#F3F781";
                    if (AllCards[Kartenzahl].yellow > 0) {
                        placeDiv(c, AllCards[Kartenzahl].card, i);
                        AllCards[Kartenzahl].yellow--;
                        continue;
                    }
                case 4:
                    c = "black";
                    if (AllCards[Kartenzahl].black > 0) {
                        placeDiv(c, AllCards[Kartenzahl].card, i);
                        AllCards[Kartenzahl].black--;
                        continue;
                    }
                    else {
                        i--;
                        continue;
                    }
            }
        }
        //Stylesheet vom Stapel
        function Stapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Unostapel");
            document.getElementById("Unostapel").innerHTML += "Unostapel";
            let s = div.style;
            s.border = " solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#EFFBF2";
            s.width = 150 + "px";
            s.height = 200 + "px";
            s.left = 550 + "px";
            s.top = 20 + "px";
            s.borderRadius = 20 + "px";
        }
        //Stylesheet der Ablage
        function Ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Kartenablage");
            document.getElementById("Kartenablage").innerHTML += "Kartenablage";
            let s = div.style;
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "light gray";
            s.width = 150 + "px";
            s.height = 200 + "px";
            s.right = 550 + "px";
            s.top = 20 + "px";
            s.borderRadius = 20 + "px";
        }
        Ablage();
        Stapel();
    }
    document.addEventListener("DOMContentLoaded", (game));
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map