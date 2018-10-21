namespace Aufgabe2 {



    function game() {
        //Interface von allen Karten und jeweils ihre Anzahl 
        interface Cards {
            card: string;
            red: number;
            green: number;
            blue: number;
            yellow: number;
            black: number;
        }

        let cardzero: Cards = {
            card: "0",
            red: 1,
            green: 1,
            blue: 1,
            yellow: 1,
            black: 0
        }

        let cardone: Cards = {
            card: "1",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardtwo: Cards = {
            card: "2",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }


        let cardthree: Cards = {
            card: "3",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }


        let cardfour: Cards = {
            card: "4",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardfive: Cards = {
            card: "5",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardsix: Cards = {
            card: "6",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardseven: Cards = {
            card: "7",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardeight: Cards = {
            card: "8",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardnine: Cards = {
            card: "9",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardplustwo: Cards = {
            card: "+2",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardretour: Cards = {
            card: "retour",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardtimeout: Cards = {
            card: "timeout",
            red: 2,
            green: 2,
            blue: 2,
            yellow: 2,
            black: 0
        }

        let cardwish: Cards = {
            card: "wish",
            red: 0,
            green: 0,
            blue: 0,
            yellow: 0,
            black: 4
        }

        let cardplusfour: Cards = {
            card: "+4",
            red: 0,
            green: 0,
            blue: 0,
            yellow: 0,
            black: 4
        }





        //Zusammenfügung von allen Karten in einem einzigen Array
        let AllCards: Cards[] = [cardzero, cardone, cardtwo, cardthree, cardfour, cardfive, cardsix, cardseven,
            cardnine, cardplustwo, cardretour, cardtimeout, cardwish, cardplusfour]


        //Deklaration der Zufalls(random) Funktion damit später zufällig aus den Karten gewählt werden kann.
        function Zufall(Nummer: number) { return Math.floor(Math.random() * Math.floor(Nummer)) };


        //function placeDiv, erstellt Dokument in HTML, div ist kind von body
        function placeDiv(_color: string, Karte: string, Eingabe: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + Eingabe);
            document.getElementById("a" + Eingabe).innerHTML += Karte;
            //CSS Style Deklaration
            let s: CSSStyleDeclaration = div.style;
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

            if (_color == "black") { s.color = "white"; }

            if (_color == "#2E9AFE") { s.color = "white"; }

            if (_color == "#DF0101") { s.color = "white"; }

        }







        //Pop up, spieler gibt ein mit wie vielen Karten er spielen möchte
        let Anzahl: number;
        let Kartenauswahl: string = prompt("Gebe ein mit wie vielen Karten du spielen moechtest");
        Anzahl = Number(Kartenauswahl); //Kartenauswahl wird in Anzahl zurückgegeben damit man eine zahl eingeben kann











        let c: string = "";

        for (let i : number = 0; i < Anzahl; i++) { //wenn i kleiner ist als Anzahl dann wird bei jeder Wiederholung d plus 1 gerechnet!


            let Kartenzahl: number = Zufall(15); //Funktion oben wird aufgegriffen um zufällig aus den Karten zu wählen

            let Farben: number = Zufall(5);

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
                        continue
                    }
            }
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

        Ablage();
        Stapel();

    }
    document.addEventListener("DOMContentLoaded", (game))


}













