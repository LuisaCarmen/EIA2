var aufgabe10;
(function (aufgabe10) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let child1 = [];
    let imgData;
    let snowballs = [];
    let score = 0;
    function init() {
        child1 = [];
        snowballs = [];
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("highscore").style.display = "none";
        document.getElementById("malus").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "initial";
        document.getElementById("start").addEventListener("click", main);
        document.getElementById("refresh").addEventListener("click", highscores);
    }
    function main(_event) {
        score = 0;
        child1 = [];
        snowballs = [];
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("retry").style.display = "none";
        document.getElementById("highscore").style.display = "none";
        document.getElementById("refresh").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("score").style.display = "initial";
        document.getElementById("malus").style.display = "initial";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", throwSnowball);
        aufgabe10.crc2 = canvas.getContext("2d");
        sky();
        hill();
        sun();
        cloud();
        cloud2();
        cloud3();
        trees();
        imgData = aufgabe10.crc2.getImageData(0, 0, 500, 800);
        for (let i = 0; i < 8; i++) {
            createChild();
        }
        for (let i = 0; i < 50; i++) {
            let snow = new aufgabe10.Snow();
            snow.x = Math.random() * aufgabe10.crc2.canvas.width;
            snow.y = Math.random() * aufgabe10.crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";
            snowflakes.push(snow);
        }
        update();
    }
    function sky() {
        aufgabe10.crc2.fillStyle = "#58D3F7";
        aufgabe10.crc2.fillRect(0, 0, aufgabe10.crc2.canvas.width, 110);
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(0, 110);
        aufgabe10.crc2.lineTo(0, 400);
        aufgabe10.crc2.lineTo(500, 110);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.fill();
    }
    //Rodelhang
    function hill() {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(200, 800);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.fill();
    }
    //Sonne links oben
    function sun() {
        aufgabe10.crc2.fillStyle = "#ffff66";
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.arc(20, 20, 70, 0, 2 * Math.PI);
        aufgabe10.crc2.fill();
    }
    //Wolken
    function cloud() {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(70, 170);
        aufgabe10.crc2.arc(40, 170, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.arc(60, 160, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.arc(60, 180, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.moveTo(65, 170);
        aufgabe10.crc2.arc(90, 170, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.fillStyle = "#ffffff";
        aufgabe10.crc2.fill();
    }
    function cloud2() {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(135, 250);
        aufgabe10.crc2.arc(135, 245, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.arc(150, 240, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.arc(155, 265, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.moveTo(165, 250);
        aufgabe10.crc2.arc(180, 250, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.fillStyle = "#ffffff";
        aufgabe10.crc2.fill();
    }
    function cloud3() {
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(240, 90);
        aufgabe10.crc2.arc(245, 85, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.arc(280, 60, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.arc(270, 90, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.moveTo(284, 80);
        aufgabe10.crc2.arc(290, 80, 30, 0, 2 * Math.PI);
        aufgabe10.crc2.fillStyle = "#ffffff";
        aufgabe10.crc2.fill();
    }
    //Bäume
    function trees() {
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * aufgabe10.crc2.canvas.width;
            let y = Math.random() * aufgabe10.crc2.canvas.height;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(0, 600);
            aufgabe10.crc2.bezierCurveTo(25, 205, 505, 370, 290, 230);
            if (aufgabe10.crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }
    function drawTrees(_x, _y) {
        aufgabe10.crc2.fillStyle = "brown";
        aufgabe10.crc2.strokeStyle = "brown";
        aufgabe10.crc2.lineWidth = 2;
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x + 5, _y + 9);
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.fill();
        aufgabe10.crc2.stroke();
        aufgabe10.crc2.fillStyle = "green";
        aufgabe10.crc2.strokeStyle = "#006400";
        aufgabe10.crc2.lineWidth = 3;
        aufgabe10.crc2.beginPath();
        aufgabe10.crc2.moveTo(_x - 20, _y - 8); //linke ecke
        aufgabe10.crc2.lineTo(_x, _y - 70); //höhe
        aufgabe10.crc2.lineTo(_x + 20, _y - 8); //rechte ecke
        aufgabe10.crc2.closePath();
        aufgabe10.crc2.fill();
        aufgabe10.crc2.stroke();
        aufgabe10.crc2.fillStyle = "brown";
        aufgabe10.crc2.strokeStyle = "brown";
        aufgabe10.crc2.lineWidth = 1;
    }
    function createChild() {
        let children1 = new aufgabe10.Child1();
        children1.x = 600;
        children1.y = Math.random() * +800;
        children1.dx = Math.random() * 1 - 2.5;
        children1.dy = -children1.dx;
        children1.state = "down";
        child1.push(children1);
    }
    function throwSnowball(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let ball = new aufgabe10.Snowball1();
        ball.x = x;
        ball.y = y;
        ball.timer = 25;
        snowballs.push(ball);
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
    }
    let address = "https://eia2-18.herokuapp.com/";
    function sendRequestWithCustomData() {
        console.log("requestcustom");
        let xhr = new XMLHttpRequest();
        let sendString = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;
        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    function endscreen() {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        document.getElementById("malus").style.display = "none";
        document.getElementById("balls").style.display = "none";
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("insert").addEventListener("click", sendRequestWithCustomData);
        document.getElementById("insert").addEventListener("click", init);
    }
    function highscores() {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("highscore").style.display = "initial";
        document.getElementById("refresh").addEventListener("click", highscores);
        document.getElementById("malus").style.display = "none";
    }
    function update() {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
            let ballCount = snowballs.length;
            document.getElementById("balls").innerHTML = "Snowball amount:" + ballCount.toString() + "";
            window.setTimeout(update, 1000 / fps);
            aufgabe10.crc2.putImageData(imgData, 0, 0);
            document.getElementById("score").innerText = score.toString();
            for (let i = 0; i < snowflakes.length; i++) {
                let snow = snowflakes[i];
                snow.move();
                snow.draw();
            }
            for (let i = 0; i < child1.length; i++) {
                let children1 = child1[i];
                children1.move();
                children1.draw();
            }
            for (let i = 0; i < child1.length; i++) {
                child1[i].move();
                child1[i].draw();
                if (child1[i].x < -10 || child1[i].y > (aufgabe10.crc2.canvas.height + 10)) {
                    child1.splice(i, 1);
                    createChild();
                    console.log("length:" + child1.length);
                }
            }
            for (let i = 0; i < snowballs.length; i++) {
                if (snowballs[i].timer > 0) {
                    snowballs[i].draw();
                }
                else if (snowballs[i].timer == 0) {
                    snowballs[i].draw();
                    for (let i2 = 0; i2 < child1.length; i2++) {
                        if (snowballs[i].checkIfHit(child1[i2].x, child1[i2].y) == true && child1[i2].state == "down") {
                            score += child1[i2].calculateSpeed() * 10;
                            child1[i2].state = "shot";
                        }
                        if (snowballs[i].checkIfHitUp(child1[i2].x, child1[i2].y) == true && child1[i2].state == "up") {
                            score += child1[i2].calculateSpeed() * 10;
                            child1[i2].state = "shot";
                        }
                    }
                }
                if (snowballs.length < 25) {
                    document.getElementById("balls").innerHTML = "Snowball amount:" + ballCount.toString() + "";
                }
                if (snowballs.length > 25) {
                    endscreen();
                }
            }
        }
    }
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=main.js.map