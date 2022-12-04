import { Entity } from "./entity.js";

export class Enemyball extends Entity {
    constructor(position, velocity) {
        super(position)

        this.velocity = velocity;
        this.radius = 10;

    }

    tick(game) { 
        this.position.x += this.velocity.dx * game.deltaTime; 
        this.position.y += this.velocity.dy * game.deltaTime;


        for (let i = 0; i < game.entities.length; i++) { 
            let entity = game.entities[i];

            //används för att flytta ner spelare 1 vi träff
            if (entity = game.entities[0]) { // om entity är spelare 1 dvs entities[0]
                if (this.isplayerEnemyballsColliding(entity)) { 
                    game.player1.tip = game.canvas.height - 60;
                    game.player1.base = game.canvas.height;
                    game.player1.position.y = game.canvas.height - 30;
                }
            }

            //används för att flytta ner spelare 2 vid träff
            if (entity = game.entities[1]) {
                if (this.isplayerEnemyballsColliding(entity)) { // om det inträffat en kollision med en spelare dvs true
                    game.player2.tip = game.canvas.height - 60;
                    game.player2.base = game.canvas.height;
                    game.player2.position.y = game.canvas.height - 30;
                }
            }
        }
    }

    isplayerEnemyballsColliding(player) { 
        // metoden kollar om nån enemyboll kolliderar med en spelare
        let cdx = Math.abs(this.position.x - player.position.x);
        let cdy = Math.abs(this.position.y - player.position.y);

        if (cdx > (player.width / 2 + this.radius)) {
            return false;
        }
        if (cdy > (player.height / 2 + this.radius)) {
            return false;
        }
        if (cdx <= player.width / 2) {
            return true;
        }
        if (cdy <= player.height / 2) {
            return true;
        }
    }


    draw(game) { 
        game.context.beginPath(); 
        game.context.fillStyle = 'red';
        game.context.arc(
            this.position.x,
            this.position.y,
            this.radius, 0,
            Math.PI * 2);

        game.context.fill();
        game.context.closePath(); 
    }
}

//används för att slumpa fram en position i y axeln
export function randomPosition() {
    return Math.random() * 400
}

//används för att välja sida bollen ska komma från
export function generateSide() {
    let side = Math.random()
    if (side <= 0.5) {
        return true;
    }
    else return false;
}


