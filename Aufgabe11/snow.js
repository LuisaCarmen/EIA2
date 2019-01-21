var aufgabe11;
(function (aufgabe11) {
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
            aufgabe11.crc2.fillStyle = this.color;
            aufgabe11.crc2.strokeStyle = "#000000";
            aufgabe11.crc2.lineWidth = .2;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            aufgabe11.crc2.closePath();
            aufgabe11.crc2.fill();
            aufgabe11.crc2.stroke();
        }
    }
    aufgabe11.Snow = Snow;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=snow.js.map