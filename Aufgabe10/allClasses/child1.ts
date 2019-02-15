namespace aufgabe10 {


    export class Child1  {

        state: string;
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


            getSpeed(): number {
            if (this.state == "ridedown") {
                return Math.floor(this.dx * this.dy * -1 * 200);
            }
            if (this.state == "pullup") {
                return Math.floor(this.dx * this.dy * -1 * 100);
            }
        }
       


        draw(): void {

            if (this.state == "ridedown") {
                this.drawChild();
            }

            if (this.state == "dead") {
                this.drawSled();
            }

            if (this.state == "pullup") {
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
            crc2.lineWidth = 2.25;

            crc2.beginPath();
            crc2.moveTo(this.x + 50, this.y - 40);
            crc2.lineTo(this.x + 52, this.y - 60);
            crc2.lineTo(this.x + 62, this.y - 45);
            crc2.moveTo(this.x + 52, this.y - 60);
            crc2.lineTo(this.x + 52, this.y - 80);
            crc2.lineTo(this.x + 47, this.y - 60);
            crc2.lineTo(this.x + 30, this.y - 40);
            crc2.moveTo(this.x + 52, this.y - 80);
            crc2.lineTo(this.x + 60, this.y - 60);
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
            if (this.state == "ridedown") {
                if (this.x < 0 || this.y > crc2.canvas.height) {
                    this.state = "pullup";
                }
            }
            if (this.state == "pullup" && this.x > crc2.canvas.width) {
                this.state = "ridedown";
            }

            if (this.state == "pullup") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "ridedown" || this.state == "dead") {
                this.x += this.dx;
                this.y += this.dy;
            }





        }




    }

}
