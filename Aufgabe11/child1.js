var aufgabe11;
(function (aufgabe11) {
    class ChildPull {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 500) {
                this.x = 0;
                this.y = Math.random() * 100 + 700;
            }
            this.draw();
        }
        draw() {
            aufgabe11.crc2.strokeStyle = "brown";
            aufgabe11.crc2.lineWidth = 3;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x, this.y);
            aufgabe11.crc2.lineTo(this.x + 30, this.y - 25);
            aufgabe11.crc2.moveTo(this.x + 30, this.y - 25);
            aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y - 40, this.x + 30, this.y - 40);
            aufgabe11.crc2.stroke();
            aufgabe11.crc2.strokeStyle = "black";
            aufgabe11.crc2.lineWidth = 3;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x + 50, this.y - 40);
            aufgabe11.crc2.lineTo(this.x + 52, this.y - 60);
            aufgabe11.crc2.moveTo(this.x + 52, this.y - 60);
            aufgabe11.crc2.lineTo(this.x + 52, this.y - 80);
            aufgabe11.crc2.lineTo(this.x + 47, this.y - 60);
            aufgabe11.crc2.lineTo(this.x + 30, this.y - 40);
            aufgabe11.crc2.moveTo(this.x + 52, this.y - 80);
            aufgabe11.crc2.stroke();
            aufgabe11.crc2.strokeStyle = "#000000";
            aufgabe11.crc2.fillStyle = "#000000";
            aufgabe11.crc2.lineWidth = 4;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x + 52, this.y - 80);
            aufgabe11.crc2.arc(this.x + 52, this.y - 88, 6, 0, 2 * Math.PI);
            aufgabe11.crc2.fill();
            aufgabe11.crc2.stroke();
        }
    }
    aufgabe11.ChildPull = ChildPull;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=child1.js.map