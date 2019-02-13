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
            aufgabe10.crc2.quadraticCurveTo(this.x - 30, this.y + 20, this.x - 20, this.y - 10);
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.lineTo(this.x + 15, this.y - 20);
            aufgabe10.crc2.lineTo(this.x + 3, this.y - 50); //oberkörper
            aufgabe10.crc2.moveTo(this.x + 10, this.y - 40);
            aufgabe10.crc2.lineTo(this.x - 20, this.y - 10); //linker arm
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x - 5, this.y - 50);
            aufgabe10.crc2.arc(this.x + 3, this.y - 50, 6, 0, 2 * Math.PI);
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
            console.log("bum");
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