
namespace endabgabe {


    export class Snowball1 extends Movement {





        time: number;
        move(): void { }
        draw(): void {

            if (this.time >= 0) {
                crc2.fillStyle = "#E6E6E6";
                crc2.strokeStyle = "#E6E6E6";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.time * this.time) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.time--;

            }


        }
        checkIfHit(_x: number, _y: number): boolean {

            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            crc2.closePath();

            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }

        checkIfHitUp(_x: number, _y: number): boolean {

            crc2.lineWidth = 50;
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            crc2.closePath();

            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }





    }
}