namespace aufgabe11 {
    export class Snow extends Move {

        move(): void {
            super.move();
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;

          

            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }


        draw(): void {
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = .2;

            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);

            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}


