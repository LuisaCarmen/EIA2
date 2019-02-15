var aufgabe10;
(function (aufgabe10) {
    class Snow {
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            aufgabe10.crc2.fillStyle = this.color;
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.lineWidth = .2;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            aufgabe10.crc2.closePath();
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
        }
    }
    aufgabe10.Snow = Snow;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=snow.js.map