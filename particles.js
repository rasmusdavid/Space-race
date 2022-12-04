
import { context } from "./game.js"

export class Particle {
    constructor( x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 1;
        this.speedX = 0 
        this.speedY = 0.5 
        this.color = 'red'
    }

    tick() {
        this.x +=this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -=0.1; 
    }

    draw() { 
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}
