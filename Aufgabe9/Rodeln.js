var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        sky();
        hill();
        sun();
        snowflakes();
        cloud();
        cloud2();
        cloud3();
        trees();
        child();
        child2();
    }
    //Himmel
    function sky() {
        crc2.fillStyle = "#58D3F7";
        crc2.beginPath();
        crc2.moveTo(0, 800);
        crc2.bezierCurveTo(0, 550, 220, 200, 810, 150);
        crc2.lineTo(500, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    //Rodelhang
    function hill() {
        crc2.fillStyle = "#ffffff";
        crc2.strokeStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.bezierCurveTo(140, 400, 250, 310, 460, 230);
        crc2.lineTo(360, 800);
        crc2.lineTo(0, 1000);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
    //Sonne links oben
    function sun() {
        crc2.fillStyle = "#ffff66";
        crc2.beginPath();
        crc2.arc(20, 20, 70, 0, 2 * Math.PI);
        crc2.fill();
    }
    //Schneeflocken
    function snowflakes() {
        for (let i = 0; i < 250; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawSnowflake(x, y);
        }
    }
    function drawSnowflake(_a, _b) {
        crc2.beginPath();
        crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F5FEFF";
        crc2.fill();
        crc2.lineWidth = .2;
        crc2.strokeStyle = "#D2EEF2";
        crc2.stroke();
    }
    //Wolken
    function cloud() {
        crc2.beginPath();
        crc2.moveTo(70, 170);
        crc2.arc(40, 170, 30, 0, 2 * Math.PI);
        crc2.arc(60, 160, 30, 0, 2 * Math.PI);
        crc2.arc(60, 180, 30, 0, 2 * Math.PI);
        crc2.moveTo(65, 170);
        crc2.arc(90, 170, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function cloud2() {
        crc2.beginPath();
        crc2.moveTo(135, 250);
        crc2.arc(135, 245, 30, 0, 2 * Math.PI);
        crc2.arc(150, 240, 30, 0, 2 * Math.PI);
        crc2.arc(155, 265, 30, 0, 2 * Math.PI);
        crc2.moveTo(165, 250);
        crc2.arc(180, 250, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function cloud3() {
        crc2.beginPath();
        crc2.moveTo(240, 90);
        crc2.arc(245, 85, 30, 0, 2 * Math.PI);
        crc2.arc(280, 60, 30, 0, 2 * Math.PI);
        crc2.arc(270, 90, 30, 0, 2 * Math.PI);
        crc2.moveTo(284, 80);
        crc2.arc(290, 80, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //Bäume
    function trees() {
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(0, 500);
            crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
            if (crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 9);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 8); //linke ecke
        crc2.lineTo(_x, _y - 70); //höhe
        crc2.lineTo(_x + 20, _y - 8); //rechte ecke
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 1;
    }
    //Kinder
    function child() {
        for (let i = 0; i < 7; i++) {
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo((i * 20) + 88, 595); //bein oberschenkel
            crc2.lineTo((i * 20) + 107, 580); //
            crc2.lineTo((i * 20) + 110, 560); //
            crc2.lineTo((i * 20) + 85, 576); //länge arm links
            crc2.moveTo((i * 20) + 110, 562); //arm rechts
            crc2.lineTo((i * 20) + 80, 578); //arm links
            crc2.moveTo((i * 20) + 90, 595); //armlang
            crc2.lineTo((i * 20) + 99, 610); //bein unterschenkel
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo((i * 20) + 109, 570); //hals
            crc2.arc((i * 20) + 105, 550, 6, 0, 2 * Math.PI); //kopf
            crc2.fill();
            crc2.stroke();
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo((i * 20) + 100, 610);
            crc2.lineTo((i * 20) + 130, 585); //unten
            crc2.moveTo((i * 20) + 110, 602); //mittelinks
            crc2.lineTo((i * 20) + 100, 590); //mittelinks
            crc2.moveTo((i * 20) + 120, 594); //mitterechts
            crc2.lineTo((i * 20) + 111, 581);
            crc2.moveTo((i * 20) + 90, 598); //sitz
            crc2.lineTo((i * 20) + 120, 573);
            crc2.moveTo((i * 20) + 100, 610);
            crc2.quadraticCurveTo((i * 20) + 80, 630, (i * 20) + 80, 575); //kurve
            crc2.stroke();
        }
    }
    function child2() {
        for (let i = 0; i < 3; i++) {
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo((i * 20) + 350, 570); //bein links
            crc2.lineTo((i * 20) + 352, 550); //
            crc2.lineTo((i * 20) + 362, 560); //bein rechts
            crc2.moveTo((i * 20) + 352, 560); //körper
            crc2.lineTo((i * 20) + 352, 530);
            crc2.lineTo((i * 20) + 347, 555);
            crc2.lineTo((i * 20) + 330, 570);
            crc2.moveTo((i * 20) + 352, 535);
            crc2.lineTo((i * 20) + 370, 520);
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo((i * 20) + 352, 530);
            crc2.arc((i * 20) + 352, 522, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo((i * 20) + 300, 610);
            crc2.lineTo((i * 20) + 330, 585);
            crc2.moveTo((i * 20) + 310, 603);
            crc2.moveTo((i * 20) + 330, 585);
            crc2.quadraticCurveTo((i * 20) + 350, 570, (i * 20) + 330, 570);
            crc2.stroke();
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Rodeln.js.map