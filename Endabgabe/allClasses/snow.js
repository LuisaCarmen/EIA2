var endabgabe;
(function (endabgabe) {
    class Snow extends endabgabe.Movement {
        move() {
            this.dy = 2;
            this.dx = Math.random() * 4 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 800) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            endabgabe.crc2.fillStyle = this.color;
            endabgabe.crc2.strokeStyle = "#000000";
            endabgabe.crc2.lineWidth = .2;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
            endabgabe.crc2.closePath();
            endabgabe.crc2.fill();
            endabgabe.crc2.stroke();
        }
    }
    endabgabe.Snow = Snow;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=snow.js.map