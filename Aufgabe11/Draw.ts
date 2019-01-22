namespace aufgabe11 {
    
    
    export class Move extends DrawNotMove {
        
        dx: number;
        dy: number;
        color: string;
        move(): void {
            
            super.move();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}