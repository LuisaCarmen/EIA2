var endabgabe;
(function (endabgabe) {
    class Snowball1 extends endabgabe.Movement {
        move() { }
        draw() {
            if (this.time >= 0) {
                endabgabe.crc2.fillStyle = "#E6E6E6";
                endabgabe.crc2.strokeStyle = "#E6E6E6";
                endabgabe.crc2.lineWidth = 1;
                endabgabe.crc2.beginPath();
                endabgabe.crc2.moveTo(this.x, this.y);
                endabgabe.crc2.arc(this.x, this.y, ((this.time * this.time) / 3) + 15, 0, 2 * Math.PI);
                endabgabe.crc2.closePath();
                endabgabe.crc2.fill();
                endabgabe.crc2.stroke();
                this.time--;
            }
        }
        checkIfHit(_x, _y) {
            endabgabe.crc2.lineWidth = 50;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(_x, _y);
            endabgabe.crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            endabgabe.crc2.closePath();
            if (endabgabe.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        checkIfHitUp(_x, _y) {
            endabgabe.crc2.lineWidth = 50;
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(_x, _y);
            endabgabe.crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            endabgabe.crc2.closePath();
            if (endabgabe.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    endabgabe.Snowball1 = Snowball1;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=snowball.js.map