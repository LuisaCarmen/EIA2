var aufgabe10;
(function (aufgabe10) {
    class Snowball {
        move() { }
        draw() {
            if (this.timer >= 0) {
                console.log(">=0");
                aufgabe10.crc2.fillStyle = "#ffffff";
                aufgabe10.crc2.strokeStyle = "#ffffff";
                aufgabe10.crc2.lineWidth = 1;
                aufgabe10.crc2.beginPath();
                aufgabe10.crc2.moveTo(this.x, this.y);
                aufgabe10.crc2.arc(this.x, this.y, ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                aufgabe10.crc2.closePath();
                aufgabe10.crc2.fill();
                aufgabe10.crc2.stroke();
                this.timer--;
            }
        }
    }
    aufgabe10.Snowball = Snowball;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=snowball.js.map