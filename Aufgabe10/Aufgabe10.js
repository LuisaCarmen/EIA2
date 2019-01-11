var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe9.crc2 = canvas.getContext("2d");
        sky();
        hill();
        sun();
        snowflakes();
        cloud();
        cloud2();
        cloud3();
        trees();
        sled();
        sled2();
        child();
        child2();
    }
    //Himmel
    function sky() {
        Aufgabe9.crc2.fillStyle = "#58D3F7";
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(0, 600);
        Aufgabe9.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        Aufgabe9.crc2.lineTo(360, 0);
        Aufgabe9.crc2.lineTo(0, 0);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.lineWidth = 2;
        Aufgabe9.crc2.stroke();
        Aufgabe9.crc2.fill();
    }
    //Rodelhang
    function hill() {
        Aufgabe9.crc2.fillStyle = "#ffffff";
        Aufgabe9.crc2.strokeStyle = "#ffffff";
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(0, 500);
        Aufgabe9.crc2.bezierCurveTo(140, 400, 250, 310, 460, 230);
        Aufgabe9.crc2.lineTo(360, 800);
        Aufgabe9.crc2.lineTo(0, 1000);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.lineWidth = 2;
        Aufgabe9.crc2.stroke();
        Aufgabe9.crc2.fill();
    }
    //Sonne links oben
    function sun() {
        Aufgabe9.crc2.fillStyle = "#ffff66";
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(20, 20, 70, 0, 2 * Math.PI);
        Aufgabe9.crc2.fill();
    }
    //Schneeflocken
    function snowflakes() {
        for (let i = 0; i < 250; i++) {
            let x = Math.random() * Aufgabe9.crc2.canvas.width;
            let y = Math.random() * Aufgabe9.crc2.canvas.height;
            drawSnowflake(x, y);
        }
    }
    function drawSnowflake(_a, _b) {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        Aufgabe9.crc2.fillStyle = "#ffffff";
        Aufgabe9.crc2.fill();
    }
    //Wolken
    function cloud() {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(70, 170);
        Aufgabe9.crc2.arc(40, 170, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.arc(60, 160, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.arc(60, 180, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.moveTo(65, 170);
        Aufgabe9.crc2.arc(90, 170, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.fillStyle = "#ffffff";
        Aufgabe9.crc2.fill();
    }
    function cloud2() {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(135, 250);
        Aufgabe9.crc2.arc(135, 245, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.arc(150, 240, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.arc(155, 265, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.moveTo(165, 250);
        Aufgabe9.crc2.arc(180, 250, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.fillStyle = "#ffffff";
        Aufgabe9.crc2.fill();
    }
    function cloud3() {
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(240, 90);
        Aufgabe9.crc2.arc(245, 85, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.arc(280, 60, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.arc(270, 90, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.moveTo(284, 80);
        Aufgabe9.crc2.arc(290, 80, 30, 0, 2 * Math.PI);
        Aufgabe9.crc2.fillStyle = "#ffffff";
        Aufgabe9.crc2.fill();
    }
    //Bäume
    function trees() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * Aufgabe9.crc2.canvas.width;
            let y = Math.random() * Aufgabe9.crc2.canvas.height;
            Aufgabe9.crc2.beginPath();
            Aufgabe9.crc2.moveTo(0, 500);
            Aufgabe9.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
            if (Aufgabe9.crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        Aufgabe9.crc2.fillStyle = "brown";
        Aufgabe9.crc2.strokeStyle = "brown";
        Aufgabe9.crc2.lineWidth = 2;
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(_x + 5, _y + 9);
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.stroke();
        Aufgabe9.crc2.fillStyle = "green";
        Aufgabe9.crc2.strokeStyle = "green";
        Aufgabe9.crc2.lineWidth = 1;
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(_x - 20, _y - 8); //linke ecke
        Aufgabe9.crc2.lineTo(_x, _y - 70); //höhe
        Aufgabe9.crc2.lineTo(_x + 20, _y - 8); //rechte ecke
        Aufgabe9.crc2.closePath();
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.stroke();
        Aufgabe9.crc2.fillStyle = "brown";
        Aufgabe9.crc2.strokeStyle = "brown";
        Aufgabe9.crc2.lineWidth = 1;
    }
    //Schlitten
    function sled() {
        Aufgabe9.crc2.strokeStyle = "#8B4513";
        Aufgabe9.crc2.lineWidth = 4;
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(100, 610);
        Aufgabe9.crc2.lineTo(130, 585); //unten
        Aufgabe9.crc2.moveTo(110, 602); //mittelinks
        Aufgabe9.crc2.lineTo(100, 590); //mittelinks
        Aufgabe9.crc2.moveTo(120, 594); //mitterechts
        Aufgabe9.crc2.lineTo(111, 581);
        Aufgabe9.crc2.moveTo(90, 598); //sitz
        Aufgabe9.crc2.lineTo(120, 573);
        Aufgabe9.crc2.moveTo(100, 610);
        Aufgabe9.crc2.quadraticCurveTo(80, 630, 80, 575); //kurve
        Aufgabe9.crc2.stroke();
    }
    function sled2() {
        Aufgabe9.crc2.strokeStyle = "#8B4513";
        Aufgabe9.crc2.lineWidth = 4;
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(200, 510);
        Aufgabe9.crc2.lineTo(230, 485);
        Aufgabe9.crc2.moveTo(210, 503);
        Aufgabe9.crc2.lineTo(200, 490);
        Aufgabe9.crc2.moveTo(220, 494);
        Aufgabe9.crc2.lineTo(211, 481);
        Aufgabe9.crc2.moveTo(190, 498);
        Aufgabe9.crc2.lineTo(220, 473);
        Aufgabe9.crc2.moveTo(230, 485);
        Aufgabe9.crc2.quadraticCurveTo(250, 470, 230, 470);
        Aufgabe9.crc2.stroke();
    }
    //Kinder
    function child() {
        for (let i = 0; i < 2; i++) {
            Aufgabe9.crc2.strokeStyle = "#000000";
            Aufgabe9.crc2.lineWidth = 3;
            Aufgabe9.crc2.beginPath();
            Aufgabe9.crc2.moveTo(88, 595); //bein oberschenkel
            Aufgabe9.crc2.lineTo(107, 580); //
            Aufgabe9.crc2.lineTo(110, 560); //
            Aufgabe9.crc2.lineTo(85, 576); //länge arm links
            Aufgabe9.crc2.moveTo(110, 562); //arm rechts
            Aufgabe9.crc2.lineTo(80, 578); //arm links
            Aufgabe9.crc2.moveTo(90, 595); //armlang
            Aufgabe9.crc2.lineTo(99, 610); //bein unterschenkel
            Aufgabe9.crc2.stroke();
            Aufgabe9.crc2.strokeStyle = "#000000";
            Aufgabe9.crc2.fillStyle = "#000000";
            Aufgabe9.crc2.lineWidth = 3;
            Aufgabe9.crc2.beginPath();
            Aufgabe9.crc2.moveTo(109, 570); //hals
            Aufgabe9.crc2.arc(105, 550, 6, 0, 2 * Math.PI); //kopf
            Aufgabe9.crc2.fill();
            Aufgabe9.crc2.stroke();
        }
    }
    function child2() {
        Aufgabe9.crc2.strokeStyle = "#000000";
        Aufgabe9.crc2.lineWidth = 3;
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(250, 470); //bein links
        Aufgabe9.crc2.lineTo(252, 450); //
        Aufgabe9.crc2.lineTo(262, 460); //bein rechts
        Aufgabe9.crc2.moveTo(252, 460); //körper
        Aufgabe9.crc2.lineTo(252, 430);
        Aufgabe9.crc2.lineTo(247, 455);
        Aufgabe9.crc2.lineTo(230, 470);
        Aufgabe9.crc2.moveTo(252, 435);
        Aufgabe9.crc2.lineTo(270, 420);
        Aufgabe9.crc2.stroke();
        Aufgabe9.crc2.strokeStyle = "#000000";
        Aufgabe9.crc2.fillStyle = "#000000";
        Aufgabe9.crc2.lineWidth = 2;
        Aufgabe9.crc2.beginPath();
        Aufgabe9.crc2.moveTo(252, 430);
        Aufgabe9.crc2.arc(252, 422, 6, 0, 2 * Math.PI);
        Aufgabe9.crc2.fill();
        Aufgabe9.crc2.stroke();
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe10.js.map