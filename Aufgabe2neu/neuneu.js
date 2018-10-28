var Aufgabe2neu;
(function (Aufgabe2neu) {
    function game() {
        //rote Karten
        var r1 = {
            color: "#DF0101",
            cardname: "0"
        };
        var r2 = {
            color: "#DF0101",
            cardname: "1"
        };
        var r3 = {
            color: "#DF0101",
            cardname: "1"
        };
        var r4 = {
            color: "#DF0101",
            cardname: "2"
        };
        var r5 = {
            color: "#DF0101",
            cardname: "2"
        };
        var r6 = {
            color: "#DF0101",
            cardname: "3"
        };
        var r7 = {
            color: "#DF0101",
            cardname: "3"
        };
        var r8 = {
            color: "#DF0101",
            cardname: "4"
        };
        var r9 = {
            color: "#DF0101",
            cardname: "4"
        };
        var r10 = {
            color: "#DF0101",
            cardname: "5"
        };
        var r11 = {
            color: "#DF0101",
            cardname: "5"
        };
        var r12 = {
            color: "#DF0101",
            cardname: "6"
        };
        var r13 = {
            color: "#DF0101",
            cardname: "6"
        };
        var r14 = {
            color: "#DF0101",
            cardname: "7"
        };
        var r15 = {
            color: "#DF0101",
            cardname: "7"
        };
        var r16 = {
            color: "#DF0101",
            cardname: "8"
        };
        var r17 = {
            color: "#DF0101",
            cardname: "8"
        };
        var r18 = {
            color: "#DF0101",
            cardname: "9"
        };
        var r19 = {
            color: "#DF0101",
            cardname: "9"
        };
        var r20 = {
            color: "#DF0101",
            cardname: "+2"
        };
        var r21 = {
            color: "#DF0101",
            cardname: "+2"
        };
        var r22 = {
            color: "#DF0101",
            cardname: "time out"
        };
        var r23 = {
            color: "#DF0101",
            cardname: "time out"
        };
        var r24 = {
            color: "#DF0101",
            cardname: "retour"
        };
        var r25 = {
            color: "#DF0101",
            cardname: "retour"
        };
        //Grüneten
        var g1 = {
            color: "81F79F",
            cardname: "0"
        };
        var g2 = {
            color: "81F79F",
            cardname: "1"
        };
        var g3 = {
            color: "#81F79F",
            cardname: "1"
        };
        var g4 = {
            color: "#81F79F",
            cardname: "2"
        };
        var g5 = {
            color: "#81F79F",
            cardname: "2"
        };
        var g6 = {
            color: "#81F79F",
            cardname: "3"
        };
        var g7 = {
            color: "#81F79F",
            cardname: "3"
        };
        var g8 = {
            color: "#81F79F",
            cardname: "4"
        };
        var g9 = {
            color: "#81F79F",
            cardname: "4"
        };
        var g10 = {
            color: "#81F79F",
            cardname: "5"
        };
        var g11 = {
            color: "#81F79F",
            cardname: "5"
        };
        var g12 = {
            color: "#81F79F",
            cardname: "6"
        };
        var g13 = {
            color: "#81F79F",
            cardname: "6"
        };
        var g14 = {
            color: "#81F79F",
            cardname: "7"
        };
        var g15 = {
            color: "#81F79F",
            cardname: "7"
        };
        var g16 = {
            color: "#81F79F",
            cardname: "8"
        };
        var g17 = {
            color: "#81F79F",
            cardname: "8"
        };
        var g18 = {
            color: "#81F79F",
            cardname: "9"
        };
        var g19 = {
            color: "#81F79F",
            cardname: "9"
        };
        var g20 = {
            color: "#81F79F",
            cardname: "+2"
        };
        var g21 = {
            color: "#81F79F",
            cardname: "+2"
        };
        var g22 = {
            color: "#81F79F",
            cardname: "time out"
        };
        var g23 = {
            color: "#81F79F",
            cardname: "time out"
        };
        var g24 = {
            color: "#81F79F",
            cardname: "retour"
        };
        var g25 = {
            color: "#81F79F",
            cardname: "retour"
        };
        //Gelbe Kar  
        var y1 = {
            color: "#F3F781",
            cardname: "0"
        };
        var y2 = {
            color: "#F3F781",
            cardname: "1"
        };
        var y3 = {
            color: "#F3F781",
            cardname: "1"
        };
        var y4 = {
            color: "#F3F781",
            cardname: "2"
        };
        var y5 = {
            color: "#F3F781",
            cardname: "2"
        };
        var y6 = {
            color: "#F3F781",
            cardname: "3"
        };
        var y7 = {
            color: "#F3F781",
            cardname: "3"
        };
        var y8 = {
            color: "#F3F781",
            cardname: "4"
        };
        var y9 = {
            color: "#F3F781",
            cardname: "4"
        };
        var y10 = {
            color: "#F3F781",
            cardname: "5"
        };
        var y11 = {
            color: "#F3F781",
            cardname: "5"
        };
        var y12 = {
            color: "#F3F781",
            cardname: "6"
        };
        var y13 = {
            color: "#F3F781",
            cardname: "6"
        };
        var y14 = {
            color: "#F3F781",
            cardname: "7"
        };
        var y15 = {
            color: "#F3F781",
            cardname: "7"
        };
        var y16 = {
            color: "#F3F781",
            cardname: "8"
        };
        var y17 = {
            color: "#F3F781",
            cardname: "8"
        };
        var y18 = {
            color: "#F3F781",
            cardname: "9"
        };
        var y19 = {
            color: "#F3F781",
            cardname: "9"
        };
        var y20 = {
            color: "#F3F781",
            cardname: "+2"
        };
        var y21 = {
            color: "#F3F781",
            cardname: "+2"
        };
        var y22 = {
            color: "#F3F781",
            cardname: "time out"
        };
        var y23 = {
            color: "#F3F781",
            cardname: "time out"
        };
        var y24 = {
            color: "#F3F781",
            cardname: "retour"
        };
        var y25 = {
            color: "#F3F781",
            cardname: "retour"
        };
        //Blaue Ka  
        var b1 = {
            color: "#2E9AFE",
            cardname: "0"
        };
        var b2 = {
            color: "#2E9AFE",
            cardname: "1"
        };
        var b3 = {
            color: "#2E9AFE",
            cardname: "1"
        };
        var b4 = {
            color: "#2E9AFE",
            cardname: "2"
        };
        var b5 = {
            color: "#2E9AFE",
            cardname: "2"
        };
        var b6 = {
            color: "#2E9AFE",
            cardname: "3"
        };
        var b7 = {
            color: "#2E9AFE",
            cardname: "3"
        };
        var b8 = {
            color: "#2E9AFE",
            cardname: "4"
        };
        var b9 = {
            color: "#2E9AFE",
            cardname: "4"
        };
        var b10 = {
            color: "#2E9AFE",
            cardname: "5"
        };
        var b11 = {
            color: "#2E9AFE",
            cardname: "5"
        };
        var b12 = {
            color: "#2E9AFE",
            cardname: "6"
        };
        var b13 = {
            color: "#2E9AFE",
            cardname: "6"
        };
        var b14 = {
            color: "#2E9AFE",
            cardname: "7"
        };
        var b15 = {
            color: "#2E9AFE",
            cardname: "7"
        };
        var b16 = {
            color: "#2E9AFE",
            cardname: "8"
        };
        var b17 = {
            color: "#2E9AFE",
            cardname: "8"
        };
        var b18 = {
            color: "#2E9AFE",
            cardname: "9"
        };
        var b19 = {
            color: "#2E9AFE",
            cardname: "9"
        };
        var b20 = {
            color: "#2E9AFE",
            cardname: "+2"
        };
        var b21 = {
            color: "#2E9AFE",
            cardname: "+2"
        };
        var b22 = {
            color: "#2E9AFE",
            cardname: "time out"
        };
        var b23 = {
            color: "#2E9AFE",
            cardname: "time out"
        };
        var b24 = {
            color: "#2E9AFE",
            cardname: "retour"
        };
        var b25 = {
            color: "#2E9AFE",
            cardname: "retour"
        };
        //Schwarze Kn 
        var s1 = {
            color: "black",
            cardname: "+4"
        };
        var s2 = {
            color: "black",
            cardname: "+4"
        };
        var s3 = {
            color: "black",
            cardname: "+4"
        };
        var s4 = {
            color: "black",
            cardname: "+4"
        };
        var s5 = {
            color: "black",
            cardname: "wish"
        };
        var s6 = {
            color: "black",
            cardname: "wish"
        };
        var s7 = {
            color: "black",
            cardname: "wish"
        };
        var s8 = {
            color: "black",
            cardname: "wish"
        };
        var AllCards = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25,
            g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25,
            y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16, y17, y18, y19, y20, y21, y22, y23, y24, y25,
            b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25,
            s1, s2, s3, s4, s5, s6, s7, s8];
        function random(Zufall) { return Math.floor(Math.random() * Math.floor(Zufall)); }
        var TypeNumber;
        var ChooseCards = prompt("Gebe ein mit wie vielen Karten du spielen moechtest");
        TypeNumber = Number(ChooseCards); //Kartenauswahl wird in Anzahl zurückgegeben damit man eine zahl eingeben kann
        //function placeDiv, erstellt Dokument in HTML, div ist kind von body
        function placeDiv(_color, Karte, Eingabe) {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + Eingabe);
            document.getElementById("a" + Eingabe).innerHTML += Karte;
            //CSS Style Deklaration
            var s = div.style;
            s.border = "solid black";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 150 + "px";
            s.height = 200 + "px";
            s.left = (Eingabe + 1) * 160 + "px"; //Abstand zwischen den Spielkarten nach jeder Wiederholung
            s.bottom = 130 + "px";
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
        for (var i = 0; i < TypeNumber; i++) {
            var loeschen = random(AllCards.length);
            placeDiv(AllCards[loeschen].color, AllCards[loeschen].cardname, i);
            AllCards.splice(loeschen, 1);
            continue;
        }
    }
    document.addEventListener("DOMContentLoaded", (game));
})(Aufgabe2neu || (Aufgabe2neu = {}));
//# sourceMappingURL=neuneu.js.map