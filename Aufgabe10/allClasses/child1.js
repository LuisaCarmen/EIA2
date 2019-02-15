var aufgabe10;
(function (aufgabe10) {
    class Child1 {
        getSpeed() {
            if (this.state == "ridedown") {
                return Math.floor(this.dx * this.dy * -1 * 200);
            }
            if (this.state == "pullup") {
                return Math.floor(this.dx * this.dy * -1 * 100);
            }
        }
        draw() {
            if (this.state == "ridedown") {
                this.drawChild();
            }
            if (this.state == "dead") {
                this.drawSled();
            }
            if (this.state == "pullup") {
                this.drawChildUp();
            }
        }
        drawSled() {
            aufgabe10.crc2.strokeStyle = "brown";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.lineTo(this.x + 30, this.y - 30);
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.lineWidth = 3;
        }
        drawChild() {
            aufgabe10.crc2.strokeStyle = "brown";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.lineTo(this.x + 30, this.y - 30);
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.lineTo(this.x + 15, this.y - 20);
            aufgabe10.crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            aufgabe10.crc2.moveTo(this.x + 10, this.y - 40);
            aufgabe10.crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.fillStyle = "#000000";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x - 5, this.y - 50);
            aufgabe10.crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
        }
        drawChildUp() {
            aufgabe10.crc2.strokeStyle = "brown";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.lineTo(this.x + 30, this.y - 25);
            aufgabe10.crc2.moveTo(this.x + 30, this.y - 25);
            aufgabe10.crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.lineWidth = 2.25;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x + 50, this.y - 40);
            aufgabe10.crc2.lineTo(this.x + 52, this.y - 60);
            aufgabe10.crc2.lineTo(this.x + 62, this.y - 45);
            aufgabe10.crc2.moveTo(this.x + 52, this.y - 60);
            aufgabe10.crc2.lineTo(this.x + 52, this.y - 80);
            aufgabe10.crc2.lineTo(this.x + 47, this.y - 60);
            aufgabe10.crc2.lineTo(this.x + 30, this.y - 40);
            aufgabe10.crc2.moveTo(this.x + 52, this.y - 80);
            aufgabe10.crc2.lineTo(this.x + 60, this.y - 60);
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.fillStyle = "#000000";
            aufgabe10.crc2.lineWidth = 2;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x + 52, this.y - 80);
            aufgabe10.crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
        }
        move() {
            if (this.state == "ridedown") {
                if (this.x < 0 || this.y > aufgabe10.crc2.canvas.height) {
                    this.state = "pullup";
                }
            }
            if (this.state == "pullup" && this.x > aufgabe10.crc2.canvas.width) {
                this.state = "ridedown";
            }
            if (this.state == "pullup") {
                this.x -= (this.dx / 2);
                this.y -= (this.dy / 2);
            }
            if (this.state == "ridedown" || this.state == "dead") {
                this.x += this.dx;
                this.y += this.dy;
            }
        }
    }
    aufgabe10.Child1 = Child1;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=child1.js.map