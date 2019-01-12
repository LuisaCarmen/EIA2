var aufgabe10;
(function (aufgabe10) {
    class Child1 {
        draw() {
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.arc(this.x - 5, this.y, 5, 0, 2 * Math.PI);
            aufgabe10.crc2.lineTo(this.x - 5, this.y + 30);
            aufgabe10.crc2.lineTo(this.x - 5, this.y + 10);
            aufgabe10.crc2.moveTo(this.x - 5, this.y + 10);
            aufgabe10.crc2.lineTo(this.x - 10, this.y + 10);
            aufgabe10.crc2.moveTo(this.x - 5, this.y + 10);
            aufgabe10.crc2.lineTo(this.x - 10, this.y + 30);
            aufgabe10.crc2.closePath();
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.fill();
            aufgabe10.crc2.lineWidth = 2;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x - 15, this.y + 28);
            aufgabe10.crc2.lineTo(this.x - 15, this.y + 28);
            aufgabe10.crc2.moveTo(this.x - 5, this.y + 23);
            aufgabe10.crc2.lineTo(this.x - 15, this.y + 35);
            aufgabe10.crc2.moveTo(this.x - 25, this.y + 26);
            aufgabe10.crc2.lineTo(this.x - 40, this.y + 39);
            aufgabe10.crc2.moveTo(this.x - 5, this.y + 33);
            aufgabe10.crc2.lineTo(this.x - 45, this.y + 40);
            aufgabe10.crc2.moveTo(this.x - 35, this.y + 25);
            aufgabe10.crc2.stroke();
        }
        move() {
            if (this.y > 600) {
                this.y = 400;
                this.x = 500;
            }
            this.x += -4;
            this.y += 2;
            this.draw();
        }
    }
    aufgabe10.Child1 = Child1;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=child1.js.map