
namespace aufgabe10 {


    export class Child2 {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


        draw(): void {

            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

            crc2.moveTo(this.x, this.y);



            crc2.beginPath();


            crc2.lineTo(this.x - 5 , 560); //bein rechts
            crc2.moveTo(this.x + 352, 560); //körper
            crc2.lineTo(this.x + 352, 530);
            crc2.lineTo(this.x + 347, 555);
            crc2.lineTo(this.x + 330, 570);
            crc2.moveTo(this.x + 352, 535);
            crc2.stroke();

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.lineWidth = 2;
            crc2.beginPath();

            crc2.arc(this.x + 352, 522, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 4;

            crc2.beginPath();
            crc2.moveTo(this.x + 300, 610);
            crc2.lineTo(this.x + 330, 585);
            crc2.moveTo(this.x + 310, 603);
            crc2.moveTo(this.x + 330, 585);
            crc2.quadraticCurveTo(this.x + 350, 570, this.x + 330, 570);
            crc2.stroke();



        }



        move(): void {

            if (this.y > 400) {
                this.y = 0;
                this.x = 520;
            }

            this.x += - 4;
            this.y += 2;
            this.draw();


        }


    }

}


