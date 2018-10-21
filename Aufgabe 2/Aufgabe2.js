var Aufgabe2;
(function (Aufgabe2) {
    let cardzero = { card: "0",
        red: 1,
        green: 1,
        blue: 1,
        yellow: 1,
        black: 0 };
    let cardone = { card: "1",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardtwo = { card: "2",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardthree = { card: "3",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardfour = { card: "4",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardfive = { card: "5",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardsix = { card: "6",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardseven = { card: "7",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardeight = { card: "8",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardnine = { card: "9",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardplustwo = { card: "+2",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardretour = { card: "retour",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardtimeout = { card: "timeout",
        red: 2,
        green: 2,
        blue: 2,
        yellow: 2,
        black: 0 };
    let cardwish = { card: "wish",
        red: 0,
        green: 0,
        blue: 0,
        yellow: 0,
        black: 4 };
    let cardplusfour = { card: "+4",
        red: 0,
        green: 0,
        blue: 0,
        yellow: 0,
        black: 4 };
    let AllCards = [cardzero, cardone, cardtwo, cardthree, cardfour, cardfive, cardsix, cardseven,
        cardnine, cardplustwo, cardretour, cardtimeout, cardwish, cardplusfour];
    function getRandom(n) { return Math.floor(Math.random() * Math.floor(n)); }
    function placeDiv(_color, _x) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.border = "thin solid gray";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = 150 + "px";
        s.height = 200 + "px";
        s.left = (_x + 1) * 155 + "px";
        s.top = 30 + "px";
        if (_color == "black") {
            s.color = "white";
        }
        if (_color == "#blue") {
            s.color = "white";
        }
    }
    /*   FUNKTIONEN ENDE  */
    function main() {
        let b;
        let i = prompt("Gebe ein mit wie vielen Karten du spielen möchtest");
        b = Number(i);
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map