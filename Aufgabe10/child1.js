var aufgabe10;
(function (aufgabe10) {
    class Child1 {
        draw() {
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
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.y > 700) {
                this.x = 500;
                this.y = Math.random() * 250 + 150;
            }
            this.draw();
        }
    }
    aufgabe10.Child1 = Child1;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=child1.js.map