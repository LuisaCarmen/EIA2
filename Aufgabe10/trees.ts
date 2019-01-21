namespace aufgabe10 {
    export class Tree {
        x: number;
        y: number;
        color: string;
 
        draw(): void {


            crc2.fillStyle = "#A52A2A";
            crc2.strokeStyle = "#A52A2A";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y + 7.5);
            crc2.lineTo(this.x - 5, this.y - 12.5);
            crc2.lineTo(this.x + 5, this.y - 12.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#228B22";
            crc2.strokeStyle = "#0f7027";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y - 10);
            crc2.lineTo(this.x, this.y - 55);
            crc2.lineTo(this.x + 30, this.y - 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "#228B22";
            crc2.strokeStyle = "#0f7027";
            crc2.lineWidth = 1;

            crc2.beginPath();
            crc2.moveTo(this.x - 27, this.y - 27.5);
            crc2.lineTo(this.x, this.y - 75);
            crc2.lineTo(this.x + 27, this.y - 27.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}