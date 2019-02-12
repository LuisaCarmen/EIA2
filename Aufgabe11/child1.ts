namespace aufgabe11 {


   export class Kids extends DrawNotMove {
       

       
    
       
       
      state: string;
        
        draw(): void {
            if (this.state == "drive") {
                this.drawDrive();
            }
           
        }

        move(): void {
            if (this.state == "drive") {

                if (this.y > crc2.canvas.height) {
                    this.state = "pull";
                }
                else if (this.x < 0) {
                    this.state = "pull";
                }
                else {
                    this.x += this.dx;
                    this.y += this.dy;
                }
            }

            if (this.state == "pull") {
                if (this.x > crc2.canvas.width) {
                    this.state = "drive";
                }
                else {
                    this.x -= this.dx;
                    this.y -= this.dy;
                }
            }
        }


       
       
        drawDrive(): void {

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
    
    }
    
    
}