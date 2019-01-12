namespace aufgabe10 {


    export class Child1 {
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
            crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            crc2.lineTo(this.x - 5, this.y + 30);
            crc2.lineTo(this.x - 5, this.y + 10);
            crc2.moveTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 10, this.y + 10);
            crc2.moveTo(this.x - 5, this.y + 10);
            crc2.lineTo(this.x - 10, this.y + 30);
            crc2.closePath();
            
            crc2.stroke();
            crc2.fill();
            
           
         
            crc2.lineWidth = 2;
            
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y + 28);
            crc2.lineTo(this.x - 15, this.y + 28);
            crc2.moveTo(this.x - 5, this.y + 23);
            crc2.lineTo(this.x - 15, this.y + 35);
            crc2.moveTo(this.x - 25, this.y + 26);
            crc2.lineTo(this.x - 40, this.y + 39);
            crc2.moveTo(this.x - 5, this.y + 33);
            crc2.lineTo(this.x - 45, this.y + 40);
            crc2.moveTo(this.x - 35, this.y + 25);
            crc2.stroke();


        }

        move(): void {

            if (this.y > 600) {
                this.y = 400;
                this.x = 500;
            }

            this.x += - 4;
            this.y += 2;
            this.draw();


          
        }



    }

}
