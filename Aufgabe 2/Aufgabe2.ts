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
        function Zufall(n: number) { return Math.floor(Math.random() * Math.floor(n)) };


//function placeDiv, erstellt Dokument in HTML, div ist kind von body
        function placeDiv(_color: string, _x: number, _e: string): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + _x);
            document.getElementById("a" + _x).innerHTML += _e;
//CSS Style Deklaration
            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid gray";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 150 + "px";
            s.height = 200 + "px";
            s.left = (_x + 1) * 155 + "px";
            s.top = 30 + "px";



//Schriftfarbe wird festgelegt falls Hintergrund zu dunkel ist

            if (_color == "black") { s.color = "white"; }

            if (_color == "blue") { s.color = "white"; }
        }







//Pop up, spieler gibt ein mit wie vielen Karten er spielen möchte
        let a: number;
        let i: string = prompt("Gebe ein mit wie vielen Karten du spielen möchtest");
        a = Number(i); //i wird in a zurückgegeben damit man eine zahl eingeben kann











        let c: string = "";

        for (let d: number = 0; d < a; d++) { //wenn d kleiner ist als a dann wird bei jeder Wiederholung d plus 1 gerechnet!


            let z : number = Zufall(15); //Funktion oben wird aufgegriffen um zufällig aus den Karten zu wählen

            let h: number = Zufall(5);

            switch (h) {



                case 0:
                    c = "red";
                    if (AllCards[z].red > 0) {
                        placeDiv(c, AllCards[z].card, d);
                        AllCards[z].red--;
                        continue;
                    }


                case 1:


                    c = "green";
                    if (AllCards[z].green > 0) {
                        placeDiv(c, AllCards[z].card, d);
                        AllCards[z].green--;
                        continue;
                    }







                case 2:
                    c = "blue";
                    if (AllCards[z].blue > 0) {
                        placeDiv(c, AllCards[z].card, d);
                        AllCards[z].blue--;
                        continue;
                    }




                case 3:
                    c = "yellow";
                    if (AllCards[z].yellow > 0) {
                        placeDiv(c, AllCards[z].card, d);
                        AllCards[z].yellow--;
                        continue;
                    }


                case 4:
                    c = "black";
                    if (AllCards[z].black > 0) {
                        placeDiv(c, AllCards[z].card, d);
                        AllCards[z].black--;
                        continue;
                    }

                    else {
                        d--;
                        continue
                    }
            }
        }
    

//Stylesheet vom Stapel
    function Stapel() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "Unostapel");
        document.getElementById("Kartenstapel").innerHTML += "Unostapel";
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = "gray";
        s.width = 150 + "px";
        s.height = 200 + "px";
        s.left = 60 + "px";
        s.top = 30 + "px";
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
        s.right = 50 + "px";
        s.top = 20 + "px";
    }

    Ablage();
    Stapel();

}
document.addEventListener("DOMContentLoaded", (game)) 


}













