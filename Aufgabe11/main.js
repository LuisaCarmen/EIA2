var aufgabe11;
(function (aufgabe11) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let everything = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        aufgabe11.crc2 = canvas.getContext("2d");
        sky();
        hill();
        sun();
        cloud();
        cloud2();
        cloud3();
        imgData = aufgabe11.crc2.getImageData(0, 0, 500, 800);
        for (let i = 0; i < 50; i++) {
            let snow = new aufgabe11.Snow();
            snow.x = Math.random() * aufgabe11.crc2.canvas.width;
            snow.y = Math.random() * aufgabe11.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";
            everything.push(snow);
        }
        for (let i = 0; i < 10; i++) {
            let child = new aufgabe11.Kids();
            child.x = 0;
            child.y = Math.random() * 200 + 750;
            child.dx = Math.random() * 3;
            child.dy = -child.dx;
            child.state = "drive";
            everything.push(child);
        }
        for (let i = 0; i < 10; i++) {
            let tree = new aufgabe11.Trees();
            tree.x = Math.random() * aufgabe11.crc2.canvas.width;
            tree.y = Math.random() * aufgabe11.crc2.canvas.height;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(0, 600);
            aufgabe11.crc2.bezierCurveTo(120, 300, 600, 410, 350, 290);
            if (aufgabe11.crc2.isPointInPath(tree.x, tree.y)) {
                everything.push(tree);
            }
            else {
                i--;
            }
        }
        update();
    }
    //Himmel
    function sky() {
        aufgabe11.crc2.fillStyle = "#58D3F7";
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(0, 800);
        aufgabe11.crc2.bezierCurveTo(0, 550, 220, 200, 810, 150);
        aufgabe11.crc2.lineTo(500, 0);
        aufgabe11.crc2.lineTo(0, 0);
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.lineWidth = 2;
        aufgabe11.crc2.stroke();
        aufgabe11.crc2.fill();
    }
    //Rodelhang
    function hill() {
        aufgabe11.crc2.fillStyle = "#ffffff";
        aufgabe11.crc2.strokeStyle = "#ffffff";
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(0, 500);
        aufgabe11.crc2.bezierCurveTo(170, 400, 250, 310, 460, 230);
        aufgabe11.crc2.lineTo(360, 800);
        aufgabe11.crc2.lineTo(0, 1000);
        aufgabe11.crc2.closePath();
        aufgabe11.crc2.lineWidth = 2;
        aufgabe11.crc2.stroke();
        aufgabe11.crc2.fill();
    }
    //Sonne links oben
    function sun() {
        aufgabe11.crc2.fillStyle = "#ffff66";
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.arc(20, 20, 70, 0, 2 * Math.PI);
        aufgabe11.crc2.fill();
    }
    //Wolken
    function cloud() {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(70, 170);
        aufgabe11.crc2.arc(40, 170, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.arc(60, 160, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.arc(60, 180, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.moveTo(65, 170);
        aufgabe11.crc2.arc(90, 170, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.fillStyle = "#ffffff";
        aufgabe11.crc2.fill();
    }
    function cloud2() {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(135, 250);
        aufgabe11.crc2.arc(135, 245, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.arc(150, 240, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.arc(155, 265, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.moveTo(165, 250);
        aufgabe11.crc2.arc(180, 250, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.fillStyle = "#ffffff";
        aufgabe11.crc2.fill();
    }
    function cloud3() {
        aufgabe11.crc2.beginPath();
        aufgabe11.crc2.moveTo(240, 90);
        aufgabe11.crc2.arc(245, 85, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.arc(280, 60, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.arc(270, 90, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.moveTo(284, 80);
        aufgabe11.crc2.arc(290, 80, 30, 0, 2 * Math.PI);
        aufgabe11.crc2.fillStyle = "#ffffff";
        aufgabe11.crc2.fill();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aufgabe11.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < everything.length; i++) {
            everything[i].move();
            everything[i].draw();
        }
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=main.js.map