var endabgabe;
(function (endabgabe) {
    class General {
        move() { }
        draw() { }
    }
    endabgabe.General = General;
    class Movement extends General {
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    endabgabe.Movement = Movement;
    class Child1 extends Movement {
        // x: number;
        // y: number;
        // dx: number;
        //dy: number;
        // color: string;
        calculateSpeed() {
            if (this.state == "down") {
                return Math.floor(this.dx * this.dy * -1 * 20);
            }
            if (this.state == "up") {
                return Math.floor(this.dx * this.dy * -1 * 15);
            }
        }
        draw() {
            if (this.state == "down") {
                this.drawChild();
            }
            if (this.state == "shot") {
                this.drawSled();
            }
            if (this.state == "up") {
                this.drawChildUp();
            }
        }
        drawSled() {
            endabgabe.crc2.strokeStyle = "brown";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.lineTo(this.x + 30, this.y - 30);
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.lineWidth = 3;
        }
        drawChild() {
            endabgabe.crc2.strokeStyle = "brown";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.lineTo(this.x + 30, this.y - 30);
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.lineTo(this.x + 15, this.y - 20);
            endabgabe.crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            endabgabe.crc2.moveTo(this.x + 10, this.y - 40);
            endabgabe.crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.fillStyle = "#000000";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x - 5, this.y - 50);
            endabgabe.crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            endabgabe.crc2.fill();
            endabgabe.crc2.stroke();
        }
        drawChildUp() {
            endabgabe.crc2.strokeStyle = "brown";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x, this.y);
            endabgabe.crc2.lineTo(this.x + 30, this.y - 25);
            endabgabe.crc2.moveTo(this.x + 30, this.y - 25);
            endabgabe.crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.lineWidth = 3;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x + 50, this.y - 40);
            endabgabe.crc2.lineTo(this.x + 52, this.y - 60);
            endabgabe.crc2.lineTo(this.x + 62, this.y - 45);
            endabgabe.crc2.moveTo(this.x + 52, this.y - 60);
            endabgabe.crc2.lineTo(this.x + 52, this.y - 80);
            endabgabe.crc2.lineTo(this.x + 47, this.y - 60);
            endabgabe.crc2.lineTo(this.x + 30, this.y - 40);
            endabgabe.crc2.moveTo(this.x + 52, this.y - 80);
            endabgabe.crc2.stroke();
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.fillStyle = "#000000";
            endabgabe.crc2.lineWidth = 2;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(this.x + 52, this.y - 80);
            endabgabe.crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            endabgabe.crc2.fill();
            endabgabe.crc2.stroke();
        }
        move() {
            if (this.state == "down") {
                if (this.x < 0 || this.y > endabgabe.crc2.canvas.height) {
                    this.state = "up";
                }
            }
            if (this.state == "up" && this.x > endabgabe.crc2.canvas.width) {
                this.state = "down";
            }
            if (this.state == "up") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "down" || this.state == "shot") {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    endabgabe.Child1 = Child1;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=child1.js.map