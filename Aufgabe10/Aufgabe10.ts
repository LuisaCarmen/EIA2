 namespace L10_Animation {
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snow[] = [];

    function init(_event: Event): void {
        

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        for (let i: number = 0; i < 20; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 4 - 2;
            snow.dy = Math.random() * 4 - 2;
            snow.color = "#00ff00";

            snowflakes.push(snow);
        }

        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < 20; i++) {
            let snow: Snow = stars[i];
            snow.moveSnow();
            snow.drawSnow(); 
        }

        console.log("Update");
    }
}
    
    
    function init1(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
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
    function sky(): void {

        crc2.fillStyle = "#58D3F7";
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }

    
    //Rodelhang
    function hill(): void {

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
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

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
        crc2.strokeStyle = "green";
        crc2.lineWidth = 1;

        crc2.beginPath();
        crc2.moveTo(_x - 20, _y - 8);//linke ecke
        crc2.lineTo(_x, _y - 70);//höhe
        crc2.lineTo(_x + 20, _y - 8);//rechte ecke
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 1;

        
       
        
    }

    //Schlitten
    
    function sled(): void {
        
   
            
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 4;

            crc2.beginPath();
            crc2.moveTo(100, 610);
            crc2.lineTo(130, 585); //unten
            crc2.moveTo(110, 602); //mittelinks
            crc2.lineTo(100, 590); //mittelinks
            crc2.moveTo( 120, 594); //mitterechts
            crc2.lineTo(111, 581);
            crc2.moveTo( 90, 598); //sitz
            crc2.lineTo(120, 573);
            crc2.moveTo(100, 610);
            crc2.quadraticCurveTo( 80, 630, 80, 575); //kurve
            crc2.stroke();
       
    }

    function sled2(): void {
     
        crc2.strokeStyle = "#8B4513";
        crc2.lineWidth = 4;

        crc2.beginPath();
        crc2.moveTo(200, 510);
        crc2.lineTo(230, 485);
        crc2.moveTo(210, 503);
        crc2.lineTo(200, 490);
        crc2.moveTo(220, 494);
        crc2.lineTo(211, 481);
        crc2.moveTo(190, 498);
        crc2.lineTo(220, 473);
        crc2.moveTo(230, 485);
        crc2.quadraticCurveTo(250, 470, 230, 470);
        crc2.stroke();
    }
    
    
    //Kinder

    function child(): void {
        
        for (let i: number = 0; i < 2; i++) {
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(88, 595); //bein oberschenkel
            crc2.lineTo(107, 580); //
            crc2.lineTo(110, 560); //
            crc2.lineTo(85, 576); //länge arm links
            crc2.moveTo(110, 562); //arm rechts
            crc2.lineTo(80, 578); //arm links
            crc2.moveTo(90, 595); //armlang
            crc2.lineTo( 99, 610); //bein unterschenkel
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo( 109, 570); //hals
            crc2.arc( 105, 550, 6, 0, 2 * Math.PI); //kopf
            crc2.fill();
            crc2.stroke();
        }
    }

    function child2(): void {
        

        crc2.strokeStyle = "#000000";
        crc2.lineWidth = 3;

        crc2.beginPath();
        crc2.moveTo(250, 470);//bein links
        crc2.lineTo(252, 450);//
        crc2.lineTo(262, 460);//bein rechts
        crc2.moveTo(252, 460);//körper
        crc2.lineTo(252, 430);
        crc2.lineTo(247, 455);
        crc2.lineTo(230, 470);
        crc2.moveTo(252, 435);
        crc2.lineTo(270, 420);
        crc2.stroke();

        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(252, 430);
        crc2.arc(252, 422, 6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();

    }
}