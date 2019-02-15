var aufgabe10;
(function (aufgabe10) {
    class Snowball1 {
        move() { }
        draw() {
            if (this.timer >= 0) {
                console.log(">=0");
                aufgabe10.crc2.fillStyle = "#E6E6E6";
                aufgabe10.crc2.strokeStyle = "#E6E6E6";
                aufgabe10.crc2.lineWidth = 1;
                aufgabe10.crc2.beginPath();
                aufgabe10.crc2.moveTo(this.x, this.y);
                aufgabe10.crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                aufgabe10.crc2.closePath();
                aufgabe10.crc2.fill();
                aufgabe10.crc2.stroke();
                this.timer--;
                console.log(this.timer);
            }
        }
        checkIfHit(_x, _y) {
            aufgabe10.crc2.lineWidth = 50;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(_x, _y);
            aufgabe10.crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            aufgabe10.crc2.closePath();
            if (aufgabe10.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        checkIfHitUp(_x, _y) {
            aufgabe10.crc2.lineWidth = 50;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(_x, _y);
            aufgabe10.crc2.arc(_x + 30, _y - 50, 60, 0, 5 * Math.PI);
            aufgabe10.crc2.closePath();
            if (aufgabe10.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    aufgabe10.Snowball1 = Snowball1;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=snowball.js.map