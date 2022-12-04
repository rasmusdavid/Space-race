import { Position, Velocity } from "./components.js";
import { Player } from "./player.js";
import { Enemyball, randomPosition, generateSide } from "./enemyBalls.js";
import { Particle } from "./particles.js"
import { PlayerBall } from "./playerBalls.js"

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.entities = [ // Lagrar alla enheter
            new Player(new Position(200, 500), 'white', 25, 60),
            new Player(new Position(400, 500), 'white', 25, 60)
        ];

        this.player1 = this.entities[0]; 
        this.player2 = this.entities[1];

        this.tickCount = 0;
        this.currentTime = Date.now();
    }

    drawScore() { 
        context.fillStyle = 'white';
        context.font = '60px Arial';
        context.textAlign = 'center';
        context.fillText(game.player1.score1, (this.canvas.width / 2) - 180, 580)

        context.fillStyle = 'white';
        context.font = '60px Arial';
        context.textAlign = 'center';
        context.fillText(game.player2.score2, (this.canvas.width / 2) + 180, 580)
    }

    start() {
        tick();
    }

}


export const canvas = document.getElementById("canvas");
export const context = canvas.getContext("2d");
export const game = new Game(canvas, context);

let lastTime = Date.now();

function tick() { 

    game.tickCount++;
    let side = generateSide();
    let generateposition = randomPosition();

    game.currentTime = Date.now();
    game.deltaTime = (game.currentTime - lastTime) / 1000;
    lastTime = game.currentTime;

    context.fillStyle = 'black'; 
    context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    if (game.tickCount % 60 === 0) {
        if (side) {
            game.entities.push(new Enemyball(new Position(-10, generateposition), new Velocity(100, 0)));
        }
        else {
            game.entities.push(new Enemyball(new Position(610, generateposition), new Velocity(-100, 0)));
        }
    }


    for (let i = 0; i < game.entities.length; i++) { 
        let entity = game.entities[i];

        entity.tick(game);  // Kallar på varje tick metod 
        entity.draw(game);   // kallar på varje draw
        game.drawScore(game); 

        if (entity instanceof Enemyball) {
            if (entity.position.x > game.canvas.width + 20||
                entity.position.x < -20) {
                game.entities.splice(i, 1);
            }
        }

        if (entity instanceof Particle) {
            if (entity.size < 0.3) {
                game.entities.splice(i, 1);
            }
        }

        if (entity instanceof PlayerBall) {
            if (entity.position.x > game.canvas.width ||
                entity.position.x < 0) {
                game.entities.splice(i, 1);
            }
        }
    }

    requestAnimationFrame(tick);
}

