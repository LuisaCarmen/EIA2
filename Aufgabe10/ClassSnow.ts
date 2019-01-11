namespace L10_Animation {
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
         
        moveSnow(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
           
        drawSnow(): void {
         
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        }
    }
}