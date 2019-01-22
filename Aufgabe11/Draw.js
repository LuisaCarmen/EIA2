var aufgabe11;
(function (aufgabe11) {
    class Move extends aufgabe11.DrawNotMove {
        move() {
            super.move();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    aufgabe11.Move = Move;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=Draw.js.map