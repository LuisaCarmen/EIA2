

namespace aufgabe10 {


    export class Snowball {



        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;



        timer: number;
        move(): void {}
        draw(): void {

            if (this.timer >= 0) {
                console.log(">=0");
                crc2.fillStyle = "#ffffff";
                crc2.strokeStyle = "#ffffff";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.timer--;
            }


        }
    }
}