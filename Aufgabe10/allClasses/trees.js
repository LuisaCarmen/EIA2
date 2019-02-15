var aufgabe10;
(function (aufgabe10) {
    class Tree extends aufgabe10.NotMoving {
        draw() {
            aufgabe10.crc2.fillStyle = "#A52A2A";
            aufgabe10.crc2.strokeStyle = "#A52A2A";
            aufgabe10.crc2.lineWidth = 1;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x + 5, this.y + 7.5);
            aufgabe10.crc2.lineTo(this.x - 5, this.y + 7.5);
            aufgabe10.crc2.lineTo(this.x - 5, this.y - 12.5);
            aufgabe10.crc2.lineTo(this.x + 5, this.y - 12.5);
            aufgabe10.crc2.closePath();
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.fillStyle = "#228B22";
            aufgabe10.crc2.strokeStyle = "#0f7027";
            aufgabe10.crc2.lineWidth = 1;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x - 30, this.y - 10);
            aufgabe10.crc2.lineTo(this.x, this.y - 55);
            aufgabe10.crc2.lineTo(this.x + 30, this.y - 10);
            aufgabe10.crc2.closePath();
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
            aufgabe10.crc2.fillStyle = "#228B22";
            aufgabe10.crc2.strokeStyle = "#0f7027";
            aufgabe10.crc2.lineWidth = 1;
            aufgabe10.crc2.beginPath();
            aufgabe10.crc2.moveTo(this.x - 27, this.y - 27.5);
            aufgabe10.crc2.lineTo(this.x, this.y - 75);
            aufgabe10.crc2.lineTo(this.x + 27, this.y - 27.5);
            aufgabe10.crc2.closePath();
            aufgabe10.crc2.fill();
            aufgabe10.crc2.stroke();
        }
    }
    aufgabe10.Tree = Tree;
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=trees.js.map