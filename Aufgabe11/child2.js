var aufgabe11;
(function (aufgabe11) {
    class ChildDrive {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0 || this.y > 800) {
                this.x = 500;
                this.y = Math.random() * 370 + 210;
            }
            this.draw();
        }
        draw() {
            aufgabe11.crc2.strokeStyle = "brown";
            aufgabe11.crc2.lineWidth = 3;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x, this.y);
            aufgabe11.crc2.lineTo(this.x + 30, this.y - 30);
            aufgabe11.crc2.moveTo(this.x, this.y);
            aufgabe11.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            aufgabe11.crc2.stroke();
            aufgabe11.crc2.strokeStyle = "#000000";
            aufgabe11.crc2.lineWidth = 3;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x, this.y);
            aufgabe11.crc2.lineTo(this.x + 15, this.y - 20);
            aufgabe11.crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            aufgabe11.crc2.moveTo(this.x + 10, this.y - 40);
            aufgabe11.crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            aufgabe11.crc2.stroke();
            aufgabe11.crc2.strokeStyle = "#000000";
            aufgabe11.crc2.fillStyle = "#000000";
            aufgabe11.crc2.lineWidth = 3;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x - 5, this.y - 50);
            aufgabe11.crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            aufgabe11.crc2.fill();
            aufgabe11.crc2.stroke();
        }
    }
    aufgabe11.ChildDrive = ChildDrive;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=child2.js.map