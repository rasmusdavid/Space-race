import { Enemyball } from "./enemyBalls.js"

export class PlayerBall extends Enemyball {
    constructor(position, velocity) {
        super(position, velocity), 
        
        this.radius = 5;
    }

    tick(game) {
        this.position.x += this.velocity.dx * game.deltaTime; 
        this.position.y += this.velocity.dy * game.deltaTime;

        for (let i = 0; i < game.entities.length; i++) { 
            let entity = game.entities[i];

            //används för att flytta ner spelare 1 vid träff
            if (entity = game.entities[0]) { 
                if (this.isplayerEnemyballsColliding(entity)) { 

                    game.player1.tip = game.canvas.height - 60;
                    game.player1.base = game.canvas.height;
                    game.player1.position.y = game.canvas.height - 30;
                }
            }
            
            //används för att flytta ner spelare 2 vid träff
            if (entity = game.entities[1]) {
                if (this.isplayerEnemyballsColliding(entity)) { 
                   
                    game.player2.tip = game.canvas.height - 60;
                    game.player2.base = game.canvas.height;
                    game.player2.position.y = game.canvas.height - 30;
                }
            }
        }
    }

    draw(game) {
        game.context.beginPath(); 
        game.context.fillStyle = '#af46e0';
        game.context.arc(
            this.position.x,
            this.position.y,
            this.radius, 0,
            Math.PI * 2);

        game.context.fill();
        game.context.closePath(); 
    }
}
