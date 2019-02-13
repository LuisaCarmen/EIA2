
namespace aufgabe10 {


    export class Snowball1 {

 

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
                crc2.fillStyle = "#E6E6E6";
                crc2.strokeStyle = "#E6E6E6";
                crc2.lineWidth = 1;

                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.stroke();
                this.timer--;
                console.log(this.timer);
            }


        }
        checkIfHit(_x: number, _y: number): boolean {
           
         
            crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 15, this.y - 20);
            crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            crc2.moveTo(this.x + 10, this.y - 40);
            crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            crc2.stroke();
           
          
            crc2.lineWidth = 3;
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y - 50);
            crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            console.log("bum");
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        
        
        
        
    }
}