var Aufgabe2neu;
(function (Aufgabe2neu) {
    //rote Karten
    let r1 = {
        color: "#DF0101",
        cardname: "0"
    };
    let r2 = {
        color: "#DF0101",
        cardname: "1"
    };
    let r3 = {
        color: "#DF0101",
        cardname: "1"
    };
    let r4 = {
        color: "#DF0101",
        cardname: "2"
    };
    let r5 = {
        color: "#DF0101",
        cardname: "2"
    };
    let r6 = {
        color: "#DF0101",
        cardname: "3"
    };
    let r7 = {
        color: "#DF0101",
        cardname: "3"
    };
    let r8 = {
        color: "#DF0101",
        cardname: "4"
    };
    let r9 = {
        color: "#DF0101",
        cardname: "4"
    };
    let r10 = {
        color: "#DF0101",
        cardname: "5"
    };
    let r11 = {
        color: "#DF0101",
        cardname: "5"
    };
    let r12 = {
        color: "#DF0101",
        cardname: "6"
    };
    let r13 = {
        color: "#DF0101",
        cardname: "6"
    };
    let r14 = {
        color: "#DF0101",
        cardname: "7"
    };
    let r15 = {
        color: "#DF0101",
        cardname: "7"
    };
    let r16 = {
        color: "#DF0101",
        cardname: "8"
    };
    let r17 = {
        color: "#DF0101",
        cardname: "8"
    };
    let r18 = {
        color: "#DF0101",
        cardname: "9"
    };
    let r19 = {
        color: "#DF0101",
        cardname: "9"
    };
    let r20 = {
        color: "#DF0101",
        cardname: "+2"
    };
    let r21 = {
        color: "#DF0101",
        cardname: "+2"
    };
    let r22 = {
        color: "#DF0101",
        cardname: "time out"
    };
    let r23 = {
        color: "#DF0101",
        cardname: "time out"
    };
    let r24 = {
        color: "#DF0101",
        cardname: "retour"
    };
    let r25 = {
        color: "#DF0101",
        cardname: "retour"
    };
    //Grüneten
    let g1 = {
        color: "81F79F",
        cardname: "0"
    };
    let g2 = {
        color: "81F79F",
        cardname: "1"
    };
    let g3 = {
        color: "#81F79F",
        cardname: "1"
    };
    let g4 = {
        color: "#81F79F",
        cardname: "2"
    };
    let g5 = {
        color: "#81F79F",
        cardname: "2"
    };
    let g6 = {
        color: "#81F79F",
        cardname: "3"
    };
    let g7 = {
        color: "#81F79F",
        cardname: "3"
    };
    let g8 = {
        color: "#81F79F",
        cardname: "4"
    };
    let g9 = {
        color: "#81F79F",
        cardname: "4"
    };
    let g10 = {
        color: "#81F79F",
        cardname: "5"
    };
    let g11 = {
        color: "#81F79F",
        cardname: "5"
    };
    let g12 = {
        color: "#81F79F",
        cardname: "6"
    };
    let g13 = {
        color: "#81F79F",
        cardname: "6"
    };
    let g14 = {
        color: "#81F79F",
        cardname: "7"
    };
    let g15 = {
        color: "#81F79F",
        cardname: "7"
    };
    let g16 = {
        color: "#81F79F",
        cardname: "8"
    };
    let g17 = {
        color: "#81F79F",
        cardname: "8"
    };
    let g18 = {
        color: "#81F79F",
        cardname: "9"
    };
    let g19 = {
        color: "#81F79F",
        cardname: "9"
    };
    let g20 = {
        color: "#81F79F",
        cardname: "+2"
    };
    let g21 = {
        color: "#81F79F",
        cardname: "+2"
    };
    let g22 = {
        color: "#81F79F",
        cardname: "time out"
    };
    let g23 = {
        color: "#81F79F",
        cardname: "time out"
    };
    let g24 = {
        color: "#81F79F",
        cardname: "retour"
    };
    let g25 = {
        color: "#81F79F",
        cardname: "retour"
    };
    //Gelbe Kar  
    let y1 = {
        color: "#F3F781",
        cardname: "0"
    };
    let y2 = {
        color: "#F3F781",
        cardname: "1"
    };
    let y3 = {
        color: "#F3F781",
        cardname: "1"
    };
    let y4 = {
        color: "#F3F781",
        cardname: "2"
    };
    let y5 = {
        color: "#F3F781",
        cardname: "2"
    };
    let y6 = {
        color: "#F3F781",
        cardname: "3"
    };
    let y7 = {
        color: "#F3F781",
        cardname: "3"
    };
    let y8 = {
        color: "#F3F781",
        cardname: "4"
    };
    let y9 = {
        color: "#F3F781",
        cardname: "4"
    };
    let y10 = {
        color: "#F3F781",
        cardname: "5"
    };
    let y11 = {
        color: "#F3F781",
        cardname: "5"
    };
    let y12 = {
        color: "#F3F781",
        cardname: "6"
    };
    let y13 = {
        color: "#F3F781",
        cardname: "6"
    };
    let y14 = {
        color: "#F3F781",
        cardname: "7"
    };
    let y15 = {
        color: "#F3F781",
        cardname: "7"
    };
    let y16 = {
        color: "#F3F781",
        cardname: "8"
    };
    let y17 = {
        color: "#F3F781",
        cardname: "8"
    };
    let y18 = {
        color: "#F3F781",
        cardname: "9"
    };
    let y19 = {
        color: "#F3F781",
        cardname: "9"
    };
    let y20 = {
        color: "#F3F781",
        cardname: "+2"
    };
    let y21 = {
        color: "#F3F781",
        cardname: "+2"
    };
    let y22 = {
        color: "#F3F781",
        cardname: "time out"
    };
    let y23 = {
        color: "#F3F781",
        cardname: "time out"
    };
    let y24 = {
        color: "#F3F781",
        cardname: "retour"
    };
    let y25 = {
        color: "#F3F781",
        cardname: "retour"
    };
    //Blaue Ka  
    let b1 = {
        color: "#2E9AFE",
        cardname: "0"
    };
    let b2 = {
        color: "#2E9AFE",
        cardname: "1"
    };
    let b3 = {
        color: "#2E9AFE",
        cardname: "1"
    };
    let b4 = {
        color: "#2E9AFE",
        cardname: "2"
    };
    let b5 = {
        color: "#2E9AFE",
        cardname: "2"
    };
    let b6 = {
        color: "#2E9AFE",
        cardname: "3"
    };
    let b7 = {
        color: "#2E9AFE",
        cardname: "3"
    };
    let b8 = {
        color: "#2E9AFE",
        cardname: "4"
    };
    let b9 = {
        color: "#2E9AFE",
        cardname: "4"
    };
    let b10 = {
        color: "#2E9AFE",
        cardname: "5"
    };
    let b11 = {
        color: "#2E9AFE",
        cardname: "5"
    };
    let b12 = {
        color: "#2E9AFE",
        cardname: "6"
    };
    let b13 = {
        color: "#2E9AFE",
        cardname: "6"
    };
    let b14 = {
        color: "#2E9AFE",
        cardname: "7"
    };
    let b15 = {
        color: "#2E9AFE",
        cardname: "7"
    };
    let b16 = {
        color: "#2E9AFE",
        cardname: "8"
    };
    let b17 = {
        color: "#2E9AFE",
        cardname: "8"
    };
    let b18 = {
        color: "#2E9AFE",
        cardname: "9"
    };
    let b19 = {
        color: "#2E9AFE",
        cardname: "9"
    };
    let b20 = {
        color: "#2E9AFE",
        cardname: "+2"
    };
    let b21 = {
        color: "#2E9AFE",
        cardname: "+2"
    };
    let b22 = {
        color: "#2E9AFE",
        cardname: "time out"
    };
    let b23 = {
        color: "#2E9AFE",
        cardname: "time out"
    };
    let b24 = {
        color: "#2E9AFE",
        cardname: "retour"
    };
    let b25 = {
        color: "#2E9AFE",
        cardname: "retour"
    };
    //Schwarze Kn 
    let s1 = {
        color: "black",
        cardname: "+4"
    };
    let s2 = {
        color: "black",
        cardname: "+4"
    };
    let s3 = {
        color: "black",
        cardname: "+4"
    };
    let s4 = {
        color: "black",
        cardname: "+4"
    };
    let s5 = {
        color: "black",
        cardname: "wish"
    };
    let s6 = {
        color: "black",
        cardname: "wish"
    };
    let s7 = {
        color: "black",
        cardname: "wish"
    };
    let s8 = {
        color: "black",
        cardname: "wish"
    };
    let AllCards = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25,
        g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25,
        y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16, y17, y18, y19, y20, y21, y22, y23, y24, y25,
        b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25,
        s1, s2, s3, s4, s5, s6, s7, s8];
    //Hauptfunktion
    function game() {
        let Anzahl;
        let Eingabe = prompt("Gebe ein mit wie vielen Karten du spielen möchtest!");
        Anzahl = Number(Eingabe);
        for (let Zahl = 0; Zahl < Anzahl; Zahl++) {
            let randomKarte = ZufaelligeNummer(AllCards.length);
            placeDiv(AllCards[randomKarte].color, AllCards[randomKarte].cardname, Zahl);
            AllCards.splice(randomKarte, 1);
            continue;
        }
    }
    function ZufaelligeNummer(Zufall) {
        return Math.floor(Math.random() * Math.floor(Zufall));
    }
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
    document.addEventListener("DOMContentLoaded", (game));
})(Aufgabe2neu || (Aufgabe2neu = {}));
//# sourceMappingURL=neuneu.js.map