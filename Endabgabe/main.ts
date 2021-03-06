namespace endabgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snow[] = [];
    let child1: Child1[] = [];
    let imgData: ImageData;
    let snowballs: Snowball1[] = [];
    let score: number = 0;




    //init funktion, startbildschirm, start und highscores anzeigen lassen
    function init(): void {

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







    //mainscreen erstellen, canvas und score anzeigen lassen
    function main(_event: Event): void {



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




        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        canvas.addEventListener("click", throwBall);

        crc2 = canvas.getContext("2d");

        sky();
        hill();
        sun();
        cloud();
        cloud2();
        cloud3();
        trees();

        imgData = crc2.getImageData(0, 0, 500, 800);


        for (let i: number = 0; i < 8; i++) {
            designChild();
        }

        for (let i: number = 0; i < 50; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";

            snowflakes.push(snow);



        }








        update();
    }





    function sky(): void {
        crc2.fillStyle = "#58D3F7";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);

        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 400);
        crc2.lineTo(500, 110);
        crc2.closePath();

        crc2.fill();
    }

    //Rodelhang
    function hill(): void {

        crc2.beginPath();
        crc2.moveTo(200, 800);
        crc2.closePath();
        crc2.fill();

    }

    //Sonne links oben
    function sun(): void {

        crc2.fillStyle = "#ffff66";
        crc2.beginPath();
        crc2.arc(20, 20, 70, 0, 2 * Math.PI);
        crc2.fill();
    }

    //Wolken

    function cloud(): void {
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

    function cloud2(): void {
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


    function cloud3(): void {
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

    function trees(): void {
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.bezierCurveTo(25, 205, 505, 370, 290, 230);

            if (crc2.isPointInPath(x, y)) {
                drawTrees(x, y);
            }
            else {
                i--;
            }
        }
    }

    function drawTrees(_x: number, _y: number): void {


        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 2;

        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 9);



        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "green";
        crc2.strokeStyle = "#006400";
        crc2.lineWidth = 3;

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


    function designChild(): void {

        let children1: Child1 = new Child1();
        children1.x = 600;
        children1.y = Math.random() * + 800;
        children1.dx = Math.random() * 1 - 2.5;
        children1.dy = - children1.dx;
        children1.state = "down";
        child1.push(children1);


    }

    //Schneeball werfen und in das array pushen
    function throwBall(_event: MouseEvent): void {


        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let ball: Snowball1 = new Snowball1();
        ball.x = x;
        ball.y = y;
        ball.time = 25;
        snowballs.push(ball);
    }



    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
    }

    let address: string = "https://eia2-18.herokuapp.com/";

    function sendRequestWithCustomData(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let sendString: string = "";
        sendString += "name:" + document.getElementById("textInput").getAttribute("value") + "&" + "score:" + score;

        xhr.open("GET", address + "?" + sendString, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        highscores();
    }


    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
}

    //Endbildschirm mit Namensfeld und send button, score wird angezeigt
    function endscreen(): void {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "initial";
        document.getElementById("malus").style.display = "none";
        document.getElementById("balls").style.display = "none";
         document.getElementById("refresh").addEventListener("click", highscores);


        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);

        document.getElementById("insert").addEventListener("click", sendRequestWithCustomData);
        // document.getElementById("insert").addEventListener("click", highscores);

    }
    //Highscore Bildschi   
    function highscores(): void {
        document.getElementById("endscore").innerText = score.toString();
        document.getElementById("endscore").setAttribute("value", score.toString());
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementsByTagName("div")[0].style.display = "none";
        document.getElementById("endscreen").style.display = "none";
        document.getElementById("highscore").style.display = "initial";
        // document.getElementById("scores").style.display = "initial";
        document.getElementById("refresh").addEventListener("click", highscores);
        document.getElementById("malus").style.display = "none";
    }









    function update(): void {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {

            let ballCount: number = snowballs.length;
            document.getElementById("balls").innerHTML = "Snowball amount:" + ballCount.toString() + "";
            window.setTimeout(update, 1000 / fps);
            crc2.putImageData(imgData, 0, 0);

            document.getElementById("score").innerText = score.toString();





            for (let i: number = 0; i < snowflakes.length; i++) {
                let snow: Snow = snowflakes[i];
                snow.move();
                snow.draw();
            }

            for (let i: number = 0; i < child1.length; i++) {
                let children1: Child1 = child1[i];
                children1.move();
                children1.draw();
            }



            for (let i: number = 0; i < child1.length; i++) {
                child1[i].move();
                child1[i].draw();
                if (child1[i].x < -10 || child1[i].y > (crc2.canvas.height + 10)) {
                    child1.splice(i, 1);
                    designChild();
                }
            }




            for (let i: number = 0; i < snowballs.length; i++) {
                if (snowballs[i].time > 0) {
                    snowballs[i].draw();
                }
                else if (snowballs[i].time == 0) {
                    snowballs[i].draw();
                    for (let i1: number = 0; i1 < child1.length; i1++) {
                        if (snowballs[i].checkIfHit(child1[i1].x, child1[i1].y) == true && child1[i1].state == "down") {
                            score += child1[i1].calculateSpeed() * 10;
                            child1[i1].state = "shot";

                        }
                        if (snowballs[i].checkIfHitUp(child1[i1].x, child1[i1].y) == true && child1[i1].state == "up") {
                            score += child1[i1].calculateSpeed() * 10;
                            child1[i1].state = "shot";

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




}