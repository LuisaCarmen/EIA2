namespace aufgabe11 {
    export class Trees  extends DrawNotMove {
      
 
        draw(): void {


            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.lineWidth = 2;

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y - 12.5);
            crc2.lineTo(this.x + 5, this.y - 12.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 8);
            crc2.lineTo(this.x, this.y - 60);
            crc2.lineTo(this.x + 20, this.y - 8);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.lineWidth = 1;

           
        }
    }
}