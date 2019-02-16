namespace aufgabe10 {

    export class Base {
        x: number;
        y: number;
        color: string;
        move(): void { }
        draw(): void { }
    }

    export class Movement extends Base {
        dx: number;
        dy: number;
        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }
    }

    export class Child1 extends Movement {

       state: string;
       // x: number;
       // y: number;
       // dx: number;
        //dy: number;
       // color: string;


        calculateSpeed(): number {
            if (this.state == "down") {
                return Math.floor(this.dx * this.dy * -1 * 20);
            }
            if (this.state == "up") {
                return Math.floor(this.dx * this.dy * -1 * 15);
            }
        }



        draw(): void {

            if (this.state == "down") {
                this.drawChild();
            }

            if (this.state == "shot") {
                this.drawSled();
            }

            if (this.state == "up") {
                this.drawChildUp();
            }
        }



        drawSled(): void {

            crc2.strokeStyle = "brown";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 30);


            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

        }



        drawChild(): void {



            crc2.strokeStyle = "brown";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 30);
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;



            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 15, this.y - 20);
            crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            crc2.moveTo(this.x + 10, this.y - 40);
            crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y - 50);
            crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }

        drawChildUp(): void {


            crc2.strokeStyle = "brown";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 25);



            crc2.moveTo(this.x + 30, this.y - 25);
            crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

            crc2.beginPath();
            crc2.moveTo(this.x + 50, this.y - 40);
            crc2.lineTo(this.x + 52, this.y - 60);
            crc2.lineTo(this.x + 62, this.y - 45);
            crc2.moveTo(this.x + 52, this.y - 60);
            crc2.lineTo(this.x + 52, this.y - 80);
            crc2.lineTo(this.x + 47, this.y - 60);
            crc2.lineTo(this.x + 30, this.y - 40);
            crc2.moveTo(this.x + 52, this.y - 80);

            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 52, this.y - 80);
            crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }



        move(): void {
            if (this.state == "down") {
                if (this.x < 0 || this.y > crc2.canvas.height) {
                    this.state = "up";
                }
            }
            if (this.state == "up" && this.x > crc2.canvas.width) {
                this.state = "down";
            }

            if (this.state == "up") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "down" || this.state == "shot") {
                this.x += this.dx;
                this.y += this.dy;
            }





        }




    }

}
