import { Entity } from "./entity.js";
import { Particle } from "./particles.js"

export class Player extends Entity {
    constructor(position, color, width, height) {
        super(position);
        this.color = color;
        this.width = width;
        this.height= height;
        this.speed = 200;

        this.score1 = 0;
        this.score2 = 0;

        this.upPressed = false;
        this.downPressed = false;
        
        this.x1 = this.position.x + width/2;
        this.x2 = this.position.x - width/2;
        this.tip = this.position.y - height/2;
        this.base = this.position.y + height/2;
    }

    tick(game) {
        // Kod som beskriver spelarens rörelse vid tangenttryckning
        if (game.player1.upPressed) {
            game.player1.tip  -= this.speed * game.deltaTime;
            game.player1.base -= this.speed * game.deltaTime;
            game.player1.position.y -= this.speed * game.deltaTime;
        }
        if (game.player1.downPressed) {
            game.player1.tip  += this.speed * game.deltaTime;
            game.player1.base += this.speed * game.deltaTime;
            game.player1.position.y += this.speed * game.deltaTime;
        }
        if (game.player2.upPressed) {
            game.player2.tip  -= this.speed * game.deltaTime;
            game.player2.base -= this.speed * game.deltaTime;
            game.player2.position.y -= this.speed * game.deltaTime;
        }
        if (game.player2.downPressed) {
            game.player2.tip  += this.speed * game.deltaTime;
            game.player2.base += this.speed * game.deltaTime;
            game.player2.position.y += this.speed * game.deltaTime;
        }
     
        // Kod som förflyttar SPELARE 1 ner till startpunkt när spelare 1 passerar taket
        if (game.player1.tip < 0) {
            if (game.player1.base < 0) {
                if (game.player1.position.y < 0) {
                    game.player1.score1 += 1;
                    game.player1.tip = game.canvas.height - 60;
                    game.player1.base = game.canvas.height;
                    game.player1.position.y = game.canvas.height - 30;
                   
                }
            }
        }

        // Kod som förflyttar SPELARE 2 ner till startpunkt när spelare 2 passerar taket
        if (game.player2.tip < 0) {
            if (game.player2.base < 0) {
                if (game.player2.position.y < 0 - 30) {
                    game.player2.score2 ++;
                    game.player2.tip = game.canvas.height - 60;
                    game.player2.base = game.canvas.height;
                    game.player2.position.y = game.canvas.height - 30;
                   
                }
            }
        }

        // Kod som förhindrar SPELARE 1 att backa ner genom marken/golvet
        if (game.player1.tip > game.canvas.height - 60) {
            if (game.player1.base > game.canvas.height) {
                if (game.player1.position.y > game.canvas.height - 30) {
                    game.player1.tip = game.canvas.height - 60;
                    game.player1.base = game.canvas.height;
                    game.player1.position.y = game.canvas.height - 30;

                }
            }
        }

        // Kod som förhindrar SPELARE 2 att backa ner genom marken/golvet
        if (game.player2.tip > game.canvas.height - 60) {
            if (game.player2.base > game.canvas.height) {
                if (game.player2.position.y > game.canvas.height - 30) {
                    game.player2.tip = game.canvas.height - 60;
                    game.player2.base = game.canvas.height;
                    game.player2.position.y = game.canvas.height - 30;

                }
            }
        }
          
        if (game.tickCount % 1 === 0 ){
            let particle = new Particle(this.position.x, this.base);
            game.entities.push(particle);
            
        }
    }

    
    draw(game) { // Ritar ut spelaren som en raket enligt nedan

        // Raketmotorn
        game.context.strokeStyle = 'red';
        game.context.beginPath();
        game.context.moveTo(this.x2+3, this.base-3);
        game.context.quadraticCurveTo(this.x2-3, this.base+5, this.x2+3, this.base+14);
        game.context.lineTo(this.x2+6, this.base);
        game.context.quadraticCurveTo(this.x2+4, this.base+14, this.x2+12, this.base+22);
        game.context.quadraticCurveTo(this.x1-4, this.base+14, this.x1-6, this.base);
        game.context.lineTo(this.x1-3, this.base+14);
        game.context.quadraticCurveTo(this.x1+3, this.base+5, this.x1-3, this.base-3);
        game.context.lineWidth = 2;
        game.context.stroke();
        game.context.closePath();

        // Raketen
        game.context.strokeStyle = this.color;
        game.context.beginPath();
        game.context.moveTo(this.position.x, this.base-14);
        game.context.lineTo(this.x1, this.base);
        game.context.quadraticCurveTo(this.x1, this.base-60, this.position.x, this.tip);
        game.context.quadraticCurveTo(this.x2, this.base-60, this.x2, this.base);
        game.context.lineTo(this.position.x, this.base-13);
        game.context.lineWidth = 3;
        game.context.stroke();
        game.context.moveTo(this.x1-3, this.position.y-20);
        game.context.quadraticCurveTo(this.position.x, this.position.y-17, this.x2+3, this.position.y-20);
        game.context.lineWidth = 3;
        game.context.stroke();
        
        // fönstret
        game.context.beginPath();
        game.context.fillStyle = 'yellow';
        game.context.arc(this.position.x, this.position.y-6, 5, 0, Math.PI * 2)
        game.context.fill();
        game.context.closePath();

    }
}

