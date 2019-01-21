var aufgabe11;
(function (aufgabe11) {
    class Trees {
        draw() {
            aufgabe11.crc2.fillStyle = "#brown";
            aufgabe11.crc2.strokeStyle = "brown";
            aufgabe11.crc2.lineWidth = 2;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x + 5, this.y + 7.5);
            aufgabe11.crc2.lineTo(this.x - 5, this.y + 7.5);
            aufgabe11.crc2.lineTo(this.x - 5, this.y - 12.5);
            aufgabe11.crc2.lineTo(this.x + 5, this.y - 12.5);
            aufgabe11.crc2.closePath();
            aufgabe11.crc2.fill();
            aufgabe11.crc2.stroke();
            aufgabe11.crc2.fillStyle = "green";
            aufgabe11.crc2.strokeStyle = "green";
            aufgabe11.crc2.lineWidth = 1;
            aufgabe11.crc2.beginPath();
            aufgabe11.crc2.moveTo(this.x - 20, this.y - 8);
            aufgabe11.crc2.lineTo(this.x, this.y - 60);
            aufgabe11.crc2.lineTo(this.x + 20, this.y - 8);
            aufgabe11.crc2.closePath();
            aufgabe11.crc2.fill();
            aufgabe11.crc2.stroke();
            aufgabe11.crc2.fillStyle = "brown";
            aufgabe11.crc2.strokeStyle = "brown";
            aufgabe11.crc2.lineWidth = 1;
        }
    }
    aufgabe11.Trees = Trees;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=trees.js.map