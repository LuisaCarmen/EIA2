namespace aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snow[] = [];
    let child1: ChildPull[] = [];
    let child2: ChildDrive[] = [];
    let trees: Trees[] = [];
    let imgData: ImageData;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        sky();
        hill();
        sun();
        cloud();
        cloud2();
        cloud3();


        imgData = crc2.getImageData(0, 0, 500, 800);

        for (let i: number = 0; i < 50; i++) {
            let snow: Snow = new Snow();
            snow.x = Math.random() * crc2.canvas.width;
            snow.y = Math.random() * crc2.canvas.height;
            snow.dx = Math.random() * 2 + 4;
            snow.color = "#FFFFFF";

            snowflakes.push(snow);
        }





        for (let i: number = 0; i < 6; i++) {
            let child: ChildPull = new ChildPull();
            child.x = 0;
            child.y = Math.random() * 200 + 750;
            child.dx = Math.random() * 3;
            child.dy = - child.dx;

            child1.push(child);

        }


        
        for (let i: number = 0; i < 6; i++) {
            let child: ChildDrive = new ChildDrive();
            child.x = 360;
            child.y = Math.random() * 0 + 750;
            child.dx = Math.random() * 3 - 5;
            child.dy = - child.dx;

            child2.push(child);

        }

        


        for (let i: number = 0; i < 10; i++) {
            let tree: Trees = new Trees();

            tree.x = Math.random() * crc2.canvas.width;
            tree.y = Math.random() * crc2.canvas.height;

            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.bezierCurveTo(120, 300, 600, 410, 350, 290);

            if (crc2.isPointInPath(tree.x, tree.y)) {
                trees.push(tree);
            }
            else {
                i--;
            }
        }


        update();
    }




    //Himmel
    function sky(): void {

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
    function hill(): void {

        crc2.fillStyle = "#ffffff";
        crc2.strokeStyle = "#ffffff";
        crc2.beginPath();
        crc2.moveTo(0, 500);
        crc2.bezierCurveTo(170, 400, 250, 310, 460, 230);
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




    function update(): void {

        window.setTimeout(update, 1000 / fps);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < snowflakes.length; i++) {
            let snow: Snow = snowflakes[i];
            snow.move();
            snow.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let children1: ChildPull = child1[i];
            children1.move();
            children1.draw();
        }
        for (let i: number = 0; i < 4; i++) {
            let children2: ChildDrive = child2[i];
            children2.move();
            children2.draw();
        }

        for (let i: number = 0; i < 8; i++) {
            let tree: Trees = trees[i];
            tree.draw();
        }

    }

}