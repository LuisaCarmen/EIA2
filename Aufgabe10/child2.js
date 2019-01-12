var aufgabe10;
(function (aufgabe10) {
    class Child2 {
        draw() {
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.lineWidth = 3;
            aufgabe10.crc2.moveTo(this.x, this.y);
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.lineTo(this.x - 5, 560); //bein rechts
            aufgabe10.crc2.moveTo(this.x + 352, 560); //körper
            aufgabe10.crc2.lineTo(this.x + 352, 530);
            aufgabe10.crc2.lineTo(this.x + 347, 555);
            aufgabe10.crc2.lineTo(this.x + 330, 570);
            aufgabe10.crc2.moveTo(this.x + 352, 535);
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#000000";
            aufgabe10.crc2.fillStyle = "#000000";
            aufgabe10.crc2.lineWidth = 2;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.arc(this.x + 352, 522, 6, 0, 2 * Math.PI);
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.strokeStyle = "#8B4513";
            aufgabe10.crc2.lineWidth = 4;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x + 300, 610);
            aufgabe10.crc2.lineTo(this.x + 330, 585);
            aufgabe10.crc2.moveTo(this.x + 310, 603);
            aufgabe10.crc2.moveTo(this.x + 330, 585);
            aufgabe10.crc2.quadraticCurveTo(this.x + 350, 570, this.x + 330, 570);
            aufgabe10.crc2.stroke();
        }
        move() {
            if (this.y > 400) {
                this.y = 0;
                this.x = 520;
            }
            this.x += -4;
            this.y += 2;
            this.draw();
        }
    }
    aufgabe10.Child2 = Child2;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=child2.js.map